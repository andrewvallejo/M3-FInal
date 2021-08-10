export const getOrders = async() => {
  return await fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
      .catch(err => console.error('Error fetching:', err));
}

export const postOrder = async(orderData) => {
  return await fetch('http://localhost:3001/api/v1/orders', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(orderData)
  })
    .then(response => {
      if (response.ok) {
        return response.json
      } else {
          throw Error('Unable to submit order, try again later')   
      }
    })
    .catch(err => console.error('Error Posting:', err));
}
