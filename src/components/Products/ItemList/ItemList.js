import Item from "../item/Item"

const ItemList = ({product}) => {
  return (
    <>
    {product.map((producto) => {
      return <Item 
      name={producto.name}
      description={producto.description}
      price={producto.price}
      stock={producto.stock}
      image={producto.image}
      key={producto.id}
      />;  
    })}
    </>
    );
};

export default ItemList