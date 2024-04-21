import { Link } from "react-router-dom"
import { ROUTER_PATHS } from "../../router/types"

const Navs = () => {
    return (
        <div className="flex gap-10 font-medium  *:hover:underline-offset-2 uppercase text-white">
            <Link className="hover:underline" to={ROUTER_PATHS.HOME}>
                HOME
            </Link>
            <Link className="hover:underline" to={ROUTER_PATHS.HOME}>
                Shop
            </Link>
        </div>
    )
}

export default Navs