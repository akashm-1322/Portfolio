import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

const Layout = React.lazy(() => import('./Components/Layout'));
const Home = React.lazy(() => import('./Components/Home'));
const Contact = React.lazy(() => import('./Components/Contact'));
const AboutMe = React.lazy(() => import('./Components/AboutMe'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<AboutMe />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
