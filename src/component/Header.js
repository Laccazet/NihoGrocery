import HeaderButton from "./HeaderButton"

export default function Header( {style} ) {



    const headerStyle = (style) => {
        switch (style) {
            case 0:
                return (
                    <div className="w-24 h-full flex justify-between items-center">
                        <HeaderButton text={"Cart"} path={"/cart"} />
                        <HeaderButton text={"About"} path={"/about"} />
                    </div>
                )

            case 1:
                return (
                    <div className="w-[500px] h-full flex justify-between items-center">
                        <input className="w-[400px]" />
                        <HeaderButton text={"Home"} path={"/"} />
                    </div>
                )

            case 2:
                return (
                    <div className="w-11 h-full flex justify-center items-center">
                        <div>
                            <HeaderButton text={"Home"} path={"/"} />
                        </div>
                    </div>
                )
        }
    }



    return (
        <div className="w-full h-20 bg-slate-800 flex justify-between items-center pl-10 pr-10 text-slate-500">
            <HeaderButton text={"NihoGrocery"} path={"/"} />
            {headerStyle(style)}
        </div>
    )
}
