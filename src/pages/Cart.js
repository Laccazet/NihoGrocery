import { useContext } from "react";
import dataContext from "../context/dataContext";
import Header from "../component/Header";
import CartItem from "../component/CartItem";
import OrderButton from "../component/OrderButton";



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
          return <h1>Add some item stupid.</h1>
      }
    }

    return (
      <div className="w-full min-h-full flex flex-col Cart">
  
        <Header type={0} />
  
          <div className="w-full h-full flex justify-center items-start gap-5 p-6">
  
          <div className="bg-sky-600 w-[636px] min-h-[500px]">
            {conRender()}
          </div>
  
          <div className="w-[300px]">
              <OrderButton />
          </div>
  
        </div>
  
      </div>
    )
}