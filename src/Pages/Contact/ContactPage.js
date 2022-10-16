import React,{useContext, useEffect} from 'react'
import {db} from "../../utils/firebase";
import {doc,getDoc, collection, getDocs, query, where, limit } from "firebase/firestore"


const ContactPage = () => {

  useEffect(()=>{

    const getData = async()=>{
      const queryRef = query(collection(db,"products"),where("category","==","Tortas"), limit(1));
      const response = await getDocs(queryRef);
      const productos = response.docs.map(doc => { 
        const newProduct = {
          ...doc.data(),
          id: doc.id
        }
        return newProduct
      })
    }
    getData();
  },[])
  return (
    <h1>Sitio en Construccion</h1>
  )
}

export default ContactPage