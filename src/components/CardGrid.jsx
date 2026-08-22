export default function CardGrid({ items = [], columns = 3, id }) {
  return (
    <div id={id} className={`grid grid-${columns}`}>
      {items.map((item) => (
        <div className="card" key={item.title}>
          {item.icon && <div className="card__icon">{item.icon}</div>}
          <h3 className="card__title">{item.title}</h3>
          {item.body && <p className="card__body">{item.body}</p>}
        </div>
      ))}
    </div>
  )
}
