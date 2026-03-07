import { posters } from '../../data/posters';
import './Posters.css';

/**
 * Карточка одного постера.
 */
function PosterTile({ poster, isFirst }) {
  return (
    <article className="poster-tile">
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
        <div className="poster-tile__actions">
          <a className="poster-action-link" href={`#${poster.sectionId}`}>К разделу</a>
          <a
            className="poster-action-link"
            href={poster.png}
            target="_blank"
            rel="noopener noreferrer"
          >
            PNG
          </a>
        </div>
      </div>
    </article>
  );
}

/**
 * Горизонтальная полоса постеров с прокруткой.
 */
export default function PosterStrip() {
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
            <PosterTile key={poster.index} poster={poster} isFirst={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
