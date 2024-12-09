import { useEffect, useState } from 'react';
import './Contact.scss';
import { FaLinkedin, FaPhone, FaEnvelope, FaGithub, FaBriefcase } from 'react-icons/fa';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className='container contact-page'>
            <div className='text-zone'>
            <h1>
                {"My Professional Links and Contact Details".split("").map((char, index) => (
                <span key={index} className={`${letterClass} _${index + 1}`}>
                {char === " " ? "\u00A0" : char}
                </span>
               ))}
            </h1>
                <ul>
                    <li>
                        <FaLinkedin />
                        <a href='https://www.linkedin.com/in/akashm1322/' target='_blank' rel='noreferrer'>
                         akashm1322
                        </a>
                    </li>
                    <li>
                        <FaGithub />
                        <a href='https://github.com/akashm-1322' target='_blank' rel='noreferrer'>
                         akashm-1322
                        </a>
                    </li>
                    <li>
                        <FaBriefcase />
                        <a href='https://www.naukri.com/mnjuser/profile?' target='_blank' rel='noreferrer'>
                         mnjuser
                        </a>
                    </li>

                    <li>
                        <FaEnvelope />
                        <a href='mailto:ash1322mkv@gmail.com'>ash1322mkv@gmail.com</a>
                    </li>
                    <li>
                        <FaPhone /> 9360660911
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;
