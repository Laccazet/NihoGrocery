import { useContext, useState } from "react";
import dataContext from "../context/dataContext";

export default function AddCartButton( {item} ) {

    var {addCart} = useContext(dataContext);

    const handleClick = () => {
        addCart(item);
    }

    return (
        <div onClick={handleClick}
        className='bg-slate-500 w-10 h-10 absolute top-2 right-2 flex justify-center items-center cursor-pointer'>
            <h1>+</h1>
        </div>
  )
}
