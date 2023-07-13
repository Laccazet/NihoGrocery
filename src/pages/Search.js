import { useContext } from "react"
import dataContext from "../context/dataContext"
import Header from "../component/Header";
import Footer from "../component/Footer";
import Product from "../component/Product";
import LittleCart from "../component/LittleCart";
import { RxCross1 } from "react-icons/rx";

export default function Search() {

    var {searchResult, categories} = useContext(dataContext);


    const conRender = () => {
        if (searchResult.length > 0) {
            return (
                <div className="w-full h-full flex justify-start items-start flex-wrap gap-3 p-3">
                    {searchResult.map(item => {
                        return <Product key={item.id} product={item} />
                    })}
                </div>
              )
        }else {
            return (
                <div className="w-full h-[700px] flex flex-col justify-center items-center">
                    <RxCross1 size={130} color="#2db9a6" />
                    <h1 className="text-xl md:text-3xl">The product can't found</h1>
                </div>
            )
        }
    }



    return (
        <div className="w-full min-h-full flex flex-col Catagories">

        <Header type={1} />
  
        <div className="w-full h-full flex justify-center items-start gap-5 p-6">
  
            <div className="bg-white rounded-3xl w-[348px] sm:w-[480px] md:w-[636px] xmd:w-[792px] min-h-[700px] shrink-0">
                {conRender()}
            </div>
  
            <div className="hidden lg:flex w-[300px] h-[400px]">
                <LittleCart />
            </div>
        </div>

        <Footer />
  
      </div>
    )
}
