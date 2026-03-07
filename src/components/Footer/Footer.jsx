import './Footer.css';

/**
 * Футер сайта — лого и кнопка «Наверх».
 */
export default function Footer() {
  return (
    <footer className="container">
      <div className="footer-card">
        <div>
          <div className="footer-logo">ТХАЛИ</div>
          <p className="footer-text">
            Мобильное меню с быстрыми категориями, корректными карточками блюд и отдельной
            полосой печатных постеров.
          </p>
        </div>
        <a className="button button--secondary" href="#top">Наверх</a>
      </div>
    </footer>
  );
}
