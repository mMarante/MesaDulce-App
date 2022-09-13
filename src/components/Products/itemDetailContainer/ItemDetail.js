import "./itemDetail.css"
import ItemCount from "../../counter/ItemCount"

const ItemDetail = ({id,name,description,price,image,stock}) => {
  return (
    <>
    <div className="itemDetail">
            <img src={image} alt={name}/>
            <div className="detail">
            <h2>{name}</h2>
            <h3>Descripcion: {description}</h3>
            <h3>Precio: {price} </h3>
            <h3>Stock: {stock} </h3>
            </div>
    </div>

    <ItemCount stock={20} initial={1}/>
    </>
    
  )
}

export default ItemDetail