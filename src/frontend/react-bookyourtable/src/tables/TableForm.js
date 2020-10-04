import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import{
    Redirect
}from 'react-router-dom';

export default class TableForm extends React.Component{

constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
        createdTable: false,
        formData: {
            "tableData":[{}]
        }
    };

    const inputList = [
        {tableData: true, name: "number", label: "Numer stolika", type: "number"},
        {tableData: true, name: "seats", label: "Liczba miejsc", type: "number"}
    ]

    this.inputControls = inputList.map(
        ({tableData, name, label, type}, index) =>(
            <Form.Group key={index}>
                <Form.Label>{label}</Form.Label>
                <Form.Control className={tableData?"tableData":""} name={name} type={type}
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
        let {tableData} = this.state.formData;
        tableData[0][name] = value;
        this.setState({tableData});
    }else{
        let {formData} = this.state
        formData[name] = value;
        this.setState({formData});
    }
console.log(this.state.formData);
}


render(){
    const { createdTable } = this.state;

    if(createdTable){
        return <Redirect to='/tables/tableList'/>
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

    fetch("/api/tables/add",{
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
            throw new Error("Utworzenie nowego stolika nie powiodło się!")
        }
    }).then(data => {
        this.setState({createdTable: true});
    }).catch(error => {
        window.alert(error.message);
    });
}


}
