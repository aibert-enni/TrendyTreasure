import { Grid, Typography, Box, Button } from '@mui/material'
import iphone from '@assets/Iphone14pro.png'
import { Product } from '@/models/apiModels'
import { FC } from 'react'

interface ProductCardProps {
    product: Product
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {


    return (
        <Grid xs={4} item>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '267px',
                px: '16px',
                py: '24px',
                bgcolor: '#F6F6F6',
                borderRadius: 2
            }}>
                <img className='w-[160px] h-[160px]' src={`'data:image/png; base64; ${product.dataUrlImage}'`} alt="" />
                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='16px' pt='16px' pb='24px'>
                    <Typography fontWeight='500' textAlign='center'>{product.name}</Typography>
                    <Typography fontSize='24px' fontWeight='600'>${product.price}</Typography>
                </Box>
                <Button sx={{
                    bgcolor: 'black',
                    color: 'white',
                    px: '50px',
                    py: '12px',
                    borderRadius: 2,
                    ':hover': {
                        bgcolor: 'white',
                        color: 'black',
                        border: 'solid',
                        borderColor: 'black'
                    }
                }}>
                    Buy now
                </Button>
            </Box>
        </Grid>
    )
}

export default ProductCard