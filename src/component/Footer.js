import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="w-full h-16 bg-[#2db9a6] flex justify-center items-center">
      <div className="w-3/4 lg:w-1/4 flex justify-evenly items-center">
        <h1>© 2023 Durdu Kolkıran</h1>
        <div className="rounded-full bg-[#46b3fc] flex justify-center items-center border-2 border-black">
          <a href="https://github.com/Laccazet" target="_blank"><AiFillGithub size={40} /></a>
        </div>
      </div>
    </div>
  )
}
