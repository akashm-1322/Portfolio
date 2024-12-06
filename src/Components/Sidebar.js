import { Link, NavLink } from 'react-router-dom';
import './Sidebar.scss';
import logo1 from '../assets/images/letter-a.png';
import { FaLinkedin, FaGithub, FaBriefcase } from 'react-icons/fa'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={logo1} alt="Logo" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <div className="nav-item">
                        <FontAwesomeIcon icon={faHome} color="#348ff0"/>
                        <span className="nav-text">Home</span>
                    </div>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <div className="nav-item">
                        <FontAwesomeIcon icon={faUser} color="#348ff0"/>
                        <span className="nav-text">About Me</span>
                    </div>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <div className="nav-item">
                        <FontAwesomeIcon icon={faEnvelope} color="#348ff0"/>
                        <span className="nav-text">Contact</span>
                    </div>
                </NavLink>
            </nav>

            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/akashm1322/">
                        <FontAwesomeIcon icon={FaLinkedin} color="#4d4d4e" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/akashm-1322">
                        <FontAwesomeIcon icon={FaGithub} color="#4d4d4e" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.naukri.com/mnjuser/profile?id=&altresid">
                        <FontAwesomeIcon icon={FaBriefcase} color="#4d4d4e" />
                    </a>
                </li>
            </ul> 
        </div>  
    )
}

export default Sidebar;
