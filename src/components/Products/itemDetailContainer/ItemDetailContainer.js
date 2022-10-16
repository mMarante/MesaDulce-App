import {db} from "../../../utils/firebase";
import {doc,getDoc} from "firebase/firestore"
import { useEffect, useState } from "react";
import ItemDetailList from "./ItemDetailList";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{
    const {productId} = useParams();
    const [item, setItem] = useState([]);

    useEffect(()=> {
        const getProducto = async()=>{
          const queryRef= doc(db,"Products",productId);
          const response= await getDoc(queryRef);
          const productDetail= {
            ...response.data(),
            id:response.id,
          }
          setItem(productDetail)
    }
    getProducto();
    },[productId]) 
    
    return(
        
      <div>
        <ItemDetailList product={item} />
      </div>
    )
}

export default ItemDetailContainer