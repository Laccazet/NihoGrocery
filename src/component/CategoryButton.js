import { Link } from "react-router-dom";
import { useContext } from "react";
import dataContext from "../context/dataContext";

export default function CategoryButton( {category, type} ) {

    var {selectedCategory, getCategory} = useContext(dataContext);


    const buttonStyle = (type) => {
        switch (type) {
            case 0:
                return (
                    <div className=" w-32 h-44 sm:w-44 sm:h-56 bg-[#ededed] rounded-2xl flex flex-col gap-3">
                        <div className="bg-[#46b3fc] rounded-2xl w-full h-4/5 flex justify-center items-center">
                            <img src={category.image}  alt="" className="w-[70px] sm:w-[120px]"/>
                        </div>
                        <div className="w-full h-1/5">
                            <h1 className="text-xl text-center">{category.name}</h1>
                        </div>
                    </div>
                )

            case 1:
                return (
                    <div className="w-full h-[70px] flex justify-between items-center pl-5 pr-5 hover:bg-[#d8efec]"
                    style={{backgroundColor: `${selectedCategory.name === category.name ? "#2db9a6" : ""}`,
                    borderRadius: `${category.name === "Personal Care" ? "0 0 25px 25px" : "0"}`}}
                    >
                        <div className="flex justify-between items-center gap-2">
                            <img src={category.image} alt="" width={30} />
                            <h1>{category.name}</h1>
                        </div>
                        <div className="rounded-full w-8 h-8 flex justify-center items-center bg-[#46b3fc]">
                            <h1>{category.products.length}</h1>
                        </div>
                    </div>
                )
            case 2:
                return (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex flex-col justify-center items-center">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#d8efec] flex justify-evenly items-center"
                        style={{backgroundColor: `${selectedCategory.name === category.name ? "#2db9a6" : ""}`}}>
                            <img src={category.image} alt="" width={40} />
                        </div>
                        <div className="w-full h-2 sm:h-4 text-center text-xs">
                            <h1>{category.name}</h1>
                        </div>
                    </div>
                )
            default:
                return null

        }
    }

    return (
        <Link to={"/categories"} onClick={() => {getCategory(category)}}>
            {buttonStyle(type)}
        </Link>
      )
}
