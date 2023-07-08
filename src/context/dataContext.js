import { createContext, useState } from "react";
import itemsData from "../data/itemsData";

const dataContext = createContext();

export function ContextProvider( {children} ) {

    var categories = itemsData.map(category => category)

    var [selectedCategory, setSelectedCategory] = useState(categories[0]);

    const getCategory = (item) => {
        setSelectedCategory(item);
    }

    return (
        <dataContext.Provider value={{
            categories,
            selectedCategory,
            getCategory,
        }}>
            {children}
        </dataContext.Provider>
    )
}

export default dataContext;