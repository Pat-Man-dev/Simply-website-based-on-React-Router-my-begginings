import React from 'react';

const LoginPage = () => {
    return (
        <div className="login">
            <label htmlFor="log">Podaj login:</label><input id='log' type="text" />
            <br />
            <label htmlFor="pass">Podaj hasło:</label><input id='pass' type="password" />
            <br />
            <button>Zaloguj</button>
        </div>
    );
}

export default LoginPage;