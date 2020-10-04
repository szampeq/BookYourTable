import React from 'react'
import Table from './Table';

export default class TableList extends React.Component{
   constructor(props){
       super(props);
       this.getTableList = this.getTableList.bind(this);
       this.state = {
           tables: []
       };
   }

getTableList(){
      this.setState({isLoading: true});

      fetch('/api/tables/all')
       .then(response => {
          if(response.ok){
            return response.json();
          }else{
            throw new Error("Odczytanie listy stolików nie powiodło się! Spróbuj później.")
           }
        }).then(data => {
            this.setState({tables: data, isLoading: false});
            //console.log(this.state.tables);
        }).catch(error => {
            window.alert(error.message);
        });
    }

    componentDidMount(){
        this.getTableList();
    }

    render(){
        if(this.state.isLoading){
            return <p>Ładowanie...</p>;
        }

        const tables = 
        this.state.tables.map(table =>
            <Table key={table.tableId} 
            table={table} getTableList={this.getTableList}/>);

        return(
        <div>
            <h2>Lista stolików</h2>
            <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Numer stolika</th>
                    <th>Ilość miejsc</th>
                    <th>Usuń</th>
                </tr>
            </thead>
            <tbody>{tables}</tbody>
            </table>
        </div>
        );
    }
}

