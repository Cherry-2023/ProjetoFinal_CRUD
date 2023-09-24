import React, { useState, useEffect } from 'react';

const EliminateUserForm = props => {
    const [user, setUser] = useState(props.currentUser);

   
   const submitForm = event => {
        event.preventDefault();

        props.deleteUser(user.id)

        props.setEliminating(false)
    };

    useEffect(() => {
        setUser(props.currentUser);
    }, [props]);

    return (
        <div className="row">

            <form className="col s12"
                onSubmit={submitForm}>
                <div className="row">
                    <div className="input-field col s12">

                        <input type="text" 
                            id={user.id} 
                            name="name"
                            value={user.name}
                            defaultValue={user.username}
                             />
                        <label htmlFor="name"></label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">

                        <input 
                            type="text" 
                            name="username" 
                            value={user.username}
                            defaultValue={user.username}
                             />
                        <label htmlFor="username"></label>
                    </div>
                </div> 
                
                <div className="row">
                    <div className="input-field col s12 m6">

                        <button
                            className="waves-effect waves-light btn"
                            >Apagar
                         </button>
                    </div>

                    <div className="input-field col s12 m6">

                        <button 
                            className="waves-effect waves-light btn"
                            onClick={() => props.setEliminating(false)}
                            >Cancelar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EliminateUserForm;
