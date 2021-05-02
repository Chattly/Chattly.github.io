import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "./Home";
import Downloads from './Downloads';
import Features from './Features';
import ToS from './ToS';
import NotFound from './NotFound';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container pt-3">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/features" component={Features} />
            <Route path="/tos" component={ToS} />
            <Route path="/downloads" component={Downloads} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
