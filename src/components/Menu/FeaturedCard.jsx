/**
 * Крупная карточка — для комбо с включениями и для роллов (без включений).
 */
export default function FeaturedCard({ item }) {
  return (
    <article className="featured-card">
      <div className="featured-card__top">
        <div>
          <span className="menu-kicker">{item.kicker}</span>
          <h3>{item.name}</h3>
          <div className="card-meta">{item.weight}</div>
        </div>
        <div className="price-pill">{item.price}</div>
      </div>
      {item.description && <p className="featured-text">{item.description}</p>}
      {item.includes && (
        <ul className="includes-list">
          {item.includes.map((inc) => (
            <li key={inc}>{inc}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
