import React from 'react';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { email, password } = this.state;
        return (
            <div className="sign-in">
                <h2>Ja possuo uma conta</h2>
                <span>Entre com seu e-mail e senha</span>

                <form onSubmit={this.handleSubmit}>
                    <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                    <label>E-mail</label>
                    <input
                        name="password"
                        type="password"
                        value={password}
                        onChange={this.handleChange}
                        required
                    />
                    <label>Senha</label>

                    <input type="submit" value="Submit Form" />
                </form>
            </div>
        );
    }
}

export default SignIn;