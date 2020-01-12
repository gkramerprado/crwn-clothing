import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert('As senhas informadas nao correspondem');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });

        } catch (err) {

        }
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">Nao possuo uma conta...</h2>
                <span>Cadastre-se usando E-mail e Senha</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        label="Nome"
                        value={displayName}
                        onChange={this.handleChange}
                    />
                    <FormInput
                        type="email"
                        name="email"
                        label="E-mail"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <FormInput
                        type="password"
                        name="password"
                        label="Senha"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        label="Confirme a Senha"
                        value={confirmPassword}
                        onChange={this.handleChange}
                    />
                    <CustomButton type="submit" >CADASTRAR</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;