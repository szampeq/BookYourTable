import React from 'react';
import Button from 'react-bootstrap/Button';

export default class Table extends React.Component{

constructor(props){
    super(props);
    this.deleteTable = this.deleteTable.bind(this);
    this.state = {
        isDeleting: false,
    };
}

render(){
    const {isDeleting} = this.state;
    const { table } = this.props;


        return(
            <tr>
                <td>{table.id}</td>
                <td>{table.number}</td>
                <td>{table.seats}</td>
                <td><Button id={table.id} variant="danger" disabled={isDeleting}
                onClick={!isDeleting?this.deleteTable:null}>{isDeleting?'Usuwanie...':'Usuń'}</Button> </td>
            </tr>
        );
    }

deleteTable(event){
    const target = event.target;
    const id = target.getAttribute('id');
    if(!window.confirm(`Czy na pewno usunąć stolik o id ${id}?`)){
        return;
    }

    const url = `/api/tables/delete?id=${id}`
    this.setState({isDeleting:true});

    fetch(url,{
        method: 'delete'
    }).then(response => {
        if(response.ok){
            this.props.getTableList();
        }else{
            throw new Error("Usuwanie stolika nie powiodło się!")
        }
    }).catch(error => {
        this.setState({isDeleting: false});
        window.alert(error.message);
    });
}

}
