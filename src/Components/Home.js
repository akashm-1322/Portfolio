import React , { useEffect, useState , Suspense} from 'react';
import './Home.scss';
import Logo2 from '../assets/images/ux.png';
import { Link } from 'react-router-dom';
const AnimatedLetters = React.lazy(() => import('./AnimatedLetters'));


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['A', 'k', 'a', 's', 'h',' ','M'];
    const jobArray = [
        'F','u' , 'l' , 'l', ' ', 'S', 't' , 'a' , 'c' , 'k', ' ' , 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', 
        ' ', '/', ' ', 'F', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', 
        ' ', '/', ' ', 'R', 'e', 'a', 'c', 't', ' ', 'J', 'S', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', 
        ' ', '/', ' ', 'M','E','R','N', ' ', 'S', 't', 'a', 'c', 'k', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'
      ];
    const greetingArray = ['H', 'i', ',', ' ', 'I', "'", 'm'];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, []);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className='home-page justify-content-center'>
            <div className='text-zone'>
                <Suspense fallback={<div>Loading...</div>}>
                    <AnimatedLetters letterClass={letterClass} strArray={greetingArray} idx={0} style={{ fontSize: '24px' }} />
                    </Suspense>
                    <br />
                    <Suspense fallback={<div>Loading...</div>}>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={0} style={{ fontSize: '24px' }}  />
                    </Suspense>
                <br />
                <img src={Logo2} alt='Frontend Developer' className="logo-img" />
                <br />
                <h2>
                <Suspense fallback={<div>Loading...</div>}>
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={0} />
                    </Suspense>
                </h2>
                <Link to="/contact" className='flat-button'>
                <Suspense fallback={<div>Loading...</div>}>
                    <AnimatedLetters letterClass={letterClass} strArray={['C', 'O', 'N', 'T', 'A', 'C', 'T', ' ', 'M', 'E']} idx={0} />
                    </Suspense>
                </Link>
            </div>
        </div>
    );
};

export default Home;
