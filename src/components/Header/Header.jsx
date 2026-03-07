import { useState, useEffect, useRef, useCallback } from 'react';
import { menuSections } from '../../data/menu';
import './Header.css';

/**
 * Компонент хедера — логотип, кнопка постеров и навигация по секциям.
 * Включает IntersectionObserver для подсветки активной секции при скролле.
 */
export default function Header() {
  const [activeId, setActiveId] = useState('combo');
  const navRef = useRef(null);

  // Скролл навигации к активной ссылке
  const scrollNavToActive = useCallback((id) => {
    if (!navRef.current) return;
    const activeLink = navRef.current.querySelector(`[href="#${id}"]`);
    if (activeLink) {
      activeLink.scrollIntoView({ block: 'nearest', inline: 'center' });
    }
  }, []);

  // IntersectionObserver для определения видимой секции
  useEffect(() => {
    const sectionEls = menuSections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActiveId(visible.target.id);
          scrollNavToActive(visible.target.id);
        }
      },
      { rootMargin: '-38% 0px -48% 0px', threshold: [0.15, 0.3, 0.55] },
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [scrollNavToActive]);

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-top">
          <div className="brand">
            <a className="brand__title" href="#top">ТХАЛИ</a>
            <span className="brand__subtitle">Мобильное меню индийской кухни</span>
          </div>
          <a className="header-action" href="#posters">Постеры</a>
        </div>
        <nav className="section-nav" ref={navRef} aria-label="Разделы меню">
          {menuSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={activeId === section.id ? 'is-active' : ''}
            >
              {section.navLabel}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
