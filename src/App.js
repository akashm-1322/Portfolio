import './App.scss';
import React from 'react';
import { Routes , Route} from 'react-router-dom';
const Layout = React.lazy( () => import('./Components/Layout'));
const Home = React.lazy( () => import('./Components/Home'));
const Contact = React.lazy( () => import('./Components/Contact.js'));
const AboutMe = React.lazy( () => import('./Components/AboutMe.js'));

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<AboutMe/>}/>
      <Route index element={<Home/>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
