import { useContext } from "react";
import dataContext from "../context/dataContext";
import Header from "../component/Header";
import CategoryButton from "../component/CategoryButton";
import Product from "../component/Product";
import LittleCart from "../component/LittleCart";

export default function Categories() {

    var {categories, selectedCategory, cart} = useContext(dataContext);

  return (
    <div className="w-full min-h-full flex flex-col Catagories">
      <Header type={1} />

      <div className="w-full h-full flex justify-center items-start gap-5 p-6">

        <div className="bg-slate-600 w-[250px] h-[400px] flex flex-col">
          <h1 className="text-center h-[50px]">Categories</h1>
          {categories.map(category => <CategoryButton key={category.id} category={category} type={1} />)}
        </div>

        <div className="bg-sky-600 w-[636px] min-h-[800px]">
          <div className="w-full h-full flex justify-start items-start flex-wrap gap-3 p-3">
            {selectedCategory.products.map(item => <Product key={item.id} product={item} />)}
          </div>
        </div>

        <div className="bg-gray-800 w-[350px] h-[400px]">
          <LittleCart />
        </div>

      </div>
    </div>
  )
}