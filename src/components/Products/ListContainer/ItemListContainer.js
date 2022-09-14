import data from "./mock-data";
import { useEffect, useState } from "react";
import ItemList from "../itemList/ItemList";
import "./itemList.css";
import { useParams } from "react-router-dom";


const ItemListContainer = () =>{
    const {categoryId} = useParams(); 
    const [items, setItems] = useState([]);

    const getData = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data);
        }, 2000);
    });

    useEffect(()=> {
        getData.then((result)=> {
            if(categoryId){
            const newProducts = result.filter(item=>item.category === categoryId);
            
            setItems(newProducts)
        } else{setItems(result)}
        })
    },[categoryId])
    
    return(<>

        <div className="container">
        { items.length > 0 ? (<ItemList product={items}/>):(
            <h2>Cargando...</h2>
        )}
        </div>
        </>
    )
}

export default ItemListContainer