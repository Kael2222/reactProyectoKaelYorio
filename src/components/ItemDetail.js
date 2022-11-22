import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({data}) => {

    const [irAlCarrito, setIrAlCarrito] = useState(false);

    const {agregarAlCarrito, isInCart} = useContext(CartContext)

    const onAdd = (cantidad) => {
        setIrAlCarrito(true)
        agregarAlCarrito(data, cantidad)
    }

    const setearValorInicial = (id) => (isInCart(data.id))?.cantidad || 0 


  return (
    <div>
        <div>
            <img src={data.img} alt="" width={500} height={500}/>
            <div>
                <h1>{data.title}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h3>${data.precio}</h3>
                {irAlCarrito ? 
                <Link to={'/cart/'}><button>Ir al Carrito</button></Link> :
                <ItemCount initial={setearValorInicial(data.id)} stock={data.stock} onAdd={onAdd}  />
                }
            </div>
        </div>

    </div>
  );
}

export default ItemDetail;