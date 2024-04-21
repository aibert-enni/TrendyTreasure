import logo from "../../assets/logo.svg"
import Navs from "./Navs"
import ProfileNav from "./ProfileNav"

const Header = () => {
    return (
        <div className="bg-main-blue">
            <nav className='container-lg grid grid-cols-header items-center h-16 gap-4'>
                <div className="flex gap-2 items-center">
                    <img className="w-10" src={logo} alt="" />
                    <p className="text-white font-bold">Trendy Treasure</p>
                </div>
                <Navs />
                <ProfileNav />
            </nav>
        </div>
    )
}

export default Header