import React from 'react';
import faker from 'faker';

const Cart = () => {
    return(
     <div className='cart-container'>
        Cart says Hello
        <div> You have {faker.random.number()} items in your cart! </div>
     </div>   
    )
}

export default Cart;