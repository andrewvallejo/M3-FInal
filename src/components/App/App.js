import React, { useState, useEffect  } from 'react';
import './App.css';
import {getOrders} from '../../apiCalls';
import OrderForm from '../../components/OrderForm/OrderForm';
import Orders from '../Orders/Orders';

const App  = () =>  {
  const [orders, setOrders] = useState([])

  useEffect(() => {  
    getOrders()
      .catch(err => console.error('Error fetching:', err));
  })
 
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
            <OrderForm />
        </header>
            <Orders orders={orders}/>  
      </main>
  )
}

export default App;
