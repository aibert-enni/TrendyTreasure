import { MenuItem, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTER_PATHS } from '../../router/types'

const ProfileItems = () => {
    return (
        <>
            <MenuItem>
                <Typography>Authorized</Typography>
                <Link to={ROUTER_PATHS.CREATE_PRODUCT}>
                    Create product
                </Link>
            </MenuItem>
        </>
    )
}

export default ProfileItems