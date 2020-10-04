import React from 'react'
import User from './User';

export default class UserList extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           users: []
       };
   }

getUserList(){
      this.setState({isLoading: true});

      fetch('/api/users')
       .then(response => {
          if(response.ok){
            return response.json();
          }else{
            throw new Error("Odczytanie listy pracowników nie powiodło się! Spróbuj później.")
           }
        }).then(data => {
            this.setState({users: data, isLoading: false});
            //console.log(this.state.users);
        }).catch(error => {
            window.alert(error.message);
        });
    }

    componentDidMount(){
        this.getUserList();
    }



    render(){
        if(this.state.isLoading){
            return <p>Ładowanie...</p>;
        }

        const users = 
        this.state.users.map(user =>
            <User key={user.nazwa} 
            user={user} />);

        return(
        <div>
            <h2>Lista użytkowników</h2>
            <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Użytkownik</th>
                    <th>Email</th>
                    <th>Rola</th>
                </tr>
            </thead>
            <tbody>{users}</tbody>
            </table>
        </div>
        );
    }
}

