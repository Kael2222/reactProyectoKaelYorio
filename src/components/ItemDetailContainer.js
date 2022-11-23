import { useEffect,useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getItem } from '../services/firebaseConfig'
import FadeLoader from "react-spinners/ClipLoader";


const ItemDetailContainer = () => {

    const {idDisco} = useParams();

    
    const [dataDetail, setDataDetail] = useState({})
    const [Loading, setLoading] = useState(true)


    useEffect(() => {
        getItem(idDisco)
            .then(data => {
                setDataDetail({id: data.id, ...data.data()});
            })
            .catch( errorMessage => {
                console.error(errorMessage);
            })
            .finally(() => { 
                setLoading(false)
            })
        return () => setLoading(true);  //Clean

        
    }, [idDisco]);

    if (Loading) {
        return (<div><FadeLoader /></div>)
    }
    return(
       <div>
        <ItemDetail data={dataDetail} />
       </div>
        
    )
}

export default ItemDetailContainer ;