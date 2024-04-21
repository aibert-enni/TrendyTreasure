import { AppBar, Box, Container, Grid, Toolbar, Typography } from "@mui/material"
import logo from "../../assets/logo.svg"
import Navs from "./Navs"
import ProfileNav from "./ProfileNav"

const Header = () => {
    return (
        <Box bgcolor='#0573f0'>
            <AppBar position="static">
                <Container maxWidth='lg'>
                    <Toolbar sx={{ py: 1 }}>
                        <Box display='flex' gap={1} alignItems='center'>
                            <img className="w-10" src={logo} alt="" />
                            <Typography color='white' fontWeight='600'>
                                Trendy Treasure
                            </Typography>
                        </Box>
                        <Navs />
                        <ProfileNav />
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default Header