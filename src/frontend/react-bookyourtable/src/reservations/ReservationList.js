import React from 'react'
import Reservation from './Reservation';

export default class ReservationList extends React.Component{
   constructor(props){
       super(props);
       this.getReservationList = this.getReservationList.bind(this);
       this.state = {
           reservations: []
       };
   }

getReservationList(){
      this.setState({isLoading: true});

      fetch('/api/reservations/all')
       .then(response => {
          if(response.ok){
            return response.json();
          }else{
            throw new Error("Odczytanie listy rezerwacji nie powiodło się! Spróbuj później.")
           }
        }).then(data => {
            this.setState({reservations: data, isLoading: false});
            //console.log(this.state.reservations);
        }).catch(error => {
            window.alert(error.message);
        });
    }

    componentDidMount(){
        this.getReservationList();
    }

    render(){
        if(this.state.isLoading){
            return <p>Ładowanie...</p>;
        }

        const reservations = 
        this.state.reservations.map(reservation =>
            <Reservation key={reservation.reservationId} 
            reservation={reservation} getReservationList={this.getReservationList}/>);

        return(
        <div>
            <h2>Lista rezerwacji</h2>
            <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Data</th>
                    <th>Godzina</th>
                    <th>Czas rezerwacji</th>
                    <th>Użytkownik</th>
                    <th>Stolik</th>
                    <th>Usuń</th>
                </tr>
            </thead>
            <tbody>{reservations}</tbody>
            </table>
        </div>
        );
    }
}

