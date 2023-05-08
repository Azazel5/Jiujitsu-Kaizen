import { TalkativeCardProps } from "../../../shared/ts/interfaces";

const TalkativeCard = (props: TalkativeCardProps) => {
    const { imageSrc, cardTitle, cardClickHandler, channelName, channelId, channelAvatar, extraKeywords, video_length } = props

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={imageSrc} alt="Placeholder" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img src={channelAvatar} alt="Placeholder" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{cardTitle}</p>
                        <div className="content">
                            <p className="subtitle is-size-4">{channelName}</p>
                        </div>

                        <p className="subtitle is-6">{channelId}</p>
                    </div>

                    <div className="media-right mt-auto">
                        <p className="subtitle is-6 has-text-weight-semibold">Video length: {video_length}</p>
                    </div>
                </div>
            </div>

            {extraKeywords && extraKeywords.length > 0 && (
                <footer className="card-footer">
                    {extraKeywords.map((word, index) => <div key={`${word}${index}`} className='card-footer-item'>{word}</div>)}
                </footer>
            )}
        </div>
    )
}

export default TalkativeCard;