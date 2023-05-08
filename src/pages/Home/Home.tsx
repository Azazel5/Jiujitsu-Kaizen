import { useRef, useState } from 'react'
import './Home.scss'

import CSSTransition from 'react-transition-group/CSSTransition'

import ConciseCard from '../../components/Card/ConsiceCard/ConciseCard';
import TalkativeCard from '../../components/Card/TalkativeCard/TalkativeCard';
import { MovePicker, Video } from '../../shared/ts/interfaces'
import AndreGalvao from '../../andre_galvao.json'

const Home = () => {
    // States and hooks

    const [selectedMove, setSelectedMove] = useState<MovePicker>(
        {
            position: "", technique: "",
            showPosition: true, showTechnique: false
        }
    )

    const [listVideos, setListVideos] = useState<Video>({
        "channelName": "",
        "channelId": "",
        "channelAvatar": "",
        "video_title": "",
        "video_url": "",
        "uniform": "",
        "position": "",
        "technique": {
            "type": "",
            "keywords": []
        },
        "video_static_thumbnails": [
            {
                "url": "",
                "width": 0,
                "height": 0
            },
            {
                "url": "",
                "width": 0,
                "height": 0
            },
            {
                "url": "",
                "width": 0,
                "height": 0
            },
            {
                "url": "",
                "width": 0,
                "height": 0
            }
        ],
        "video_moving_thumbnails": [
            {
                "url": "",
                "width": 0,
                "height": 0
            }
        ],
        "video_length": ""
    })
    const [blockAnimations, setBlockAnimations] = useState(false)

    const positionNodeRef = useRef(null);
    const techniqueNodeRef = useRef(null);

    // Event handlers

    const conciseCardClickHandler = async (e: React.MouseEvent<HTMLDivElement>) => {
        const input = e.target as HTMLElement;
        const svgChild = input.children[0] as HTMLElement;
        svgChild.style.color = "#1a73e8";

        if (!selectedMove['position']) {
            setSelectedMove(
                {
                    position: input.innerText, technique: "",
                    showPosition: false, showTechnique: true
                }
            );
        }

        else {
            if (blockAnimations) {
                return
            }

            setSelectedMove(move => {
                return {
                    ...move, technique: input.innerText,
                    showPosition: false, showTechnique: false
                }
            });
        }
    }

    const talkativeCardClickHandler = () => {
        console.log("TALKATIVE")
    }

    const backButtonClickHandler = () => {
        if (selectedMove['technique']) {
            setSelectedMove(move => ({ ...move, technique: "", showTechnique: true }))
        }

        else if (selectedMove['position']) {
            // Two seperate setters to game the animation so the position cards stop creating empty
            // spaces above the moves 

            setSelectedMove(move => ({ ...move, position: "", showTechnique: false }))
            setTimeout(() => setSelectedMove(move => ({ ...move, position: "", showPosition: true, })), 1250)
        }
    }

    const findMoveButtonClickHandler = () => {
        setListVideos(AndreGalvao[0])
    }

    // Mapped/Normal variables

    const positionsNonUnique = AndreGalvao.reduce((prev, curr) => {
        const positionsSplit = curr['position'].split("|")
        return prev.concat(positionsSplit)
    }, [] as Array<string>)

    const techniquesNonUnique = AndreGalvao.reduce((prev, curr) => {
        const techniquesSplit = curr['technique']['type'].split("|")
        return prev.concat(techniquesSplit)
    }, [] as Array<string>)

    const uniquePositions = [...new Set(positionsNonUnique)].filter(position => position)
    const uniqueTechniques = [...new Set(techniquesNonUnique)].filter(technique => technique)

    const positionCards = uniquePositions.map((pos: string) => {
        return (
            <div className='column is-one-quarter' key={pos}>
                <ConciseCard
                    imageSrc='https://cdn.evolve-mma.com/wp-content/uploads/2021/04/bjj-full-guard.jpg'
                    cardTitle={pos}
                    cardClickHandler={conciseCardClickHandler}
                // extraKeywords={restKeywords && restKeywords} />
                />
            </div>
        )
    })

    const techniqueCards = uniqueTechniques.map((tek: string) => {
        return (
            <div className='column is-one-quarter' key={tek}>
                <ConciseCard
                    imageSrc='https://bjj-world.com/wp-content/uploads/2018/02/Screenshot_32.jpg'
                    cardTitle={tek}
                    cardClickHandler={conciseCardClickHandler}
                />
            </div>
        )
    })

    let headingText = "What do you want to work on?"

    if (selectedMove['position'] && !selectedMove['technique']) {
        headingText = selectedMove['position']
    }

    else if (selectedMove['position'] && selectedMove['technique']) {
        headingText = `${selectedMove['position']} -> ${selectedMove['technique']}`
    }

    // JSX

    return (
        <div className='mb-4'>
            <div className='columns'>
                <h1 className='column is-size-4'>{headingText}</h1>
                <div className="buttons column is-narrow has-addons">
                    <button
                        className="button is-dark"
                        onClick={backButtonClickHandler}
                        disabled={selectedMove['showPosition'] || blockAnimations}>Back</button>

                    <button
                        className="button is-success"
                        onClick={findMoveButtonClickHandler}
                        disabled={selectedMove['showPosition'] || selectedMove['showTechnique'] || blockAnimations}>
                        Find Moves
                    </button>
                </div>
            </div>

            <CSSTransition
                nodeRef={positionNodeRef} in={selectedMove["showPosition"]}
                timeout={{ enter: 1400, exit: 1000 }} classNames="show-position-animation" unmountOnExit
                onEnter={() => setBlockAnimations(true)}
                onExit={() => setBlockAnimations(false)}>

                <div className="columns is-multiline" ref={positionNodeRef}>
                    {positionCards}
                </div>
            </CSSTransition>

            <CSSTransition
                nodeRef={techniqueNodeRef} in={selectedMove['showTechnique']}
                timeout={{ enter: 1400, exit: 1000 }} classNames="show-position-animation" unmountOnExit
                onEnter={() => setBlockAnimations(true)}
                onEntered={() => setBlockAnimations(false)}
                onExit={() => setBlockAnimations(true)}
                onExited={() => setBlockAnimations(false)}>

                <div className="columns is-multiline" ref={techniqueNodeRef}>
                    {techniqueCards}
                </div>
            </CSSTransition>

            {listVideos['video_title'] && <TalkativeCard
                imageSrc={listVideos!.video_moving_thumbnails![0].url || listVideos['video_static_thumbnails'][3]['url']}
                cardTitle={listVideos['video_title']}
                cardClickHandler={talkativeCardClickHandler}
                channelName={listVideos['channelName']}
                channelId={listVideos['channelId']}
                channelAvatar={listVideos['channelAvatar']}
                extraKeywords={listVideos['technique']['keywords']}
                video_length={listVideos['video_length']}
            />}
        </div>
    )
}

export default Home;