import './ConciseCard.scss'

import { AiFillCheckCircle } from "react-icons/ai";

interface Props {
    imageSrc: string,
    cardTitle: string,
    cardClickHandler: (e: React.MouseEvent<HTMLDivElement>) => void,
    extraKeywords?: Array<String>
}

const ConciseCard = (props: Props): JSX.Element => {
    const { imageSrc, cardTitle, cardClickHandler, extraKeywords } = props

    return (
        <div className="card" onClick={(e) => cardClickHandler(e)}>
            <AiFillCheckCircle />
            <img className='card-image' src={imageSrc} alt='BJJ Position' />
            <div className="card-content has-text-centered">
                <p className="subtitle is-4">{cardTitle}</p>
            </div>

            {extraKeywords && (
                <footer className="card-footer">
                    {extraKeywords.map(word => <div className='card-footer-item'>{word}</div>)}
                </footer>
            )}
        </div>
    )
}

export default ConciseCard;