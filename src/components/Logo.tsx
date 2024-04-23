import { Link } from 'react-router-dom'
import { ROUTER_PATHS } from '../router/types'
import logo from "../assets/logo.svg"
import { FC } from 'react'

interface LogoProps {
    height?: string
}

const Logo: FC<LogoProps> = ({ height = "14" }) => {
    return (
        <Link to={ROUTER_PATHS.HOME}>
            <img className={`h-${height}`} src={logo} alt="shop logo" />
        </Link>
    )
}

export default Logo