import QuantitySelector from "./QuantitySelector";

export default function CartItem( {item, type} ) {

    switch (type) {
        case 0:
            return (
                <div className="w-full h-[50px] bg-[#ededed] rounded-xl flex justify-evenly items-center shrink-0">
                    <img src={item.image} alt="" width={30} />
                    
                    <div className="w-1/4 flex flex-col justify- text-sm">
                        <h1>{item.name}</h1>
                        <h1 className="text-[#2db9a6]">{(item.price * item.quantity).toString().slice(0, 5)}$</h1>
                    </div>
        
                    <div className="w-1/4">
                        <QuantitySelector item={item} type={0} />
                    </div>
                </div>
            )

        case 1:
            return (
                <div className="w-full h-[100px] bg-[#ededed] rounded-2xl flex justify-evenly items-center">
                    
                    <div className="w-[80px] h-[80px] border-2 border-[#2db9a6] flex justify-center items-center">
                        <img src={item.image} alt="" width={50} />
                    </div>
                    
                    <div className="w-1/4 flex flex-col justify-evenly">
                        <h1 className="text-[#2db9a6]">{(item.price * item.quantity).toString().slice(0, 5)}$</h1>
                        <h1 className="">{item.name}</h1>
                        <h1 className="text-gray-500">{item.gram + item.unit}</h1>
                    </div>
        
                    <div className="w-1/4">
                        <QuantitySelector item={item} type={0} />
                    </div>
                </div>
            )
    }


}
