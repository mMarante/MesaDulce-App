import { useEffect,useState} from "react";
import ItemList from "../ItemList/ItemList"
import "./itemList.css";
import { useParams } from "react-router-dom";
import { db } from "../../../utils/firebase";
import {collection,getDocs,query,where} from "firebase/firestore"

const ItemListContainer = () =>{
    const {categoryId} = useParams();
    const [productos,setProductos]=useState([]);

    useEffect(()=>{

        if(categoryId){
            const queryRef = query(collection(db,"Products"),where("category","==",categoryId));
            getDocs(queryRef).then(response=>{
                const results = response.docs.map(doc=>{
                    const newProduct={id:doc.id,
                        ...doc.data(),
                        }
                        return newProduct           
                   });
                   setProductos(results)
             })
            } else{
                const queryRef = collection(db,"Products")
                getDocs(queryRef).then(response=>{
                    const results = response.docs.map(doc=>{
                        const newProduct={id:doc.id,
                            ...doc.data(),
                            }
                            return newProduct           
                       });
                       setProductos(results)
                    
                 })
            } 
        },[categoryId])
 
 return(<>

        <div className="container">
        { productos.length > 0 ? (<ItemList product={productos}/>):(
            <h2>Cargando...</h2>
        )}
        </div>
        </>
    ) 
} 

export default ItemListContainer