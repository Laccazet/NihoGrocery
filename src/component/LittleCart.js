import { useContext } from "react";
import dataContext from "../context/dataContext";
import CartItem from "./CartItem";

export default function LittleCart() {

    var {cart} = useContext(dataContext);

    const conRender = () => {
        if (cart.length > 0) {
           return cart.map(item => <CartItem key={item.id} item={item} />)
        } else {
            return <h1>Add some item stupid.</h1>
        }
    }


    return (
        <div className="w-full h-full">
            <div className="w-full h-[100px] flex justify-center items-center">
                <h1>Cart</h1>
            </div>
            <div className="w-full h-5/6 bg-slate-400 flex flex-col gap-3">
                {conRender()}
            </div>
        </div>
    )
}
