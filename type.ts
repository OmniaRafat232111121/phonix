export interface ProductProps {
  _id: number;
  title: string;
  price: number;
  image: string;
  // Add other product properties as needed
}
export interface Props {
  products: ProductProps[];
}