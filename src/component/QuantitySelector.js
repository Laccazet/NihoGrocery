import { useContext } from "react"
import dataContext from "../context/dataContext"

export default function QuantitySelector( {item, type} ) {

    var {increaseQuantity, decreaseQuantity} = useContext(dataContext);

    switch (type) {
            case 0:
                return (
                    <div className='w-[90px] h-8 bg-sky-700 flex select-none'>
                        <div onClick={() => decreaseQuantity(item)}
                        className='w-1/3 h-full bg-red-500 flex justify-center items-center cursor-pointer'>
                            {item.quantity === 1 ? <h1>O</h1> : <h1>-</h1>}
                        </div>
                        <div className='w-1/3 h-full flex justify-center items-center'>
                            <h1>{item.quantity}</h1>
                        </div>
                        
                        <div onClick={() => increaseQuantity(item)}
                        className='w-1/3 h-full bg-green-700 flex justify-center items-center cursor-pointer'>
                            <h1>+</h1>
                        </div>
                    </div>
                )

            case 1:
                return (
                    <div className='w-8 h-[90px] bg-sky-700 flex flex-col absolute top-2 right-2 select-none'>
                        <div onClick={() => increaseQuantity(item)}
                        className='w-full h-1/3 bg-green-700 flex justify-center items-center cursor-pointer'>
                            <h1>+</h1>
                        </div>

                        <div className='w-full h-1/3  flex justify-center items-center'>
                            <h1>{item.quantity}</h1>
                        </div>
                        
                        <div onClick={() => decreaseQuantity(item)}
                        className='w-full h-1/3 bg-red-500 flex justify-center items-center cursor-pointer'>
                            {item.quantity === 1 ? <h1>O</h1> : <h1>-</h1>}
                        </div>
                    </div>
                  )
        }
}
