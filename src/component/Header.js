import { useContext, useState } from "react";
import dataContext from "../context/dataContext";
import HeaderButton from "./HeaderButton";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { AiFillQuestionCircle } from "react-icons/ai"


export default function Header() {

    var {cart} = useContext(dataContext);

    return (
        <div className="w-full h-32 md:h-20 bg-[#2b7d72] flex flex-col md:flex-row justify-center items-center pl-10 pr-10 relative">

            <div className="flex justify-between md:justify-evenly w-full h-20">
                <div className="w-16 h-20 flex justify-center items-center md:hidden">
                    <HeaderButton text={<AiFillQuestionCircle size={40} color="#46b3fc" />} path={"/about"} />
                </div>

                <Link to={"/"} className="flex justify-center items-center gap-2 w-1/4">
                    <img src={require("../assets/logo.png")} alt="" width={50} />
                    <h1 className="text-3xl font-[Sansita] text-[#46b3fc] hidden lg:flex">NihoGrocery</h1>
                </Link>
            
                <div className="hidden md:flex w-2/4">
                    <SearchBar />
                </div>

                <div className="w-16 md:w-1/4 h-20 flex justify-end items-center">
                    <div className="w-16 h-full flex flex-col justify-center items-center relative">
                        <HeaderButton text={<BsFillCartFill size={40} color="#46b3fc" />} path={"/cart"} />
                        <div className="w-5 h-5 text-[#fafafa] rounded-full bg-[#db886f] absolute flex justify-center items-center bottom-3 right-1">
                            <h1>{cart.length}</h1>
                        </div>
                    </div>

                    <div className="w-16 h-20 hidden md:flex justify-center items-center">
                        <HeaderButton text={<AiFillQuestionCircle size={40} color="#46b3fc" />} path={"/about"} />
                    </div>
                </div>
            </div>

            <div className="flex w-full md:hidden">
                <SearchBar />
            </div>
            

        </div>
    )
}
