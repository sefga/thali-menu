/**
 * Карточка отдельного блюда — название, вес, цена, описание.
 */
export default function ItemCard({ item }) {
  return (
    <article className="item-card">
      <div className="item-top">
        <div>
          <h4>{item.name}</h4>
          <div className="item-meta">{item.weight}</div>
        </div>
        <div className="item-price">{item.price}</div>
      </div>
      {item.description && <p className="item-desc">{item.description}</p>}
    </article>
  );
}
