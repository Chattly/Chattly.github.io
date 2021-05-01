import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "./Home";
import Downloads from './Downloads';
import NotFound from './NotFound';

import $ from "jquery";


const App = () => {

  useEffect(() => {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip({
        html: true
      })
    })
  });

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container pt-3">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/downloads" component={Downloads} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
