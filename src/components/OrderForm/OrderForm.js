import React, { useState } from 'react';

export const OrderForm = ({submit}) => {
  const [name, setName] = useState('')
  const [ingredients, setIngredients] = useState([])

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   this.clearInputs();
  //   submit(name, ingredients)
  // }

  //  const clearInputs = () => {
//     setName('')
//     setIngredients([])
//   }

  const addIngredients = (newIngred) => {
    setIngredients(ingredients => [...ingredients, newIngred])
    console.log(ingredients)
  }

  const possibleIngredients = [
    'beans', 'steak', 'carnitas', 'sofritas',
    'lettuce', 'queso fresco', 'pico de gallo',
    'hot sauce', 'guacamole', 'jalapenos',
     'cilantro', 'sour cream'
    ];

  const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={(e) =>{
          e.preventDefault()
          addIngredients(ingredient)
          }}>
          {ingredient}
        </button>
      )
    })


    return (
      <form>
        <input  
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={e => setName(e.target.value)}
        />

        { ingredientButtons }

        <p>Order: { ingredients.join(', ') || 'Nothing selected' }</p>

        <button onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )  
}


export default OrderForm;
