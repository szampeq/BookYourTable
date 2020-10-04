import React from 'react';
import Button from 'react-bootstrap/Button';

export default class Reservation extends React.Component{

constructor(props){
    super(props);
    this.deleteReservation = this.deleteReservation.bind(this);
    this.state = {
        isDeleting: false,
    };
}

render(){
    const {isDeleting} = this.state;
    const { reservation } = this.props;


        return(
            <tr>
                <td>{reservation.id}</td>
                <td>{reservation.date}</td>
                <td>{reservation.time}</td>
                <td>{reservation.bookingTime}</td>
                <td>{reservation.table}</td>
                <td>{reservation.user}</td>
                <td><Button id={reservation.id} variant="danger" disabled={isDeleting}
                onClick={!isDeleting?this.deleteTable:null}>{isDeleting?'Usuwanie...':'Usuń'}</Button> </td>
            </tr>
        );
    }

deleteReservation(event){
    const target = event.target;
    const id = target.getAttribute('id');
    if(!window.confirm(`Czy na pewno usunąć rezerwację o id ${id}?`)){
        return;
    }

    const url = `/api/reservations/delete?id=${id}`
    this.setState({isDeleting:true});

    fetch(url,{
        method: 'delete'
    }).then(response => {
        if(response.ok){
            this.props.getReservationList();
        }else{
            throw new Error("Usuwanie rezerwacji nie powiodło się!")
        }
    }).catch(error => {
        this.setState({isDeleting: false});
        window.alert(error.message);
    });
}

}
