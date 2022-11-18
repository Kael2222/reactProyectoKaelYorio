import React, { useState } from 'react'

const ItemCount = ({stock,initial, onAdd}) => {
  const[count, setCount] = useState(initial);

   const sumar = () => {
    setCount(count + 1);
   }

   const restar = () => {
    setCount(count - 1);
   }


  return (
    <div className='contador'>
      <button disabled={count >= stock}  onClick={sumar}>+</button>
      <span>{count}</span>
      <button disabled={count <= initial}  onClick={restar}>-</button>
      <div>
        <button disabled={count === 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount;