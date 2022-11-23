import { useState, createContext } from "react";


export const CartContext = createContext()

const Provider = (props) => {

    const [cart, setCart] = useState([]);

    //Add
    const agregarAlCarrito = (data, cantidad) => {
      
        if (isInCart(data.id)) {
            setCart(cart.map(disco => {
                if(disco.id === data.id) return {...disco, cantidad} 
                else return disco
            }))
        }
        else{
            setCart([...cart, {...data,cantidad}])
        }
    }


    const cantidadDiscosEnElCarrito = cart.reduce((acumulador, disco) => acumulador + disco.cantidad, 0); //Elementos en el carro
    
    const montoTotalEnElCarrito = cart.reduce((acumulador, disco) => acumulador + (disco.cantidad * disco.precio), 0); //Total suma

    const limpiarCarrito = () => setCart([]) //Empty Cart

    const isInCart = (id) => cart.find(product => product.id === id) //? true : false;

    const removerDisco = (id) => setCart(cart.filter(product => product.id !== id));

    

    return (
        <CartContext.Provider value={{
            cart,
            limpiarCarrito,
            isInCart,
            removerDisco,
            agregarAlCarrito,
            cantidadDiscosEnElCarrito,
            montoTotalEnElCarrito,

        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default Provider;