import { useContext } from "react";
import dataContext from "../context/dataContext"
import { useNavigate } from "react-router-dom";

export default function OrderButton() {

    var {total, order} = useContext(dataContext);
    var navigate = useNavigate()

    const handleClick = () => {
        order();
        navigate("/");
    }
    
    return (
        <div className='w-full h-40 flex flex-col justify-between items-center'>
            <div className='w-full h-20 bg-white rounded-2xl flex justify-between items-center pl-6 pr-6 text-xl'>
                <h1>Cart Total</h1>
                <h1 className="text-[#2db9a6]">{total.toString().slice(0, 5)}$</h1>
            </div>
    
            <div onClick={handleClick}
            className='w-full h-16 bg-[#46b3fc] rounded-2xl flex justify-center items-center cursor-pointer'>
                <h1 className="text-2xl">Order</h1>
            </div>
        </div>
    )
}
