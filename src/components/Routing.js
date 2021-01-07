import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Home from '@Pages/Home';
import About from '@Pages/About';
import Contact from '@Pages/Contact';
import Projects from '@Pages/Projects';

const Routing = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/projects" component={Projects} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
};

export default Routing;
