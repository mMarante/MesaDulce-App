import "./card.css"
import { Link } from "react-router-dom"

const Item = ({item}) => {
  return (
    <div className="card">
      <img src={item.image} alt={item.name}/>
      <div className="cardTitles">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      </div>
        <div className="cardDetails">
        <p>{item.price}</p>
        <p> Stock:{item.stock}</p>
        </div>
        <Link to={`/Item/${item.id}`}>
        <button className="btnDetalle">Mas Info</button> 
        </Link>
        </div>
  )
}

export default Item