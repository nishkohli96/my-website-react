import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
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
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/projects" component={Projects} />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Routing;
