import cake from '../assets/Cake.png'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    const{getFinalProducts}= useContext(CartContext);
    return(
    <NavLink to="/Cart" className="carrito">
            <img src={cake} alt="carrito"></img>
            <div className='counter'> {getFinalProducts()} </div>
        </NavLink>

)
}

export default CartWidget