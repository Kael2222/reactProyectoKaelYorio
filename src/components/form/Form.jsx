import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { baseDeDatos } from '../../services/firebaseConfig';


const Form = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("");
    const [orderId, setOrderId] = useState("")

    const { cart, montoTotalEnElCarrito,limpiarCarrito } = useContext(CartContext)
    const totalCarrito = montoTotalEnElCarrito

    const EnviarDatos = (e) => {
        e.preventDefault()
        const order = {
          buyer: {
            nombre,
            apellido,
            email: "kaelyorio@gmail.com",
            numero: 123456,
            direccion: "Avenidad falsa 1234",
          },
          items: cart.map(disco => ({id:disco.id, title:disco.title, precio: disco.precio, cantidad: disco.cantidad})),
          total:totalCarrito,
          fecha:serverTimestamp(),
      };

      const ordersCollection = collection(baseDeDatos, "orders");

      addDoc(ordersCollection, order)
      .then((res) => {
        setOrderId(res.id)
        limpiarCarrito()
      })
      .catch((error) => {
        console.log("error", error)
      })
      //.finally(() => {
        
      //})
    
    };

    const handleNombre = (e) => {
        setNombre(e.target.value);
    }


    const handleApellido = (e) => {
        setApellido(e.target.value);
    }

    if(orderId) {
      return (
        <h1>Gracias por tu compra! Tu numero de seguimiento es {orderId}  </h1>
      );
    }

  return (
    <form action="" onSubmit={EnviarDatos}>
        <input type="text" placeholder='Nombre' name='nombre' onChange={handleNombre} value= {nombre}  />
        <input type="text" placeholder='Apellido' name='apellido' onChange={handleApellido} value= {apellido} />
       <button onClick={EnviarDatos}>Enviar</button>
    </form>
  )
}

export default Form;