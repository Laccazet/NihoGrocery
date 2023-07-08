import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainMenu from "../pages/MainMenu"
import Categories from "../pages/Categories"
import NotFound from "../pages/NotFound"

export default function App() {
  return (
    <div id="App">
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<MainMenu />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
