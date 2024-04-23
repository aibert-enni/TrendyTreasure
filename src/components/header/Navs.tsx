import { Link } from "react-router-dom"
import { ROUTER_PATHS } from "../../router/types"
import { Box } from "@mui/material"

interface Item {
    text: string,
    path: string
}

const Navs = () => {
    const items: Item[] = [
        {
            text: "Home",
            path: ROUTER_PATHS.HOME
        },
        {
            text: "About",
            path: ROUTER_PATHS.HOME
        },
        {
            text: "Contact Us",
            path: ROUTER_PATHS.HOME
        },
        {
            text: "Blog",
            path: ROUTER_PATHS.HOME
        }
    ]
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
            {items.map(item =>
                <Link key={item.text} className="capitalize font-medium hover:opacity-100 text-black opacity-35" to={item.path}>
                    {item.text}
                </Link>)}
        </Box>
    )
}

export default Navs