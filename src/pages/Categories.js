import { useContext } from "react";
import dataContext from "../context/dataContext";
import Header from "../component/Header";
import CategoryButton from "../component/CategoryButton";
import Product from "../component/Product";

export default function Categories() {

    var {categories, selectedCategory} = useContext(dataContext);

  return (
    <div className="w-full min-h-full flex flex-col Catagories">

      <Header style={1} />

      <div className="w-full h-full flex justify-center items-start gap-5 p-6">

        <div className="bg-slate-600 w-[250px] h-[400px] flex flex-col">
          <h1 className="text-center h-[50px]">Categories</h1>
          {categories.map(item => <CategoryButton category={item} style={1} />)}
        </div>

        <div className="bg-sky-600 w-[636px] min-h-[600px] flex justify-start items-start flex-wrap gap-3 p-3">
          {selectedCategory.products.map(item => <Product product={item} />)}
        </div>

        <div className="bg-gray-400 w-[350px] h-[400px]"></div>

      </div>

    </div>
  )
}