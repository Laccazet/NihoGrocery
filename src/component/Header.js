import { useState, useContext } from "react";
import dataContext from "../context/dataContext";
import HeaderButton from "./HeaderButton";
import { Link } from "react-router-dom";

export default function Header( {type} ) {

    var [input, setInput] = useState("");
    var {search} = useContext(dataContext);

    const handleClick = () => {
        search(input);
    } 

    return (
        <div className="w-full h-20 bg-slate-800 flex justify-between items-center pl-10 pr-10 text-slate-500">
            <HeaderButton text={"NihoGrocery"} path={"/"} />
            <div className="w-[500px] h-full flex justify-between items-center">
                <div className="w-[350px] flex justify-center items-center">
                    <input className="w-[300px] h-[30px]" onChange={(e) => setInput(e.target.value)} />
                    <Link to={"/search"} onClick={handleClick}>
                        <button className="w-[50px] h-[30px] bg-slate-600">Search</button>
                    </Link>
                </div>
                <HeaderButton text={"Cart"} path={"/cart"} />
                <HeaderButton text={"About"} path={"/about"} />
            </div>
        </div>
    )
}
