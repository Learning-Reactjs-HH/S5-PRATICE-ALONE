export default function Card ({card}) {
    return(
        <div className="card">
          <h4>{card.name}</h4>
          <small>{card.title}</small>
          <p>
            {card.description}
          </p>
          <img src={card.image.src} alt={card.image.alt} />
        </div>
    );
}