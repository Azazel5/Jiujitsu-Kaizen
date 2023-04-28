import { useState } from 'react'
import './App.scss';

import Home from './pages/Home/Home';
import ConciseCard from './components/Card/ConsiceCard/ConciseCard';

interface MovePicker {
    position: string | null,
    technique: string | null
}

const App = () => {
    const [selectedMove, setSelectedMove] = useState<MovePicker>({ position: "", technique: "" })

    const conciseCardClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const input = e.target as HTMLElement;

        if (!selectedMove.position) {
            setSelectedMove({ position: input.innerText, technique: "" })
        }

        else {
            setSelectedMove(move => ({ position: move.position, technique: input.innerText }))
        }
    }

    // TODO: add this color on click with animation = #1a73e8
    return (
        <div className='mt-1 p-4'>
            <Home />

            <div className='columns'>
                <div className='column'>
                    <ConciseCard
                        imageSrc='https://cdn.evolve-mma.com/wp-content/uploads/2021/04/bjj-full-guard.jpg'
                        cardTitle='Full Guard'
                        cardClickHandler={conciseCardClickHandler} />
                </div>

                <div className='column'>
                    <ConciseCard
                        imageSrc='https://cdn.evolve-mma.com/wp-content/uploads/2018/08/BJJ-Side-Control.jpg'
                        cardTitle='Side Control'
                        cardClickHandler={conciseCardClickHandler} />
                </div>

                <div className='column'>
                    <ConciseCard
                        imageSrc='https://cdn.evolve-vacation.com/wp-content/uploads/2018/04/brazilian-jiu-jitsu-mount.jpg'
                        cardTitle='Mount'
                        cardClickHandler={conciseCardClickHandler} />
                </div>

                <div className='column'>
                    <ConciseCard
                        imageSrc='https://www.grapplearts.com/wp-content/uploads/2019/05/11-bjj-crucifix-armbar-1-legs-back-hips-forward.jpg'
                        cardTitle='Crucifix'
                        cardClickHandler={conciseCardClickHandler} />
                </div>
            </div>
        </div>
    );
}

export default App;
