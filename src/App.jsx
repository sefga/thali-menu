import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import PosterStrip from './components/Posters/PosterStrip';
import MenuSection from './components/Menu/MenuSection';
import Footer from './components/Footer/Footer';
import { menuSections } from './data/menu';

/**
 * Корневой компонент приложения ТХАЛИ.
 * Собирает все секции меню из данных и рендерит страницу.
 */
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PosterStrip />
        {menuSections.map((section) => (
          <MenuSection key={section.id} section={section} />
        ))}
      </main>
      <Footer />
    </>
  );
}
