import cake from '../assets/Cake.png'

const CartWidget = () => {

    return(
    <div className="carrito">
            <img src={cake} alt="carrito"></img>
            <div className='counter'> 1 </div>
        </div>

)
}

export default CartWidget