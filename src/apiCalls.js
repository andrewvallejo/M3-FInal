export const getOrders = async() => {
  return await fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
      .catch(err => console.error('Error fetching:', err));
}