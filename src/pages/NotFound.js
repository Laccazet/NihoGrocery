import Header from "../component/Header"
import { RxCross1 } from "react-icons/rx";

export default function NotFound() {
  return (
      <div className="w-full h-full flex-col">
  
        <Header type={0} />
  
          <div className="w-full h-[600px] flex flex-col justify-center items-center p-3">
            <RxCross1 size={200} color="#2db9a6" />
            <h1 className="text-center font-bold text-[#46b3fc] text-3xl">We couldn't find the page you were looking for</h1>
          </div>
      </div>
  )
}
