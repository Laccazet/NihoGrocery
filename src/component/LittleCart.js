import { useContext } from "react";
import dataContext from "../context/dataContext";
import CartItem from "./CartItem";
import GoToCartButton from "./GoToCartButton";
import { motion, AnimatePresence } from "framer-motion"
import { BsFillCartPlusFill } from "react-icons/bs";

export default function LittleCart() {

    var {cart} = useContext(dataContext);

    const conRender = () => {
        if (cart.length > 0) {
           return (
            <div className="w-full h-[300px] bg-[#ebfaf8] rounded-2xl p-1 flex flex-col gap-3 LittleCart">
                <AnimatePresence>
                    {cart.map(item => {
                        return (
                            <motion.div
                            key={item.id}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            >
                                <CartItem key={item.id} item={item} type={0} />
                            </motion.div>
                        )})}
                </AnimatePresence>
            </div>
           )
        } else {
            return (
                <div className="h-[200px] flex flex-col justify-center items-center gap-2">
                    <BsFillCartPlusFill size={90} color="#2db9a6" />
                    <h1 className="text-3xl">Cart is empty</h1>
                    <h1 className="text-gray-500">Add some item to cart</h1>
                </div>
            )
        }
    }


    return (
        <div className="w-full h-full bg-white rounded-3xl border-2 border-[#2db9a6]">
            <div className="w-full h-full p-3 flex flex-col gap-3 justify-start items-center">
                {conRender()}
                {cart.length > 0 ? <GoToCartButton /> : ""}
            </div>
        </div>
    )
}
