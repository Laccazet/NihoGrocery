import AddCartButton from "./AddCartButton"

export default function Product( {product} ) {
  return (
    <div className="w-[100px] h-48 sm:w-36 sm:h-52 bg-[#ededed] rounded-2xl flex flex-col justify-center items-center shrink gap-3">
        <div className="bg-[#e1e1e1] rounded-2xl w-full h-4/5 flex justify-center items-center relative">
            <AddCartButton item={product} />
            <img src={product.image}  alt="" width={80}/>
        </div>
        <div className="text-center flex flex-col justify-center items-center relative bottom-1">
            <h1 className="text-[#2db9a6]">{product.price}$</h1>
            <h1 className="text-sm sm:text-xl">{product.name}</h1>
            <h1 className="text-sm text-gray-500">{product.gram + product.unit}</h1>
        </div>
    </div>
  )
}
