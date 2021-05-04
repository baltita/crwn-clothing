import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartItemsTotal} from "../../redux/cart/cart.selectors";
import './checkout.styles.scss'
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutBtn from "../../components/stripe-checkout/stripe-checkout.component";

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
        }
        <div className='total'>TOTAL: ${total}</div>
        <div className='checkout-btn'>
            <StripeCheckoutBtn price={total}/>
        </div>
        <div className='credit-warning'>
            Please use this card info for testing
            <br/>
            Number: 4242 4242 4242 4242 - Exp: 01/25 - CVC: 123
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal
})

export default connect(mapStateToProps)(CheckoutPage);