import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("");

    const EnviarDatos = (e) => {
        e.preventDefault()
    }

    const handleNombre = (e) => {
        setNombre(e.target.value);
    }


    const handleApellido = (e) => {
        setApellido(e.target.value);
    }

  return (
    <form action="" onSubmit={EnviarDatos}>
        <input type="text" placeholder='Nombre' name='nombre' onChange={handleNombre} value= {nombre}  />
        <input type="text" placeholder='Apellido' name='apellido' onChange={handleApellido} value= {apellido} />
       <button>Enviar</button>
    </form>
  )
}

export default Form;