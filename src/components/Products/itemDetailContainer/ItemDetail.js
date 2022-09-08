import "./itemDetail.css"

const ItemDetail = ({id,name,description,price,image,stock}) => {
  return (
    
    <div className="itemDetail">
            <img src={image} alt={name}/>
            <div className="detail">
            <h2>{name}</h2>
            <h3>Descripcion: {price} </h3>
            <h3>Precio: {price} </h3>
            <h3>Stock: {stock} </h3>
            </div>
    </div>
  )
}

export default ItemDetail