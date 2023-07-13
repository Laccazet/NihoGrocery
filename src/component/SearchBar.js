import { useState, useContext } from "react";
import dataContext from "../context/dataContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {

    var [input, setInput] = useState("");
    var {search} = useContext(dataContext);
    var navigate = useNavigate();

    const handleClick = () => {
        search(input);
        navigate("/search");
    } 

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) handleClick();
    }

    return (
        <div className="w-full flex justify-center items-center">
            <input className="searchInput" placeholder="Search..." onKeyDown={handleKeyDown} onChange={(e) => setInput(e.target.value)} />
            <Link to={"/search"} onClick={handleClick}>
                <button className="searchButton"><FaSearch size={20} color="#333333" /></button>
            </Link>
        </div>
    )
}
