import { ROUTER_PATHS } from '@/router/types'
import { Button } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface ShopButtonProps {
    color: string,
    hoverColor: string
}

const ShopButton: FC<ShopButtonProps> = ({ color, hoverColor }) => {
    return (
        <Button component={Link} to={ROUTER_PATHS.PRODUCTS} variant='outlined' sx={{
            color: color, borderColor: color, px: '40px', py: '10px', my: '10px', fontWeight: '400', ':hover': {
                borderColor: color,
                bgcolor: color,
                color: hoverColor
            }
        }}>
            Shop now
        </Button >
    )
}

export default ShopButton