import { appApi } from '../../services/ApiService'

import avatar from "../../assets/avatar-15.svg"
import { Link } from 'react-router-dom'
import { ROUTER_PATHS } from '../../router/types'
import { Box, Button, Popover } from '@mui/material'
import { useState } from 'react'

const ProfileNav = () => {
    const { data: user } = appApi.useFetchUserQuery({ username: '', password: '' })

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Box>
            <Button onClick={handleClick}>
                <img className='w-8 fill-white h-full cursor-pointer' src={avatar} alt='avatar' />
            </Button>
            <Popover sx={{
                '.MuiPopover-paper': {
                    backgroundColor: '#0573f0',
                    width: 120,
                    p: 1,
                    color: '#fff'
                }
            }} id={id} open={open} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
            }}>
                {user?.authorized ? <p>Authorized</p> : <Link to={ROUTER_PATHS.LOGIN}>Login</Link>}
            </Popover>
        </Box>
    )
}

export default ProfileNav
