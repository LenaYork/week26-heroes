import "./Card.css";

export function Card(props) {
    const {cardInfo: {name, universe, alter, job, friends, powers, pic} } = props;

    return(
        <div className="card-item">
            <img src={pic} alt={`${name}-фото`} />
            <div className="info">
                <h3>Имя: {name}</h3>
                <p>Вселенная: {universe}</p>
                <p>Альтер-эго: {alter}</p>
                <p>Род деятельности: {job}</p>
                <p>Друзья: {friends}</p>
                <p>Суперсилы:{powers}</p>
            </div>
        </div>
    )
}