import FeaturedCard from './FeaturedCard';
import MenuGroup from './MenuGroup';
import ItemCard from './ItemCard';
import './Menu.css';

/**
 * SectionHead — шапка раздела меню (метка, заголовок, диапазон цен, описание, ссылка постера).
 */
function SectionHead({ section }) {
  return (
    <div className="section-head">
      <div className="section-head__content">
        <span className="section-label">{section.sectionLabel}</span>
        <div className="section-title-row">
          <h2>{section.title}</h2>
          <span className="section-range">{section.range}</span>
        </div>
        <p className="section-copy">{section.description}</p>
      </div>
      <a
        className="inline-link"
        href={section.posterLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Постер PNG
      </a>
    </div>
  );
}

/**
 * Универсальный компонент секции меню.
 * Рендерит разный контент в зависимости от section.type:
 *   - 'featured' — карточки FeaturedCard (комбо, роллы)
 *   - 'groups'   — группы MenuGroup (супы, тандур, рис, сладости)
 *   - 'grid'     — плоский грид ItemCard (карри, выпечка)
 */
export default function MenuSection({ section }) {
  const renderContent = () => {
    switch (section.type) {
      case 'featured':
        return (
          <div className="featured-grid">
            {section.items.map((item) => (
              <FeaturedCard key={item.name} item={item} />
            ))}
          </div>
        );

      case 'groups': {
        const cols = section.groupColumns === 3 ? 'group-stack--three' : 'group-stack--two';
        return (
          <div className={`group-stack ${cols}`}>
            {section.groups.map((group) => (
              <MenuGroup key={group.name} group={group} />
            ))}
          </div>
        );
      }

      case 'grid':
        return (
          <div className="item-grid item-grid--two">
            {section.items.map((item) => (
              <ItemCard key={item.name} item={item} />
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id={section.id} className="section">
      <div className="container">
        <SectionHead section={section} />
        {renderContent()}
      </div>
    </section>
  );
}
