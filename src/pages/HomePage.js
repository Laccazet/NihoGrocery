import { useContext } from "react"
import dataContext from "../context/dataContext"
import Header from "../component/Header"
import CategoryButton from "../component/CategoryButton"
import Footer from "../component/Footer"

export default function HomePage() {

  const {categories} = useContext(dataContext)

  return (
    <div className="w-full h-full">

      <Header type={0} />

      <div className="w-full min-h-full pt-5 pb-5 flex flex-col lg:flex-row justify-evenly items-center MainPage">
        <div 
        className="bg-white p-5 sm:p-5 md:p-1 lg:p-1 w-[350px] sm:w-[500px] md:w-[600px] md:h-[600px] rounded-2xl
        flex justify-center items-center flex-wrap gap-10 sm:gap-10 md:gap-5 lg:gap-5">
          {categories.map(category => {
            return <CategoryButton key={category.id} category={category} type={0} />
          })}
        </div>

        <div className="bg-[#ccf3ee] border-2 border-[#2db9a6] rounded-2xl w-[450px] h-4/6 hidden lg:flex flex-col justify-center items-center">
          <img src={require("../assets/Cover.png")} className="w-full h-full" />
        </div>
      </div>
      
      <Footer />

    </div>
  )
}
