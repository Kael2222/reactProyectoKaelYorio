import React from 'react'
import { Link } from 'react-router-dom';


const Item = ( {data} ) => {
  return (
    <div className='item' >
        <img src={data.img}
         alt={data.title} width={500} height={500} />
    <article>
      <h2>{data.title}</h2>
      <h3>${data.precio}.-</h3>
    </article> 
    <Link to={`/detail/${data.id}`} >Ver Detalle</Link>
    {/*<Link to={`/cart/${data.id}`} >ir al carrito</Link>*/}
    </div>
  )
}


export default Item;