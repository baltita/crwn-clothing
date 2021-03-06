import React, {Component} from "react";
import './sign-in.styles.scss'
import FormInput from "../form-kit/form-input/form-input.component";
import CustomButton from "../form-kit/custom-button/custom-button.component";
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'
import {FaGoogle} from 'react-icons/fa'

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: ''})
        } catch (error) {
            console.error(error)
        }
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    render() {
        return  (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        label='Email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        label='Password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required />
                    <div className='buttons'>
                        <CustomButton type="submit"> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn type="button">
                            <FaGoogle size={20} className='react-icons' /> Google sign in
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn