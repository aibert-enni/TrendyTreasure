import { AppBar, Box, Container, Grid, Toolbar, Typography } from "@mui/material"
import logo from "../../assets/logo.svg"
import Navs from "./Navs"
import ProfileNav from "./ProfileNav"
import Logo from "../Logo"
import Searchbar from "./Searchbar"

const Header = () => {
    return (
        <AppBar position="static" sx={{ bgcolor: 'white' }}>
            <Container>
                <Toolbar sx={{ py: 1, display: 'flex', justifyContent: 'space-between' }}>
                    <Logo height="22px" />
                    <Searchbar />
                    <Navs />
                    <ProfileNav />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header