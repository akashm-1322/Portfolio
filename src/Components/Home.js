import { useEffect, useState } from 'react';
import AnimatedLetters from './AnimatedLetters';
import './Home.scss';
import Logo2 from '../assets/images/ux.png';
import { Link } from 'react-router-dom';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['A', 'k', 'a', 's', 'h',' ','M'];
    const jobArray = [
        'W', 'e', 'b', ' ' , 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', 
        ' ', '/', ' ', 'F', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', 
        ' ', '/', ' ', 'R', 'e', 'a', 'c', 't', ' ', 'J', 'S', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', 
        ' ', '/', ' ', 'F', 'u', 'l', 'l', ' ', 'S', 't', 'a', 'c', 'k', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'
      ];
    const greetingArray = ['H', 'i', ',', ' ', 'I', "'", 'm'];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, []);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className='container home-page justify-content-center'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={greetingArray} idx={0} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={0} />
                </h1>
                <br />
                <img src={Logo2} alt='Frontend Developer' className="logo-img" />
                <br />
                <h2>
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={0} />
                </h2>
                <Link to="/contact" className='flat-button'>
                    <AnimatedLetters letterClass={letterClass} strArray={['C', 'O', 'N', 'T', 'A', 'C', 'T', ' ', 'M', 'E']} idx={0} />
                </Link>
            </div>
        </div>
    );
};

export default Home;
