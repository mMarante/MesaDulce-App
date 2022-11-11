import Item from "../Item/Item"

const ItemList = ({product}) => {
  return (
    <>
    {product.map((producto) => {
      return <Item item={producto}
      />;  
    })}
    </>
    );
};

export default ItemList