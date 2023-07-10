import { useContext } from "react"
import dataContext from "../context/dataContext"

export default function CartItem( {item} ) {

    var {deleteCartItem} = useContext(dataContext);

    const handleClick = () => {
        deleteCartItem(item);
    }

    return (
        <div className="w-full h-[50px] hover:bg-slate-600 bg-slate-500 flex justify-center items-center">
            <img src={item.image} alt="" width={30} />
            
            <div className="w-3/4 flex justify-evenly">
                <h1>{item.name}</h1>
                <h1>{item.price * item.quentity}$</h1>
                <h1>{item.quentity} piece</h1>
            </div>

            <div>
                <button className="bg-red-400" onClick={handleClick}>X</button>
            </div>
        </div>
    )
}
