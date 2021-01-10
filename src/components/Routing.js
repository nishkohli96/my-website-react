import { Route, Switch, HashRouter, Redirect } from 'react-router-dom';
import Home from '@Pages/Home';
import About from '@Pages/About';
import Contact from '@Pages/Contact';
import Projects from '@Pages/Projects';
import Header from '@Components/Header';

const Routing = () => {
    return (
        <div className="fullscreen">
            <HashRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/projects" component={Projects} />
                    <Redirect to="/" />
                </Switch>
            </HashRouter>
        </div>
    );
};

export default Routing;
