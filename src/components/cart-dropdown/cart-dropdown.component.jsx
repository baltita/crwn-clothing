import React from "react";
import CustomButton from "../form-kit/custom-button/custom-button.component";
import './cart-dropdown.styles.scss'
import {connect} from "react-redux";

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-item'>
            {
                cartItems.map(item => <p>{item.name} x {item.quantity}</p>)
            }.
        </div>
        <CustomButton>Go to Checkout</CustomButton>
    </div>
)

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems: cartItems,
});

export default connect(mapStateToProps)(CartDropdown) ;