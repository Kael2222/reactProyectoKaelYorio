import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';




export default function Cart() {

  const {cart, montoTotalEnElCarrito, removerDisco} = useContext(CartContext)



  //const handleClick = () => {
   // const baseDeDatos = getFirestore();
   // const ordersCollection = collection(baseDeDatos, "orders");
   // addDoc(ordersCollection, order)
   // .then(({ id }) => console.log(id))
 // }

  if (!cart.length) return (<h3>Tu Carrito está vacío!, por favor considerá ver nuestros <Link to='/'>productos</Link></h3>)

  console.log(cart);
  return (
    <table>
      <thead>
        <tr>
          <th>Disco</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{cart.map(disco => <CartItem key={disco.id} removerDisco={removerDisco} {...disco}/>)}
      <tr><td><h3>Total: ${montoTotalEnElCarrito}</h3></td></tr>
      </tbody>
    </table>
  )
}
