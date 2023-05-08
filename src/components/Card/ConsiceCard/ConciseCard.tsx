import './ConciseCard.scss'

import { AiFillCheckCircle } from "react-icons/ai";
import { ConciseCardProps } from '../../../shared/ts/interfaces';

const ConciseCard = (props: ConciseCardProps): JSX.Element => {
    const { imageSrc, cardTitle, cardClickHandler } = props

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