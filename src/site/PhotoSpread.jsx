import { useRef, useState } from "react";
import { IconClose, IconNext, IconPrev } from "./icons.jsx";

export default function PhotoSpread({ photos, layout }) {
  const dialog = useRef(null);
  const [selected, setSelected] = useState(0);
  const current = photos[selected];
  const isCover = layout === "cover";

  function open(index) {
    setSelected(index);
    dialog.current.showModal();
  }

  function move(step) {
    setSelected(index => (index + step + photos.length) % photos.length);
  }

  return (
    <>
      <div className={`photo-spread spread-${layout}`}>
        {photos.map((photo, index) => (
          <button key={photo.src} type="button" className="photo-tile"
            onClick={() => open(index)} aria-label={`Ampliar fotografia. ${photo.legenda}`}>
            <img src={photo.src} width={photo.w} height={photo.h} alt={photo.alt}
              loading={isCover ? "eager" : "lazy"} fetchPriority={isCover && index === 1 ? "high" : undefined} />
            <span className="tile-caption">{photo.label || photo.legenda}</span>
            <span className="expand-mark" aria-hidden="true">⤢</span>
          </button>
        ))}
      </div>
      <dialog ref={dialog} className="photo-viewer" aria-label="Visualização de fotografia"
        onKeyDown={event => {
          if (event.key === "ArrowLeft") move(-1);
          if (event.key === "ArrowRight") move(1);
        }}>
        <div className="viewer-top">
          <span>Acervo fotográfico · Asa Verde</span>
          <button type="button" onClick={() => dialog.current.close()} autoFocus><IconClose /> Fechar</button>
        </div>
        <figure>
          {/** The full-size image is loaded only when the reader opens the dialog. */}
          <img key={current.src} src={current.src} loading="lazy" width={current.w} height={current.h} alt={current.alt} />
          <figcaption aria-live="polite">
            <span>{current.legenda}</span>
            <span className="viewer-controls">
              <button type="button" aria-label="Fotografia anterior" onClick={() => move(-1)}><IconPrev /></button>
              <span>{selected + 1} / {photos.length}</span>
              <button type="button" aria-label="Próxima fotografia" onClick={() => move(1)}><IconNext /></button>
            </span>
          </figcaption>
        </figure>
      </dialog>
    </>
  );
}
