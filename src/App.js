import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './main/ItemListContainer';
import Form from './components/form/Form';
import Provider from './context/CartContext';
import Cart from './components/CartWidget/Cart';



const App = () => {

   return (

      <BrowserRouter>
         <Provider>
            <Header />
            <Routes>
               <Route 
                path='/' 
               element={
               <ItemListContainer greeting= "Bienvenidxs a nuestra tienda online"/> 
               } 
               />
               <Route 
               path='/categoria/:nombreCategoria' 
               element= {<ItemListContainer/>} 
               />
               <Route path='/detail/:idDisco' element= { <ItemDetailContainer />} />
               <Route path='/cart' element= {<Cart/>} />
               <Route path='/Contacto' element={<Form />} /> 
            </Routes>
            <Footer />
         </Provider>
      </BrowserRouter>

  );
}



export default App;

      
         
        


