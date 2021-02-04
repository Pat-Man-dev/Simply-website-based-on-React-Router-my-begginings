import React from 'react';
import { Prompt } from 'react-router-dom';
import '../styles/ContactPage.css';

class ContactPage extends React.Component {
    state = {
        value: '',
        isEmpty: true,
    }

    handleChange = (e) => {
        if (this.state.value.length > 0) {
            this.setState({
                value: e.target.value,
                isEmpty: false,
            })
        } else {
            this.setState({
                value: e.target.value,
                isEmpty: true,
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            value: '',
            isEmpty: true,
        })
    }

    render() {
        return (
            <div className="contact">
                <form onSubmit={this.handleSubmit}>
                    <h3>Napisz do nas!</h3>
                    <textarea
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder='Wpisz tekst...'></textarea>
                    <button>Wyślij</button>
                </form>
                <Prompt
                    // when={Boolean(this.state.value)}
                    when={!this.state.isEmpty}
                    message='Rozpoczęto pisanie wiadomości. Czy na pewno chcesz opuścić stronę?'
                />
            </div >
        )
    }
};

export default ContactPage;