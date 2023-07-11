import { useContext } from "react";
import dataContext from "../context/dataContext"
import { useNavigate } from "react-router-dom";

export default function GoToCartButton() {

    var {total} = useContext(dataContext);
    var navigate = useNavigate();

  return (
    <div className='w-[250px] h-11 bg-sky-800 flex'>
        <div onClick={() => navigate("/cart")}
        className='w-3/5 h-full bg-sky-500 flex justify-center items-center cursor-pointer'>
            <h1>Go To Cart</h1>
        </div>

        <div className='w-2/5 h-full bg-gray-300 flex justify-center items-center'>
            <h1>{total.toString().slice(0, 5)}$</h1>
        </div>
    </div>
  )
}
