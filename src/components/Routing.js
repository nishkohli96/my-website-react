import { Route, Routes, BrowserRouter } from 'react-router-dom';
import RoutePaths from '@Constants/RoutePaths';
import Home from '@Pages/Home';
import About from '@Pages/About';
import Contact from '@Pages/Contact';
import Projects from '@Pages/Projects';
import Header from '@Components/Header';
import Footer from '@Components/Footer';

const Routing = () => {
  return (
    <div className="fullscreen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path={RoutePaths.home} element={<Home />} />
          <Route path={RoutePaths.about} element={<About />} />
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
