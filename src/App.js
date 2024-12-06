import './App.scss';
import Layout from './Components/Layout'
import Home from './Components/Home'
import { Routes , Route} from 'react-router-dom';
import Contact from './Components/Contact';
import AboutMe from './Components/AboutMe';

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
