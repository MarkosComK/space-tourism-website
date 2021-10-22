import Navbar from './components/Navbar';
import Main from './components/Main';
import Destination from './components/Destination';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './css/app.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route path="/destination">
            <Destination/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
