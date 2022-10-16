import "./card.css"
import { Link } from "react-router-dom"

const Item = ({item}) => {
  return (
    <div className="card">
      <img src={item.img} alt={item.title}/>
      <div className="cardTitles">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      </div>
        <div className="cardDetails">
        <h3>${item.price}</h3>
        <p>Stock:{item.stock}</p></div>
      
        <Link to={`/Item/${item.id}`}>
        <button className="btnDetalle">Mas Info</button> 
        </Link>
        </div>
  )
}

export default Item