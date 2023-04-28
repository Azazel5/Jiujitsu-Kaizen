import './ConciseCard.scss'

import { AiFillCheckCircle } from "react-icons/ai";

interface Props {
    imageSrc: string,
    cardTitle: string,
    cardClickHandler: (e: React.MouseEvent<HTMLDivElement>) => void
}

const ConciseCard = ({ imageSrc, cardTitle, cardClickHandler }: Props): JSX.Element => {

    return (
        <div className="card" onClick={(e) => cardClickHandler(e)}>
            <AiFillCheckCircle />
            <img className='card-image' src={imageSrc} alt='BJJ Position' />
            <div className="card-content has-text-centered">
                <p className="subtitle is-4">{cardTitle}</p>
            </div>
        </div>
    )
}

export default ConciseCard;