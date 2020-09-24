import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import UserList from './users/UserList';
import TableList from './tables/TableList';
import AddTable from './tables/AddTable';

export default class App extends React.Component {
  render(){
    return(
      <div>
        <h1>Testowa Aplikacja Rezerwacji w Restauracji</h1>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/users/userList">Lista użytkowników</Link>
              </li>
              <li>
                <Link to="/tables/tableList">Lista stolików</Link>
              </li>
              <li>
                <Link to="/tables/addTable">Dodaj stolik</Link>
              </li>
            </ul>
            <Route path="/users/userlist" component={UserList}/>
            <Route path="/tables/tablelist" component={TableList}/>
            <Route path="/tables/addTable" component={AddTable}/>
          </div>
        </Router>
      </div>
    );
  }
}

