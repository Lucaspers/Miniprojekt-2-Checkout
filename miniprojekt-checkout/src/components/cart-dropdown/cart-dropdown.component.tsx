import React from 'react';
import CustomButton from '../buttons/customButton';
import './cart-dropdown.style.scss';
import CartItem from './cart-item-component';
import { Link } from "react-router-dom";


const CartDropdown = () => (

  
  /* const [visible, setVisible] = useState(true); */

    <div className='cart-dropdown'>
        <div />
          <div>
          <CartItem />
          </div>       
               
        <CustomButton > 
          <Link to="/Checkout" className="main-link" style={{ textDecoration: 'none',color: 'black' }} /* onClick={()=> setVisible(!visible)} */>
               CHECKOUT
          </Link>
          {/* { visible && <CartDropDown />}    */}
        </CustomButton>
</div>   

)
export default CartDropdown;