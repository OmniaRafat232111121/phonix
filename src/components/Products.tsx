import { ProductProps, Props } from "../../type";
import Container from "./Container";
import ProductCard from "./ProductCard";



const Products = ({ products }: Props) => {
  return (
    <Container className='grid xl:grid-cols-4 gap-10 py-10 md:grid-cols-2 grid-cols-1'>
      {products.map((item) => (
        <ProductCard key={item._id} product={item} />
      ))}
    </Container>
  );
};

export default Products;