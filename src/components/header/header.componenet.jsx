import React from "react";
import {HeaderContainer, LogoContainer, OptionLink, Options, OptionsContainer, UserEmail} from "./header.styles";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {auth} from '../../firebase/firebase.utils'
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCurrentUser} from "../../redux/user/user.selector";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";

const Header = ({currentUser, cartHidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className="logo"/>
        </LogoContainer>
        <OptionsContainer>
            <Options>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/shop">CONTACT</OptionLink>
                {
                    currentUser ?
                        <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                        : <OptionLink to="/signin">SIGN IN</OptionLink>
                }
                <CartIcon/>
            </Options>
            {
                currentUser ?
                    <UserEmail>{currentUser.email}</UserEmail>
                    : ''
            }
            {cartHidden ? null : <CartDropdown/>}
        </OptionsContainer>

    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    cartHidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header)