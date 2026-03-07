import { useState } from 'react';
import { posters } from '../../data/posters';
import './Posters.css';

/**
 * Карточка одного постера.
 */
function PosterTile({ poster, isFirst, onOpen }) {
  return (
    <article className="poster-tile" onClick={() => onOpen(poster)}>
      <img
        src={poster.image}
        alt={`Постер: ${poster.title}`}
        width="720"
        height="1018"
        loading={isFirst ? undefined : 'lazy'}
        decoding={isFirst ? undefined : 'async'}
      />
      <div className="poster-tile__body">
        <span className="poster-index">{poster.index}</span>
        <h3>{poster.title}</h3>
        <p>{poster.description}</p>
      </div>
    </article>
  );
}

/**
 * Горизонтальная полоса постеров с прокруткой.
 */
export default function PosterStrip() {
  const [activePoster, setActivePoster] = useState(null);

  const closeModal = () => setActivePoster(null);

  return (
    <section id="posters" className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-head__content">
            <span className="section-label">Печатная версия</span>
            <div className="section-title-row">
              <h2>Постеры меню</h2>
              <span className="section-range">9 файлов</span>
            </div>
            <p className="section-copy">
              Листайте вправо на телефоне. Каждый постер можно открыть в полном PNG и быстро
              перейти к соответствующему разделу цифрового меню.
            </p>
          </div>
        </div>

        <div className="poster-strip" aria-label="Постеры меню">
          {posters.map((poster, i) => (
            <PosterTile key={poster.index} poster={poster} isFirst={i === 0} onOpen={setActivePoster} />
          ))}
        </div>
      </div>

      {activePoster && (
        <div className="poster-modal" onClick={closeModal} role="dialog" aria-modal="true" aria-label="Просмотр постера">
          <div className="poster-modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="poster-modal__close" onClick={closeModal} aria-label="Закрыть">
              &times;
            </button>
            <img 
              src={activePoster.png || activePoster.image} 
              alt={activePoster.title} 
              className="poster-modal__image"
            />
          </div>
        </div>
      )}
    </section>
  );
}
