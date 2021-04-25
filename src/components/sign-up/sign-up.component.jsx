import React, {Component} from "react";
import FormInput from "../form-kit/form-input/form-input.component";
import CustomButton from "../form-kit/custom-button/custom-button.component";
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import './sign-up.styles.scss'

class SignUP extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()

        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
        } else {
            try {
                const {user} = await auth.createUserWithEmailAndPassword(email, password);
                await createUserProfileDocument(user, {displayName})
                this.setState({
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                })
            } catch (error) {
                console.error(error)
            }
        }
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        label='Display Name'
                        value={displayName}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        label='Email'
                        value={email}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        label='Password'
                        value={password}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        label='Confirm Password'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        required
                    />
                    <CustomButton type="submit"> Sign up </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUP;