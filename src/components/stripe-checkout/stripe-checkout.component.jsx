import React from 'react'; 
import './stripe-checkout.styles.scss';
import StripeCheckout from "react-stripe-checkout";
import CustomButton from "../form-kit/custom-button/custom-button.component";
import {BsCreditCard} from "react-icons/all";

const StripeCheckoutBtn = ({price}) => {
    const priceForStripe = price * 100;
    const stripePublicKey = 'pk_test_51ImqpsDb4f8MxCy9wRQeuNg3TUDxZEfzesEXYeJcps7WFlPdrin3ZGI3ewhoNrSje3Ej2BcGYnCivKRfwYvdoDkm0031kssrL8';

    const onToken = (token) => {
        console.log('Token:', token);
        alert('Payment successful');
    }

    return(
        <StripeCheckout
            token={onToken}
            stripeKey={stripePublicKey}
            name='CRWN Clothing LTD.'
            description={`Your total is $${price}`}
            label='Pay now'
            billingAddress
            shippingAddress
            panelLabel='Pay now'
            amount={priceForStripe}
            image='/favicon.svg'
        >
            <CustomButton>
                Pay now <BsCreditCard style={{marginLeft: '10px'}}/>
            </CustomButton>
        </StripeCheckout>
    )
}

export default StripeCheckoutBtn;
