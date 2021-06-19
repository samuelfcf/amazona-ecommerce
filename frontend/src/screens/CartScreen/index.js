import React from 'react';

const CartScreen = (props) => {

  const productId = props.match.params.id;
  
  // retorna o valor após o ? passado pela função  em cart screen.
  const qty = props.location.search
              ? Number(props.location.search.split('=')[1])
              : 1

  return (
    <div>
      <h1>Cart Screen</h1>
      <p>ADD TO CART : productId: {productId} Qty: {qty}</p>
    </div> 
  );
}

export default CartScreen;