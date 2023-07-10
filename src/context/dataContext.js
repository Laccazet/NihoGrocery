import { createContext, useState } from "react";
import itemsData from "../data/itemsData";

const dataContext = createContext();

export function ContextProvider( {children} ) {


    var [categories] = useState(itemsData.map(category => category))
    var [selectedCategory, setSelectedCategory] = useState(categories[0]);
    var [searchResult, setSearchResult] = useState([]);
    var [cart, setCart] = useState([]);

    const getCategory = (item) => {
        setSelectedCategory(item);
    }

    const search = (input) => {
        setSearchResult([]);
        categories.map(category => {
            category.products.filter(item => {
                if (input === "") {
                    setSearchResult(prev => {
                        return [...prev, item];
                    })
                } else if (item.name.toLowerCase().includes(input.toLowerCase())) {
                    setSearchResult(prev => {
                        return [...prev, item]
                    })
                } 
            })
        })
    }

    const addCart = (product) => {
        let exist = cart.some(item => item.id === product.id)

        if (!exist) {
            setCart(prev => [...prev, {...product, quentity: 1}]);
        } else {
            setCart(cart.map(item => item.id === product.id ? {...item, quentity: item.quentity + 1} : item))
        }
    }

    const deleteCartItem = (product) => {
        setCart(cart.filter(item => product.id !== item.id));
    }

    return (
        <dataContext.Provider value={{
            categories,
            selectedCategory,
            getCategory,
            search,
            searchResult,
            cart,
            addCart,
            deleteCartItem,
        }}>
            {children}
        </dataContext.Provider>
    )
}

export default dataContext;