import { useContext } from "react";
import dataContext from "../context/dataContext";
import Header from "../component/Header";
import Footer from "../component/Footer";
import CategoryButton from "../component/CategoryButton";
import Product from "../component/Product";
import LittleCart from "../component/LittleCart";

export default function Categories() {

    var {categories, selectedCategory} = useContext(dataContext);

  return (
    <div className="w-full min-h-full Catagories">
      <Header type={1} />

      <div className="w-full h-full flex flex-col lmd:flex-row justify-center items-center lmd:items-start gap-5 p-6">

        <div className="bg-white w-[348px] sm:w-[480px] h-28 sm:h-24 lmd:w-[250px] lmd:h-[400px] flex flex-col rounded-3xl">
          <div className="hidden w-full h-[50px] lmd:flex justify-center items-center">
            <h1 className="text-[#2db9a6] text-3xl">Categories</h1>
          </div>
          <div className="hidden lmd:flex lmd:flex-col">
            {categories.map(category => <CategoryButton key={category.id} category={category} type={1} />)}
          </div>
          <div className="flex h-full justify-evenly items-center lmd:hidden">
            {categories.map(category => <CategoryButton key={category.id} category={category} type={2} />)}
          </div>
        </div>

        <div className="bg-white rounded-3xl w-[348px] sm:w-[480px] xmd:w-[636px] shrink-0 min-h-[800px]">
          <div className="w-full h-full flex justify-start items-start flex-wrap gap-3 p-3">
            {selectedCategory.products.map(item => <Product key={item.id} product={item} />)}
          </div>
        </div>

        <div className="hidden lg:flex w-[300px] max-h-[350px]">
          <LittleCart />
        </div>

      </div>

      <Footer />
      
    </div>
  )
}