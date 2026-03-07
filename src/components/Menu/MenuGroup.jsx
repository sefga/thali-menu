import ItemCard from './ItemCard';

/**
 * Группа блюд (Супы, Закуски, Тандур и т.д.) — кикер, название, счётчик, список карточек.
 */
export default function MenuGroup({ group }) {
  return (
    <article className="menu-group">
      <div className="menu-group__header">
        <div>
          <span className="menu-kicker">{group.kicker}</span>
          <h3>{group.name}</h3>
        </div>
        <span className="group-count">{group.count}</span>
      </div>
      <div className="item-grid">
        {group.items.map((item) => (
          <ItemCard key={item.name} item={item} />
        ))}
      </div>
    </article>
  );
}
