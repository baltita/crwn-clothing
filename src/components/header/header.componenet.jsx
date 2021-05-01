import React from "react";
import './header.styles.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {auth} from '../../firebase/firebase.utils'
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCurrentUser} from "../../redux/user/user.selector";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";

const Header = ({currentUser, cartHidden}) => (
    <div className='header'>
        <Link className="logo-container" to='/'>
            <Logo className="logo"/>
        </Link>
        <div className='options-container'>
            <div className="options">
                <Link to="/shop" className="option">SHOP</Link>
                <Link to="/shop" className="option">CONTACT</Link>
                {
                    currentUser ?
                        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                        : <Link to="/signin" className="option">SIGN IN</Link>
                }
                <CartIcon/>
            </div>
            {
                currentUser ?
                    <div className='user-email'>{currentUser.email}</div>
                    : ''
            }
            {cartHidden ? null : <CartDropdown/>}
        </div>

    </div>
)

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    cartHidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header)