import './App.scss';
const Layout = React.lazy( () => import('./Components/Layout'));
const Home = React.lazy( () => import('./Components/Home'));
import { Routes , Route} from 'react-router-dom';
import { Suspense } from 'react';
const Contact = React.lazy( () => import('./Components/Contact.js'));
const AboutMe = React.lazy( () => import('./Components/AboutMe.js'));

function App() {
  return (
    <>
    <Routes>
    <Suspense fallback={<div>Loading...</div>}>
      <Route path="/" element={<Layout/>}>
      <Suspense fallback={<div>Loading...</div>}>
      <Route path="/contact" element={<Contact/>}/>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
      <Route path="/about" element={<AboutMe/>}/>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
      <Route index element={<Home/>} />
      </Suspense>
      </Route>
      </Suspense>
    </Routes>
    </>
  );
}

export default App;
