import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItems } from '../services/firebaseConfig'


const ItemListContainer = ({greeting}) => {

    
    const [data, setData] = useState([]) 
    const {nombreCategoria} = useParams(); 
    const [itemsLoading, setItemsLoading] = useState(true)

    //Main function 4 getting disks
    useEffect(() => {
        getItems(nombreCategoria)
          .then(data => {
              setData(data.docs.map(disk => { return {id: disk.id, ...disk.data()}}));
          })
          .catch( errorMessage => {
              console.error(errorMessage);
          })
          .finally(() => {
            setItemsLoading(false);
          })
          
    }, [nombreCategoria]);

    if(itemsLoading) return <h3>Cargando discos...</h3>

      
    return(
        <div className="itemListContenedor">
          <ItemList data={data} />
       </div>
    )
}

export default ItemListContainer ;

    

    