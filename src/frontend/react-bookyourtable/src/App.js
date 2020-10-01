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
import usericon from './img/user-icon.png';
import restauranticon from './img/restaurant-icon.png';
import reservationicon from './img/reservation-icon.png';

export default class App extends React.Component {
  render(){
    return(
      <div>
        <div class="logo">
            <img  src={logo} alt="fireSpot" width="270" height="60"/>
            <a href="rejestruj" target="_blank" class="buttonnav"> nie masz konta? zarejestruj się!</a>
            <a href="loguj" target="_blank" class="buttonnav">zaloguj się </a>
        </div>

        <div class="grid-container">

            <div class="info">
              <div class="infobackground">
              <h1>Nowoczesny system rezerwacji stolików w restauracjach</h1> <br></br><br></br>
              Zarezerwuj stolik w jednej z Twoich ulubionych restauracji. <br></br>
              Szybko, przejrzyście, wygodnie. <br></br>
              Spróbuj, to nic nie kosztuje! Jesteśmy pewni, że zostaniesz z nami na dłużej! <br></br><br></br>
              <h4>Prowadzisz restaurację? Dołącz do nas!</h4>
              </div>
            </div>

            <div class="steps">
            <div class="infosteps">
              <h2>Rezerwacja stolika w 3 prostych krokach!</h2> <br></br><br></br><br></br><br></br>

              <div class="rows">

                  <div class="stepscontent">
                    <img  src={usericon} alt="fireSpot"/>
                  <h4>Rejestracja</h4> <br></br>
                  Założenie konta pozwoli Ci na dokonywanie rezerwacji. Rejestracja jest szybka i intuicyjna.
                  Warto poświęcić na nią te kilka minut.
                  </div>

                  <div class="stepscontent">
                    <img  src={restauranticon} alt="fireSpot"/>
                  <h4>Wybór restauracji</h4><br></br>
                  Wybierz swoją ulubioną restaurację lub poszukaj czegoś nowego.
                  Na pewno znajdziesz coś dla siebie!
                  </div>

                  <div class="stepscontent">
                    <img  src={reservationicon} alt="fireSpot"/>
                  <h4>Rezerwacja stolika</h4><br></br>
                  Już prawie gotowe! Pozostało wybrać datę oraz stolik na odpowiednią ilość osób.
                  To wszystko, smacznego!
                  </div>

                </div>

              </div>
            </div>

            <div class="joinus">
              <h2>Zapraszamy do skorzystania z naszego serwisu!</h2>
              <a href="rejestruj" target="_blank" class="registerbutton">Rejestracja</a>
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

