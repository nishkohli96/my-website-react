import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import RoutePaths from '@Constants/RoutePaths';
import Header from '@Components/Header';
import Footer from '@Components/Footer';
import Home from '@Pages/Home';
import Projects from '@Pages/Projects';
import Contact from '@Pages/Contact';

const Routing = () => {
  return (
    <div className="fullscreen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path={RoutePaths.home} element={<Home />} />
          <Route path={RoutePaths.contact} element={<Contact />} />
          <Route path={RoutePaths.projects} element={<Projects />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Routing;
