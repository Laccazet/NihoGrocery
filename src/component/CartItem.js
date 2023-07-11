import { useContext } from "react"
import dataContext from "../context/dataContext"
import QuantitySelector from "./QuantitySelector";

export default function CartItem( {item, type} ) {

    var {deleteCartItem} = useContext(dataContext);

    const handleClick = () => {
        deleteCartItem(item);
    }

    switch (type) {
        case 0:
            return (
                <div className="w-full h-[50px] hover:bg-slate-600 bg-slate-500 flex justify-evenly items-center">
                    <img src={item.image} alt="" width={30} />
                    
                    <div className="w-1/4 flex flex-col justify-evenly">
                        <h1>{item.name}</h1>
                        <h1>{(item.price * item.quantity).toString().slice(0, 5)}$</h1>
                    </div>
        
                    <div className="w-1/4">
                        <QuantitySelector item={item} type={0} />
                    </div>
                </div>
            )

        case 1:
            return (
                <div className="w-full h-[100px] hover:bg-slate-600 bg-slate-500 flex justify-evenly items-center">
                    
                    <div className="w-[80px] h-[80px] border-2 flex justify-center items-center">
                        <img src={item.image} alt="" width={50} />
                    </div>
                    
                    <div className="w-1/4 flex flex-col justify-evenly">
                        <h1>{(item.price * item.quantity).toString().slice(0, 5)}$</h1>
                        <h1>{item.name}</h1>
                        <h1>{item.gram + item.unit}</h1>
                    </div>
        
                    <div className="w-1/4">
                        <QuantitySelector item={item} type={0} />
                    </div>
                </div>
            )
    }


}
