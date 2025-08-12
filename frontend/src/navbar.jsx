import { FaBeer } from "react-icons/fa"

function Navbar(){
    return (
        <div className="flex">
            <h1 className="">POSGRESTORE</h1>
            <div className="text-red-600">
                <span className="">{FaBeer} ger</span>
            </div>
        </div>
    )
}

export default Navbar