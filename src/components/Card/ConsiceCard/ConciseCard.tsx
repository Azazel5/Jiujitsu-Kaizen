import './ConciseCard.scss'

import { AiFillCheckCircle } from "react-icons/ai";

interface Props {
    imageSrc: string,
    cardTitle: string
}

const ConciseCard = ({ imageSrc, cardTitle }: Props): JSX.Element => {

    return (
        <div className="card">
            <AiFillCheckCircle />
            <img className='card-image' src={imageSrc} alt='BJJ Position'/>
            <div className="card-content has-text-centered">
                <p className="subtitle is-4">{cardTitle}</p>
            </div>
        </div>
    )
}

export default ConciseCard;