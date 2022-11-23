import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { baseDeDatos } from '../../services/firebaseConfig';


const Form = () => {


    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [confirmarEmail, setConfirmarEmail] = useState("");
    

    const handleNombre = (e) => {
      setNombre(e.target.value);
    }

    const handleApellido = (e) => {
      setApellido(e.target.value);
    }

    const handleTelefono = (e) => {
      setTelefono(e.target.value);
    }

    const handleEmail = (e) => {
      setEmail(e.target.value);
    }

    const handleConfirmarEmail = (e) => {
      setConfirmarEmail(e.target.value);
    }



    const [orderId, setOrderId] = useState("")

    const { cart, montoTotalEnElCarrito,limpiarCarrito } = useContext(CartContext)

    const totalCarrito = montoTotalEnElCarrito

    const EnviarDatos = (e) => {
        e.preventDefault()
        const order = {
          buyer: {
            nombre,
            apellido,
            telefono,
            email,
          
          },
          items: cart,
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

    
    

    if(orderId) {
      return (
        <h1>Gracias por tu compra! Tu numero de seguimiento es {orderId}  </h1>
      );
    }

  return (
    <form action="" onSubmit={EnviarDatos} className='form'>
        <label>Nombre <span>*</span></label>
        <input className='elemento-formulario' type="text" placeholder='Nombre' name='nombre' onChange={handleNombre} value= {nombre}  required />
        <label>Apellido <span>*</span></label>
        <input className='elemento-formulario' type="text" placeholder='Apellido' name='apellido' onChange={handleApellido} value= {apellido} required />
        <label>Telefono <span>*</span></label>
        <input className='elemento-formulario' type="number" placeholder='Telefono' name='telefono' onChange={handleTelefono} value= {telefono} required/>
        <label>Email <span>*</span></label>
        <input className='elemento-formulario' type="email" placeholder='Email' name='telefono' onChange={handleEmail} value= {email} required />
        <label>Confirmar Email <span>*</span></label>
        <input className='elemento-formulario' type="email" placeholder='Confirmar Email' name='telefono' onChange={handleConfirmarEmail} value= {confirmarEmail} required/>
       <button className='elemento-formulario' type='submit' disabled={!email || email !== confirmarEmail}>Enviar</button>
    </form>
  )
}

export default Form;