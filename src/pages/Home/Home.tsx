import { useRef, useState } from 'react'
import './Home.scss'

import CSSTransition from 'react-transition-group/CSSTransition'

import ConciseCard from '../../components/Card/ConsiceCard/ConciseCard';
import { MovePicker } from '../../shared/ts/interfaces'

const Home = () => {
    // States and hooks

    const [selectedMove, setSelectedMove] = useState<MovePicker>(
        {
            position: "", technique: "",
            showPosition: true, showTechnique: false
        }
    )

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
            setSelectedMove(move => {
                return {
                    ...move, technique: input.innerText,
                    showPosition: false, showTechnique: false
                }
            });
        }
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

    // Mapped variables

    const moveArray = [1, 2, 3, 4].map(e => {
        return (
            <div className='column' key={e}>
                <ConciseCard
                    imageSrc='https://bjj-world.com/wp-content/uploads/2018/02/Screenshot_32.jpg'
                    cardTitle='Guard Escape'
                    cardClickHandler={conciseCardClickHandler}
                    selectedMove={selectedMove} />
            </div>
        )
    })

    // JSX

    return (
        <div className='mb-4'>
            <div className='columns'>
                <h1 className='column is-size-4'>What do you want to work on?</h1>
                <div className="buttons column is-narrow has-addons">
                    <button
                        className="button is-dark"
                        onClick={backButtonClickHandler}
                        disabled={selectedMove['showPosition']}>Back</button>

                    <button
                        className="button is-success"
                        disabled={selectedMove['showPosition'] || selectedMove['showTechnique']}>
                        Find Moves
                    </button>
                </div>
            </div>

            <CSSTransition
                nodeRef={positionNodeRef} in={selectedMove["showPosition"]}
                timeout={{ enter: 2200, exit: 1800 }} classNames="show-position-animation" unmountOnExit>

                <div className="columns" ref={positionNodeRef}>
                    <div className='column'>
                        <ConciseCard
                            imageSrc='https://cdn.evolve-mma.com/wp-content/uploads/2021/04/bjj-full-guard.jpg'
                            cardTitle='Full Guard'
                            cardClickHandler={conciseCardClickHandler}
                            selectedMove={selectedMove} />
                    </div>

                    <div className='column'>
                        <ConciseCard
                            imageSrc='https://cdn.evolve-mma.com/wp-content/uploads/2018/08/BJJ-Side-Control.jpg'
                            cardTitle='Side Control'
                            cardClickHandler={conciseCardClickHandler}
                            selectedMove={selectedMove} />
                    </div>

                    <div className='column'>
                        <ConciseCard
                            imageSrc='https://cdn.evolve-vacation.com/wp-content/uploads/2018/04/brazilian-jiu-jitsu-mount.jpg'
                            cardTitle='Mount'
                            cardClickHandler={conciseCardClickHandler}
                            selectedMove={selectedMove} />
                    </div>

                    <div className='column'>
                        <ConciseCard
                            imageSrc='https://www.grapplearts.com/wp-content/uploads/2019/05/11-bjj-crucifix-armbar-1-legs-back-hips-forward.jpg'
                            cardTitle='Crucifix'
                            cardClickHandler={conciseCardClickHandler}
                            selectedMove={selectedMove} />
                    </div>
                </div>
            </CSSTransition>

            <CSSTransition
                nodeRef={techniqueNodeRef} in={selectedMove['showTechnique']}
                timeout={{ enter: 2200, exit: 1800 }} classNames="show-position-animation" unmountOnExit>

                <div className="columns" ref={techniqueNodeRef}>
                    {moveArray}
                </div>
            </CSSTransition>
        </div>
    )
}

export default Home;