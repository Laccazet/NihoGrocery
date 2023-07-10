import AddCartButton from "./AddCartButton"

export default function Product( {product} ) {
  return (
    <div className="w-36 h-52 bg-sky-800 flex flex-col justify-center items-center shrink gap-3">
        <div className="bg-sky-600 w-full h-4/5 flex justify-center items-center relative">
            <AddCartButton item={product} />
            <img src={product.image}  alt="" width={80}/>
        </div>
        <div className="text-center">
            <h1 className="text-xl">{product.name}</h1>
            <h1>{product.gram + product.unit}</h1>
            <h1>{product.price}</h1>
        </div>
    </div>
  )
}
