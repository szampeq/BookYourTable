import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import{
    Redirect
}from 'react-router-dom';

export default class ReservationForm extends React.Component{

constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
        createdReservation: false,
        formData: {
            "reservationData":[{}]
        }
    };

    const inputList = [
        {reservationData: true, name: "number", label: "Numer stolika", type: "number"},
    ]

    this.inputControls = inputList.map(
        ({reservationData, name, label, type}, index) =>(
            <Form.Group key={index}>
                <Form.Label>{label}</Form.Label>
                <Form.Control className={reservationData?"reservationData":""} name={name} type={type}
            placeholder={label} onChange={this.onChange} required/>
            </Form.Group>
        )
    );
}

onChange(event){
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if(target.classList.contains("id")){
        let {reservationData} = this.state.formData;
        reservationData[0][name] = value;
        this.setState({reservationData});
    }else{
        let {formData} = this.state
        formData[name] = value;
        this.setState({formData});
    }
console.log(this.state.formData);
}


render(){
    const { createdReservation } = this.state;

    if(createdReservation){
        return <Redirect to='/reservations/reservationList'/>
    }

    return(
        <Form onSubmit={this.handleSubmit}>
            {this.inputControls}
            <Button as="input" type="submit" value="Zapisz"/>
        </Form>
    );
    }

handleSubmit(event){
    event.preventDefault();

    fetch("/api/reservations/add",{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.formData)
    }).then(response => {
        if(response.ok){
            return response.json();
        }else{
            throw new Error("Utworzenie nowej rezerwacji nie powiodło się!")
        }
    }).then(data => {
        this.setState({createdReservation: true});
    }).catch(error => {
        window.alert(error.message);
    });
}


}
