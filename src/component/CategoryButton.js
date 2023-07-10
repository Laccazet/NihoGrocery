import { Link } from "react-router-dom";
import { useContext } from "react";
import dataContext from "../context/dataContext";

export default function CategoryButton( {category, type} ) {

    var {getCategory} = useContext(dataContext);


    const buttonStyle = (type) => {
        switch (type) {
            case 0:
                return (
                    <div className="w-48 h-60 bg-sky-800 flex flex-col gap-3">
                        <div className="bg-sky-600 w-full h-4/5 flex justify-center items-center">
                            <img src={category.image}  alt="" width={140}/>
                        </div>
                        <div>
                            <h1 className="text-3xl text-center">{category.name}</h1>
                        </div>
                    </div>
                )

            case 1:
                return (
                    <div className="w-full h-[70px] flex justify-between items-center pl-5 pr-5 hover:bg-slate-400">
                        <div className="flex justify-between items-center">
                            <img src={category.image} width={20} />
                            <h1>{category.name}</h1>
                        </div>
                        <h1>{category.products.length}</h1>
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
