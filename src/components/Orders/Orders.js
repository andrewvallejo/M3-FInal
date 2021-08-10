import React from 'react';
import { nanoid } from 'nanoid'
import './Orders.css';

const Orders = ({orders} )=> {
  const orderEls = orders.map(order => {
    return (
      <div key={nanoid(10)} className="order">
        <h3>{order.name}</h3>
        <ul  className="ingredient-list" key={nanoid(10)} >
          { order.ingredients.map(ingredient => {
            return <li key={nanoid(10)}>{ingredient}</li>
          })}
        </ul>
      </div>
    )
  });

  return (
    <section key={nanoid(10)}>
      { orderEls.length ? orderEls : <p>No orders yet!</p> }
    </section>
  )
}

export default Orders;