import React, { Component } from 'react';
import qs from 'querystring';
import api from '../components/services/api';
import UserTable from '../components/table/UserTable';
import AddUserForm from '../components/forms/AddUserForm';
import EditUserForm from '../components/forms/EditUserForm';
import EliminateUserForm from '../components/forms/EliminateUserForm';


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            currentUser: { id: null, name: '', username: '' },
            editing: false,
            eliminating: false
        }
    }

    componentDidMount() {
        this.refreshUserTable();
    }

    refreshUserTable() {
        this.usersData = api.get('api')
            .then(response => response.data)
            .then(data => {

                this.setState({ 
                    users: data.data,
                    setUsers: data.data
                });
            });
    }

    addUser = user => {

        api.post('api', qs.stringify(user))
            .then(res => {
                this.refreshUserTable();
            });
    };

    deleteUser = id => {

        api.delete(`api/${id}`)
            .then(res => {
                this.refreshUserTable();
            });
    };

    updateUser = (id, user) => {
        
        api.put(`api/${id}`, qs.stringify(user))
            .then(res => {

                this.refreshUserTable();
            });
        
        this.setState({ 
            currentUser: { id: null, name: '', username: '' }
        });

        this.setEditing(false);
    };

    editRow = user => {

        this.setState({ 
            currentUser: { id: user.id, name: user.name, username: user.username }
        });

        this.setEditing(true);
    };

    deleteRow = user => {

        this.setState({ 
            currentUser: { id: user.id, name: user.name, username: user.username }
        });

        this.setEliminating(true);
    };

    setEliminating = isEditing => {

        this.setState({ eliminating: isEditing });
    };

    setEditing = isEditing => {

        this.setState({ editing: isEditing });
    };

    render () {
        const { users } = this.state;

        return (
            <div className="container">
                    
                <div className="row">
    
                    {
                        this.state.eliminating ? (
                            <div className="col s6">
                                <h4>Tem certeza de que deseja apagar este usuário?</h4>
                                <EliminateUserForm 
                                    eliminating={this.state.eliminating}
                                    setEliminating={this.setEliminating}
                                    currentUser={this.state.currentUser}
                                    deleteUser={this.deleteUser} 
                                />
                            </div>) :
                        this.state.editing ? (
                            <div className="col s6">
                                <h4>Atualizar Usuario</h4>
                                <EditUserForm 
                                    editing={this.state.editing}
                                    setEditing={this.setEditing}
                                    currentUser={this.state.currentUser}
                                    updateUser={this.updateUser} 
                                />
                            </div>
                        ) : (
                            <div className="col s6">
                                <h4>Criar Usuario</h4>
                                <AddUserForm addUser={this.addUser} />
                            </div>
                        )
                    }
                    
                    <div className="col s12 l6">
                        <h5>Usuarios</h5>
                        <UserTable users={users} editRow={this.editRow} deleteRow={this.deleteRow} />
                    </div>
                </div>
            </div>
        );
    };
};

export default Home;