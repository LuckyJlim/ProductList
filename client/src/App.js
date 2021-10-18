import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './rest-link';
import Products from './Products';
import NotFound from './NotFound';
import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact render={() => <Redirect to="/Products" />} />
            <Route path="/Products" exact component={Products} />
            <Route path="/Products/:page(\d+)" component={Products} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
