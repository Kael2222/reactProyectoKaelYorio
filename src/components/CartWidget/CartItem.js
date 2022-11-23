import React from 'react'

export default function CartItem(props) {
  
  const {
    id,
    img,
    title,
    precio,
    cantidad,
    removerDisco,
  } = props 


  return (
    <tr>
          <td>
              <img variant="top" src={img} width={100} height={100} alt= {title}  />
              <p>Titulo: {title}</p>          
          </td>
          <td>{cantidad}</td>
          <td>${precio}</td>
          <td><button className='btn-delete' onClick={() => removerDisco(id)}>Eliminar</button></td>
    </tr>
  )
}
