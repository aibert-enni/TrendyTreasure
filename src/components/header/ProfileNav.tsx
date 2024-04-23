import { appApi } from '../../services/ApiService'
import { Link } from 'react-router-dom'
import { ROUTER_PATHS } from '../../router/types'
import { Box, Button, Menu, MenuItem } from '@mui/material'
import { useState } from 'react'
import { PersonOutline } from '@mui/icons-material'
import ProfileItems from './ProfileItems'

const ProfileNav = () => {
    const { data: user } = appApi.useFetchUserQuery({ username: '', password: '' });

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <Box>
            <Button aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
                <PersonOutline htmlColor='#000' />
            </Button>
            <Menu id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button"
                }}
            >
                {user?.authorized ? <ProfileItems /> : <MenuItem><Link to={ROUTER_PATHS.LOGIN}>Login</Link></MenuItem>}
                <MenuItem>
                    <Link to={ROUTER_PATHS.CREATE_PRODUCT}>Create product</Link>
                </MenuItem>
            </Menu>
        </Box>
    )
}

export default ProfileNav
