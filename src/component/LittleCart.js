import { useContext } from "react";
import dataContext from "../context/dataContext";
import CartItem from "./CartItem";
import GoToCartButton from "./GoToCartButton";

export default function LittleCart() {

    var {cart} = useContext(dataContext);

    const conRender = () => {
        if (cart.length > 0) {
           return (
            <div className="w-full max-h-[250px]  flex flex-col gap-3 LittleCart">
                {cart.map(item => <CartItem key={item.id} item={item} type={0} />)}
            </div>
           )
        } else {
            return <h1>Add some item stupid.</h1>
        }
    }


    return (
        <div className="w-full h-full">
            <div className="w-full h-[100px] flex justify-center items-center">
                <h1>Cart</h1>
            </div>
            <div className="w-full h-5/6 bg-slate-400 p-3 flex flex-col gap-3 justify-start items-center">
                {conRender()}
                {cart.length > 0 ? <GoToCartButton /> : ""}
            </div>
        </div>
    )
}
