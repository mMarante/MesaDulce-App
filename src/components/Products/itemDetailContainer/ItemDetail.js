import "./itemDetail.css"
import ItemCount from "../../counter/ItemCount"

const ItemDetail = ({items}) => {
  const onAdd=(counter)=>{
    console.log(`Recibimos ${counter}`)
  }
  return (
    <>
    <div className="itemDetail">
            <img src={items.image} alt={items.name}/>
            <div className="detail">
            <h2>{items.name}</h2>
            <h3>Descripcion: {items.description}</h3>
            <h3>Precio: {items.price} </h3>
            <h3>Stock: {items.stock} </h3>
            </div>
    </div>

    <ItemCount stock={items.stock} initial={1} onAdd={onAdd}/>
    </>
    
  )
}

export default ItemDetail