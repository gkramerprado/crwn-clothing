import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.util';

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
                    <FormInput
                        name="email"
                        type="email"
                        label="E-mail"
                        value={email}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        label="Senha"
                        value={password}
                        handleChange={this.handleChange}
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Entrar</CustomButton>
                        <CustomButton isGoogle={true} onClick={signInWithGoogle}>Entrar com Google</CustomButton>
                    </div>

                </form>
            </div>
        );
    }
}

export default SignIn;