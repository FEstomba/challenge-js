import React from 'react'
import Main from './components/Main'
import ListOperations from './components/ListOperations';
import NewOperation from './components/NewOperation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import EditOperation from './components/EditOperation';


function App() {
  return (
    <Router>

      <Switch>
        <Route path="/editar-operacion">
          <EditOperation />
          </Route>

        <Route path="/listado-operaciones">
          <ListOperations />
        </Route>

        <Route path="/nueva-operacion">
          <NewOperation />
        </Route>

        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );


}

export default App;
