import { useContext } from "react";
import dataContext from "../context/dataContext";
import { BsFillTrashFill, BsDash } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai"

export default function QuantitySelector( {item, type} ) {

    var {increaseQuantity, decreaseQuantity} = useContext(dataContext);

    switch (type) {
            case 0:
                return (
                    <div className='w-[85px] h-8 bg-[#46b3fc] rounded-lg flex select-none '>
                        <div onClick={() => decreaseQuantity(item)}
                        className='w-1/3 h-full bg-red-600 rounded-l-lg flex justify-center items-center cursor-pointer'>
                            {item.quantity === 1 ? <BsFillTrashFill /> : <BsDash />}
                        </div>
                        <div className='w-1/3 h-full flex justify-center items-center'>
                            <h1>{item.quantity}</h1>
                        </div>
                        
                        <div onClick={() => increaseQuantity(item)}
                        className='w-1/3 h-full bg-green-700 rounded-r-lg flex justify-center items-center cursor-pointer'>
                            <AiOutlinePlus />
                        </div>
                    </div>
                )

            case 1:
                return (
                    <div className='w-8 h-[90px] bg-[#46b3fc] rounded-lg flex flex-col absolute top-2 right-2 select-none'>
                        <div onClick={() => increaseQuantity(item)}
                        className='w-full h-1/3 bg-green-700 rounded-t-lg flex justify-center items-center cursor-pointer'>
                            <AiOutlinePlus />
                        </div>

                        <div className='w-full h-1/3  flex justify-center items-center'>
                            <h1>{item.quantity}</h1>
                        </div>
                        
                        <div onClick={() => decreaseQuantity(item)}
                        className='w-full h-1/3 bg-red-600 rounded-b-lg flex justify-center items-center cursor-pointer'>
                            {item.quantity === 1 ? <BsFillTrashFill /> : <BsDash />}
                        </div>
                    </div>
                  )
        }
}
