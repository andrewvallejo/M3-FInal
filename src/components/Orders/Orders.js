import React from 'react';
import { nanoid } from 'nanoid'
import './Orders.css';

const Orders = ({orders} )=> {
  const orderEls = orders.map(order => {
    return (
      <div key={nanoid(1)} className="order">
        <h3>{order.name}</h3>
        <ul  className="ingredient-list">
          { order.ingredients.map(ingredient => {
            return <li key={nanoid(1)}>{ingredient}</li>
          })}
        </ul>
      </div>
    )
  });

  return (
    <section>
      { orderEls.length ? orderEls : <p>No orders yet!</p> }
    </section>
  )
}

export default Orders;