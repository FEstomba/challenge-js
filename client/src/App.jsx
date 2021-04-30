import React from 'react'
import Main from './components/Main'
import ListOperations from './components/ListOperations';
import NewOperation from './components/NewOperation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom'


function App() {
  return (
      <Router>

        <Switch>
          <Route path="/listado-operaciones">
          <ListOperations/>
          </Route>

          <Route path="/nueva-operacion">
          <NewOperation/>
          </Route>
  
          <Route exact path="/">
          <Main/>
          </Route>
        </Switch>
      </Router>
    );
    <div className="App">
      <Main></Main>
    </div>

}

export default App;
