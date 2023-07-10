import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Categories from "../pages/Categories"
import Search from "../pages/Search"
import NotFound from "../pages/NotFound"

export default function App() {
  return (
    <div id="App">
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/search" element={<Search />} />
                <Route path="/*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}