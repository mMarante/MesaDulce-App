import "./card.css"
import { Link } from "react-router-dom"

const Item = ({id,name,description,price,image,stock}) => {
  return (
    
    <div className="card">
      <img src={image} alt={name}/>
      <div className="cardTitles">
      <h2>{name}</h2>
      <p>{description}</p>
      </div>
        <div className="cardDetails">
        <p>{price}</p>
        <p> Stock:{stock}</p>
        </div>
        <Link to={`/Item/${id}}`}>
        <button className="btnDetalle">Mas Info</button>
        </Link>
    </div>
  )
}

export default Item