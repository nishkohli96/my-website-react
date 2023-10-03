import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '@Pages/Home';
import About from '@Pages/About';
import Contact from '@Pages/Contact';
import Projects from '@Pages/Projects';
import HeaderNew from '@Components/HeaderNew';

const Routing = () => {
  return (
    <div className="fullscreen">
      <BrowserRouter>
        <HeaderNew />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
