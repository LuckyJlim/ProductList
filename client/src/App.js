import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Products from './Products'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/Products" />} />
          <Route path="/Products" exact component={Products} />
          <Route path="/Products/:page(\d+)" component={Products} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
