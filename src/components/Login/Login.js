import React, {useState} from "react";
import PropTypes from 'prop-types';

import './Login.css'

async function loginUser(credentials){
    return fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json());
}


function Login({setToken}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    return (
        <div className="login-wrapper">
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => {setUserName(e.target.value)}}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => {setPassword(e.target.value)}}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

Login.propTypes ={
    setToken: PropTypes.func.isRequired
}

export default Login;