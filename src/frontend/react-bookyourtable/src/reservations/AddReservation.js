import React from 'react';
import ReservationForm from './ReservationForm';

export default class AddReservation extends React.Component{

    render(){
        return(
            <div id="create" className="col-md-10 col-md-offset-1">
                <h2>Dodaj rezerwację…</h2>
                <ReservationForm/>
            </div>
        );
    }
}