import React from "react";
import CustomButton from "../form-kit/custom-button/custom-button.component";
import './cart-dropdown.styles.scss'

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-item'/>
        <CustomButton>Go to Checkout</CustomButton>
    </div>
)

export default CartDropdown;