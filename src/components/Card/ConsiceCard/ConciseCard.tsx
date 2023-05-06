import './ConciseCard.scss'

import { AiFillCheckCircle } from "react-icons/ai";
import { MovePicker } from '../../../shared/ts/interfaces'

interface Props {
    imageSrc: string,
    cardTitle: string,
    cardClickHandler: (e: React.MouseEvent<HTMLDivElement>) => void,
    selectedMove: MovePicker
}

const ConciseCard = ({ imageSrc, cardTitle, cardClickHandler, selectedMove }: Props): JSX.Element => {
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