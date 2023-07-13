import { useContext, useState } from "react";
import dataContext from "../context/dataContext";
import QuantitySelector from "./QuantitySelector";
import { AiOutlinePlus } from "react-icons/ai"

export default function AddCartButton( {item} ) {

    var {cart, addCart} = useContext(dataContext);

    const conRender = () => {
        let exist = cart.some(cItem => cItem.id === item.id);
        if (!exist) {
            return (
                <div onClick={handleClick}
                className='bg-[#46b3fc] w-10 h-10 rounded-full absolute top-2 right-2 flex justify-center items-center cursor-pointer'>
                    <AiOutlinePlus />
                </div>
            )
        } else {
            let cartItem = cart.find(cItem => {if (cItem.id === item.id) return cItem});
            return <QuantitySelector item={cartItem} type={1} />
        }
    }

    const handleClick = () => {
        addCart(item);
    }

    return conRender();
}
