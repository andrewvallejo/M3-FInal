import React, { useState, useEffect  } from 'react';
import './App.css';
import {getOrders, postOrder} from '../../apiCalls';
import OrderForm from '../../components/OrderForm/OrderForm';
import Orders from '../Orders/Orders';

const App  = () =>  {
  const [orders, setOrders] = useState([])

  useEffect(() => {  
    (async () => {
      const orders = await getOrders()
      setOrders(orders.orders) 
    })()
  }, [])

  const addOrder = (order) => {
    setOrders(orders => [...orders, order])
    postOrder(order)
  }
 
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
            <OrderForm submitOrder={addOrder} />
        </header>
            <Orders orders={orders}/>  
      </main>
  )
}

export default App;
