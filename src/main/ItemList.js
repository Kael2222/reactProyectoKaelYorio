import React from 'react'
import Item from '../main/Item'


const ItemList = ( {data} ) => {
    return(  
    data.map(data => {
      return(
        <Item key={data.id} data= {data} />
        );
      }));
    
  }


export default ItemList;