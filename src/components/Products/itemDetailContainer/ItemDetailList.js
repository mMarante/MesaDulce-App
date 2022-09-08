import ItemDetail from "../itemDetailContainer/ItemDetail"

const ItemDetailList = ({product}) => {

  return (
     
    <>
    {console.log(product)} 
     
     
      <ItemDetail 
      name={product.name}
      description={product.description}
      price={product.price}
      stock={product.stock}
      image={product.image}
      key={product.id}
      />;  
  </>  
    
    );
};

export default ItemDetailList