import './Hero.css';

/**
 * Герой-секция — главный блок с приветствием, фактами и постером справа.
 */
export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        {/* Левая часть — текстовый блок */}
        <div className="hero-copy surface-card">
          <span className="eyebrow">Премиальная индийская кухня</span>
          <h1>ТХАЛИ</h1>
          <p className="hero-lead">
            «Вкус настоящей Индии в каждой тарелке». Быстрая навигация сверху, точные цены,
            крупные карточки и печатные постеры в одном мобильном меню.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#combo">Смотреть меню</a>
            <a className="button button--secondary" href="#posters">Печатные постеры</a>
          </div>
          <dl className="hero-facts">
            <div><dt>Режим</dt><dd>11:00 - 23:00</dd></div>
            <div><dt>Разделов</dt><dd>8</dd></div>
            <div><dt>Позиции</dt><dd>40</dd></div>
            <div><dt>Формат</dt><dd>Цифровое + печать</dd></div>
          </dl>
          <p className="hero-note">
            Интерфейс собран mobile-first: категории остаются под рукой, а весь основной каталог
            читается без мелкого текста и без лишнего зума.
          </p>
        </div>

        {/* Правая часть — постер */}
        <a
          className="hero-poster surface-card"
          href="/images/1.png"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Открыть постер фирменной тарелки в полном размере"
        >
          <img
            src="/images/web/1.webp"
            alt="Печатный постер фирменной тарелки"
            width="720"
            height="1018"
            fetchpriority="high"
          />
          <div className="hero-poster__meta">
            <div>
              <span className="poster-eyebrow">Постер 01</span>
              <strong>Фирменные тарелки</strong>
            </div>
            <span className="poster-action">PNG</span>
          </div>
        </a>
      </div>
    </section>
  );
}
