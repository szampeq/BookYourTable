import React, { Component } from "react";

import UserService from "../services/user.service";
import AuthService from "../services/auth.service";

import usericon from '../img/user-icon.png';
import restauranticon from '../img/restaurant-icon.png';
import reservationicon from '../img/reservation-icon.png';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      currentUser: undefined,
    };
  }

  componentDidMount() {

    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showGuestBoard: !user.roles.includes("ROLE_MODERATOR")
      });
    }

    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    const { currentUser } = this.state;
    return (
        <header className="home">


        {currentUser ? ( //user content
              <h1>user</h1>
        ) : ( //guest welcome content
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
        <a href="/register" target="_blank" class="registerbutton">Rejestracja</a>
      </div>

</div>
        )};

        </header>
      
    );
  }
}