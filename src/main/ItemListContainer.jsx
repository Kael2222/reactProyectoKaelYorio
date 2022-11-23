import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItems } from '../services/firebaseConfig'


const ItemListContainer = ({greeting}) => {

    
    const [data, setData] = useState([]) //Discos array
    const {nombreCategoria} = useParams(); 

    //Main function 4 getting disks
    useEffect(() => {
        getItems(nombreCategoria)
          .then(data => {
              setData(data.docs.map(disk => { return {id: disk.id, ...disk.data()}}));
          })
          .catch( errorMessage => {
              console.error(errorMessage);
          })
          
    }, [nombreCategoria]);

      
    return(
       <div className="itemListContenedor">
         {data.length === 0 ? 
                <h3>Cargando Discos...</h3> : 
                <ItemList data={data} />
            } 
       </div>
    )
}

export default ItemListContainer ;

    

    