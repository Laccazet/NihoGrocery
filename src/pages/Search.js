import { useContext } from "react"
import dataContext from "../context/dataContext"
import Header from "../component/Header";
import CategoryButton from "../component/CategoryButton";
import Product from "../component/Product";
import LittleCart from "../component/LittleCart";

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
                <div>
                    Not Found
                </div>
            )
        }
    }



    return (
        <div className="w-full min-h-full flex flex-col Catagories">

        <Header type={1} />
  
        <div className="w-full h-full flex justify-center items-start gap-5 p-6">
  
            <div className="bg-sky-600 w-[792px] min-h-[700px]">
                {conRender()}
            </div>
  
            <div className="bg-sky-800 h-[830px] w-[350px] flex flex-col justify-between items-center">
                <div className="bg-gray-800 w-[300px] h-[400px]">
                    <LittleCart />
                </div>

                <div className="bg-slate-600 w-[250px] h-[400px] flex flex-col">
                    <h1 className="text-center h-[50px]">Categories</h1>
                    {categories.map(category => <CategoryButton key={category.id} category={category} type={1} />)}
                </div>
            </div>
  
        </div>
  
      </div>
    )
}
