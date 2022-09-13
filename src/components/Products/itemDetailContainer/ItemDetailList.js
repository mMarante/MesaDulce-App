import ItemDetail from "../itemDetailContainer/ItemDetail"

const ItemDetailList = ({product}) => {

  return (
     
    <>
      <ItemDetail 
      name={product.name}
      description={product.description}
      price={product.price}
      stock={product.stock}
      image={product.image}
      id={product.id}
      />;  
  </>  
    
    );
};

export default ItemDetailList