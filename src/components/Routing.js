import { lazy } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import RoutePaths from '@Constants/RoutePaths';
import Home from '@Pages/Home';
import Header from '@Components/Header';
import Footer from '@Components/Footer';

const Projects = lazy(() => import('@Pages/Projects'));
const Contact = lazy(() => import('@Pages/Contact'));

const Routing = () => {
  return (
    <div className="fullscreen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path={RoutePaths.home} element={<Home />} />
          <Route path={RoutePaths.contact} element={<Contact />} />
          <Route path={RoutePaths.projects} element={<Projects />} />
          <Route element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Routing;
