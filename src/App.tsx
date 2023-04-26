import './App.css';

import Home from './pages/Home/Home';
import ConciseCard from './components/Card/ConsiceCard/ConciseCard';

const App = () => {
    return (
        <div className='mt-1 p-4'>
            <Home />

            <div className='columns'>
                <div className='column'>
                    <ConciseCard 
                        imageSrc='https://cdn.evolve-mma.com/wp-content/uploads/2021/04/bjj-full-guard.jpg' 
                        cardTitle='Full Guard'/>
                </div>

                <div className='column'>
                    <ConciseCard 
                        imageSrc='https://cdn.evolve-mma.com/wp-content/uploads/2018/08/BJJ-Side-Control.jpg'
                        cardTitle='Side Control'/>
                </div>

                <div className='column'>
                    <ConciseCard 
                        imageSrc='https://cdn.evolve-vacation.com/wp-content/uploads/2018/04/brazilian-jiu-jitsu-mount.jpg'
                        cardTitle='Mount'/>
                </div>

                <div className='column'>
                    <ConciseCard 
                        imageSrc='https://www.grapplearts.com/wp-content/uploads/2019/05/11-bjj-crucifix-armbar-1-legs-back-hips-forward.jpg'
                        cardTitle='Crucifix'/>
                </div>
            </div>
        </div>
    );
}

export default App;
