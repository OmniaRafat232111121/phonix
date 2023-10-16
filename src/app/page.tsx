import Products from "@/components/Products";
import Title from "@/components/Title";

const getData= async ()=>{
  const res=await fetch('https://jsonserver.reactbd.com/phone');
  if(!res.ok){
    throw new Error('Failed to fetch')
  }
  return res.json()

}
export default async function Home () {
  const products= await getData();
  console.log(products)
  return (
    <div>
      <Title title='Get your Favorite phone'/>
      <Products products={products}/>

    </div>
  )
}


