import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <h2>Stopka</h2>
            <Route path='/' exact render={() => (
                <p>Jesteś na <span>stronie głównej</span></p>
            )} />
            <Route path='/:page' exact render={(props) => {
                console.log(props)
                return (<>
                    <p>Jesteś na podstronie <span className='pageName'>{props.match.params.page}</span></p>
                    <p>Twój bieżący URL to <span>{props.match.url}</span></p>
                    <p>Twój PATH w kodzie to <span>{props.match.path}</span></p>
                </>
                )
            }} />
            <Route path='/:page/:idProduct' exact render={(props) => {
                console.log(props)
                return (<>
                    <p>Jesteś na podstronie <span className='pageName'>{props.match.params.idProduct}</span></p>
                    <p>Twój bieżący URL to <span>{props.match.url}</span></p>
                    <p>Twój PATH w kodzie to <span>{props.match.path}</span></p>
                </>
                )
            }} />
        </div>
    );
}

export default Footer;