import React from 'react'; 
import './checkout-item.styles.scss'
import {addItem, removeItemFromCart, removeItem} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={cartItem.imageUrl} alt="item"/>
        </div>
        <span className='name'>{cartItem.name}</span>
        <span className='quantity'>
            <FaAngleLeft className='arrows' onClick={() => removeItem(cartItem)}/>
            <span style={{margin: '5px'}}>{cartItem.quantity}</span>
            <FaAngleRight className='arrows' onClick={() => addItem(cartItem)}/>
        </span>
        <span className='price'>{cartItem.price}</span>
        <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
    </div>
)

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(removeItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)