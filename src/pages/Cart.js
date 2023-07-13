import { useContext } from "react";
import dataContext from "../context/dataContext";
import Header from "../component/Header";
import CartItem from "../component/CartItem";
import OrderButton from "../component/OrderButton";
import { BsFillCartPlusFill } from "react-icons/bs";



export default function Cart() {

    var {cart} = useContext(dataContext);

    const conRender = () => {
      if (cart.length > 0) {
         return (
            <div className="w-full h-full flex justify-start items-start flex-wrap gap-3 p-3">
              {cart.map(item => <CartItem key={item.id} item={item} type={1} />)}
            </div>
         )
      } else {
          return (
            <div className="w-full h-[500px] flex flex-col justify-center items-center gap-2">
              <BsFillCartPlusFill size={90} color="#2db9a6" />
              <h1 className="text-3xl">Cart is empty</h1>
              <h1 className="text-gray-500">Add some item to cart</h1>
            </div>
          )
      }
    }

    return (
      <div className="w-full min-h-full flex-col Cart">
  
        <Header type={0} />
  
          <div className="w-full h-full flex flex-col md:flex-row justify-center items-center md:items-start gap-5 p-6">
  
            <div className="bg-white w-full md:w-[636px] min-h-[500px] rounded-3xl">
              {conRender()}
            </div>
  
            <div className="w-[300px]">
                <OrderButton />
            </div>
  
        </div>
      </div>
    )
}