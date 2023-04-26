import './ConciseCard.css'

interface Props {
    imageSrc: string,
    cardTitle: string
}

const ConciseCard = ({ imageSrc, cardTitle }: Props): JSX.Element => {
    return (
        <div className="card">
            <img src={imageSrc}/>
            <div className="card-content has-text-centered">
                <p className="title is-4">{cardTitle}</p>
                {/* <p className="subtitle is-6">@johnsmith</p> */}
            </div>
        </div>
    )
}

export default ConciseCard;