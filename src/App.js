import './App.scss';
import React from 'react';
import {BrowserRouter as Router ,  Routes , Route} from 'react-router-dom';
const Layout = React.lazy( () => import('./Components/Layout'));
const Home = React.lazy( () => import('./Components/Home'));
const Contact = React.lazy( () => import('./Components/Contact.js'));
const AboutMe = React.lazy( () => import('./Components/AboutMe.js'));

function App() {
  return (
    <>
    <Routes>
      <Router path="/" element={<Layout/>}>
      <Router path="/contact" element={<Contact/>}/>
      <Router path="/about" element={<AboutMe/>}/>
      <Router index element={<Home/>} />
      </Router>
    </Routes>
    </>
  );
}

export default App;
