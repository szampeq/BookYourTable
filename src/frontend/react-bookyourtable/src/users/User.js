import React from 'react';

export default class User extends React.Component{

    render(){
        
const { user } = this.props;


        return(
            <tr>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
            </tr>
        );
    }
}
