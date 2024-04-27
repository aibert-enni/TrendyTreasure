import { Box, Grid, Skeleton } from '@mui/material'
import React from 'react'

const ProductCardSkeleton = () => {
    return (
        <Grid item xs={4}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '267px',
                px: '16px',
                py: '24px',
                bgcolor: '#F6F6F6',
                borderRadius: 2,
                gap: '20px'
            }} >
                <Skeleton width='160px' height='160px' variant='rectangular' />
                <Skeleton width='200px' />
                <Skeleton width='100px' variant='text' />
                <Skeleton width='180px' height='30px' variant='rounded' />
            </Box>
        </Grid>
    )
}

export default ProductCardSkeleton