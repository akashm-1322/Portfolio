import React, { useEffect, useState , Suspense} from 'react';
import './AboutMe.scss';
import { FaArrowRight , FaArrowLeft } from "react-icons/fa";
import { motion } from 'framer-motion';
import { GrReactjs } from 'react-icons/gr';
import { FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import Marklogic_Logo from '../../src/assets/images/marklogic_logo.jpg';
import { IoLogoJavascript } from 'react-icons/io5';
import { BiLogoTypescript } from 'react-icons/bi';

const AnimatedLetters = React.lazy(() => import('./AnimatedLetters'));

const AboutMe = () => {
  const projectData = [
    {
      logo: '/cvs_logo.jpeg',
      title: 'Eservice_AD_2.0 (Cognizant)',
      description:
        'Developed scalable web applications using React.js for frontend and Mark Logic at the Database and had a good Knowledge in Services like Octopus , Jenkins , Eclipse , Postman.',
    },
    {
      logo: '/j99_logo.png',
      title: 'J99 Recruitment Services Pvt Ltd (Freelance)',
      description:
        'Built a responsive recruitment platform, optimizing UI/UX design and backend integration for efficiency.',
    },
    {
      logo: '/anbukkarangal-logo.jpg',
      title: 'Anbukkarangal Charity (Freelance)',
      description:
        'Designed a dynamic, user-friendly website showcasing the charity’s mission and initiatives.',
    },
  ];

  const technologies = [
    { name: 'React.js', icon: <GrReactjs /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'JavaScript', icon: <IoLogoJavascript /> },
    { name: 'TypeScript', icon: <BiLogoTypescript /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'MarkLogic', icon: <img src={Marklogic_Logo} alt="MarkLogic Logo" className="tech-logo" /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Express.js', icon: <SiExpress /> },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 8000); // 8 seconds
    return () => clearInterval(timer);
  }, []);

  const renderSlide = () => {
    switch (currentSlide) {
      case 0:
        return (
          <motion.div
            className="text-zone"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h1>
            <Suspense fallback={<div>Loading...</div>}>
              <AnimatedLetters
                letterClass="text-animate"
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                idx={2}
              />
              </Suspense>
            </h1>
            <motion.p
              className="summary"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Developer with nearly 3 years of experience in building responsive web applications, specializing in React.js and Node.js. Proficient in JavaScript and TypeScript, with hands-on experience in data management and integration of machine learning solutions. Also familiar with Programming Languages like Python , Java , C++ and skilled in No SQL for database interactions. Adept at collaborating in Agile Technology and Scrum Methodology. Committed to delivering high-quality software solutions across diverse industries.
            </motion.p>
          </motion.div>
        );
      case 1:
        return (
          <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects-list">
              {projectData.map((project, index) => (
                <motion.div
                  className="project-card"
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.5)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={project.logo} alt={project.title} className="project-logo" />
                  <div className="project-details">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="technologies-container">
            <h2>Proficient Technologies</h2>
            <div className="technologies-grid">
              {technologies.map((tech, index) => (
                <motion.div
                  className="technology-card"
                  key={index}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.5)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="tech-icon">{tech.icon}</span>
                  <span className="tech-name">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="about-me-container">
      {renderSlide()}
      <div className="controls">
  {/* For Slide 1: Only right arrow */}
  {currentSlide === 0 && (
    <motion.div
      className="arrow right-arrow"
      onClick={() => setCurrentSlide(currentSlide + 1)}
      whileHover={{ scale: 1.2 }}
    >
      <FaArrowRight/>
    </motion.div>
  )}

  {/* For Slide 2: Show both left and right arrows */}
  {currentSlide === 1 && (
    <>
      <motion.div
        className="arrow left-arrow"
        onClick={() => setCurrentSlide(currentSlide - 1)}
        whileHover={{ scale: 1.2 }}
      >
        <FaArrowLeft/>
      </motion.div>
      <motion.div
        className="arrow right-arrow"
        onClick={() => setCurrentSlide(currentSlide + 1)}
        whileHover={{ scale: 1.2 }}
      >
        <FaArrowRight/>
      </motion.div>
    </>
  )}

  {/* For Slide 3: Only left arrow */}
  {currentSlide === 2 && (
    <motion.div
      className="arrow left-arrow"
      onClick={() => setCurrentSlide(currentSlide - 1)}
      whileHover={{ scale: 1.2 }}
    >
      <FaArrowLeft/>
    </motion.div>
  )}
</div>


    </div>
  );
};

export default AboutMe;
