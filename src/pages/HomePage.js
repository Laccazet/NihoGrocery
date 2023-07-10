import { useContext } from "react"
import dataContext from "../context/dataContext"
import Header from "../component/Header"
import CategoryButton from "../component/CategoryButton"
import Footer from "../component/Footer"

export default function HomePage() {

  const {categories} = useContext(dataContext)

  return (
    <div className="w-full h-full flex flex-col">

      <Header type={0} />

      <div className="w-full h-full bg-stone-700 flex justify-evenly items-center">
        <div className="bg-slate-500 w-3/6 h-4/5 flex justify-center items-center flex-wrap gap-5">
          {categories.map(category => {
            return <CategoryButton key={category.id} category={category} type={0} />
          })}
        </div>

        <div className="bg-sky-600 w-2/6 h-4/5">
          Logo
        </div>
      </div>
      <Footer />

    </div>
  )
}
