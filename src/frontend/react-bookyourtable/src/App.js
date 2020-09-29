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
import ReservationList from './reservations/ReservationList';
import AddReservation from './reservations/AddReservation';

import logo from'./img/logo.png';

export default class App extends React.Component {
  render(){
    return(
      <div>
        <div class="logo">
            <img  src={logo} alt="fireSpot" width="360" height="80"/>
            <a href="localhost" class="navlink"> zaloguj </a>
            <a href="localhost" class="navlink"> zarejestruj </a>
        </div>

        <div class="grid-container">

            <div class="info">
              <div class="infobackground">
              <h1>Nowoczesny system rezerwacji stolików w restauracjach.</h1> <br></br><br></br>
              Zarezerwuj stolik w jednej z Twoich ulubionych restauracji. <br></br>
              Szybko, przejrzyście, wygodnie. <br></br>
              Spróbuj, to nic nie kosztuje! Jesteśmy pewni, że zostaniesz z nami na dłużej! <br></br><br></br>
              <h4>Prowadzisz restaurację? Dołącz do nas!</h4>
              </div>

            </div>

            <div class="steps">

            </div>

            <div class="joinus">

            </div>

        </div>

        <div class="footer">
             <h4>Krzysztof Gąciarz | Prototypowy system rezerwacji stolików w restauracjach</h4>
        </div>

        <h1>Panel administratora</h1>
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
              <li>
                <Link to="/reservations/reservationList">Lista rezerwacji</Link>
              </li>
              <li>
                <Link to="/reservations/addReservation">Dodaj rezerwację</Link>
              </li>
            </ul>
            <Route path="/users/userlist" component={UserList}/>
            <Route path="/tables/tablelist" component={TableList}/>
            <Route path="/tables/addTable" component={AddTable}/>
            <Route path="/reservations/reservationList" component={ReservationList}/>
            <Route path="/reservations/addReservation" component={AddReservation}/>
          </div>
        </Router>

      </div>
    );
  }
}

