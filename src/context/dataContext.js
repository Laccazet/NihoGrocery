import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import itemsData from "../data/itemsData";

const dataContext = createContext();

export function ContextProvider( {children} ) {


    var [categories] = useState(itemsData.map(category => category))
    var [selectedCategory, setSelectedCategory] = useState(categories[0]);
    var [searchResult, setSearchResult] = useState([]);
    var [cart, setCart] = useState([]);
    var [total, setTotal] = useState(0);

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
            setCart(prev => [...prev, {...product, quantity: 1}]);
        } else {
            increaseQuantity(product);
        }
    }

    const deleteCartItem = (product) => {
        setCart(cart.filter(item => product.id !== item.id));
    }

    const increaseQuantity = (product) => {
        setCart(cart.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item))
    }

    const decreaseQuantity = (product) => {
        if (product.quantity === 1) {
            deleteCartItem(product);
        } else {
            setCart(cart.map(item => item.id === product.id ? {...item, quantity: item.quantity - 1} : item))
        }
    }

    useEffect(() => {
        setTotal(() => {
            let lastTotal = 0;
            cart.map(item => lastTotal = lastTotal + (item.price * item.quantity));
            return lastTotal;
        })
    }, [cart])

    const order = () => {
        setCart([]);
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
            increaseQuantity,
            decreaseQuantity,
            total,
            order,
        }}>
            {children}
        </dataContext.Provider>
    )
}

export default dataContext;