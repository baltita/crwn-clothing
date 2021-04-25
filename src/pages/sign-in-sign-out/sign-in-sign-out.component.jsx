import React from "react";
import './sign-in-sign-out.styles.scss'
import SignIn from "../../components/sign-in/sign-in.component";
import SignUP from "../../components/sign-up/sign-up.component";

const SignInSignOut = () => (
    <div className="sign-in-sign-out">
        <SignIn/>
        <SignUP/>
    </div>
)

export default SignInSignOut