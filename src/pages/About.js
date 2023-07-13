import Header from "../component/Header"

export default function About() {
  return (
    <div className="w-full h-full flex-col">
  
      <Header type={0} />

      <div className="w-full h-[600px] flex flex-col justify-center items-center p-3">
        <div className="w-2/4 h-2/4 bg-[#2db9a6] flex justify-center items-center rounded-3xl">
          <h1 className="text-center font-bold text-black text-xl">This react application was made by Durdu Kolkıran to learn react  essentials.</h1>
        </div>
      </div>
    </div>
  )
}
