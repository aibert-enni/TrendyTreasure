import { Link } from "react-router-dom"
import { ROUTER_PATHS } from "../../router/types"
import { Box, Stack } from "@mui/material"

const Navs = () => {
    return (
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', gap: 6 }}>
            <Link className="uppercase hover:underline text-white" to={ROUTER_PATHS.HOME}>
                HOME
            </Link>
            <Link className="uppercase hover:underline text-white" to={ROUTER_PATHS.HOME}>
                Shop
            </Link>
        </Box>
    )
}

export default Navs