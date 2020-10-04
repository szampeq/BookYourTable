import React from 'react';
import TableForm from './TableForm';

export default class AddTable extends React.Component{

    render(){
        return(
            <div id="create" className="col-md-10 col-md-offset-1">
                <h2>Dodaj stolik…</h2>
                <TableForm/>
            </div>
        );
    }
}