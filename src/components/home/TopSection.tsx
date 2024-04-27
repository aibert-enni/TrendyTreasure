import { Container, Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import iphoneImage from '@assets/IphoneImage.png'
import ShopButton from '../ShopButton'

const TopSection = () => {
    return (
        <section className='bg-[#211C24] bg-cover bg-center'>
            <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    maxWidth: '410px',
                }}>
                    <Typography fontSize='25px' color='#909090' fontWeight='600'>
                        Pro.Beyond
                    </Typography>
                    <Typography noWrap fontSize='5em' color='white'>
                        IPhone 14 <span className='font-bold'>Pro</span>
                    </Typography>
                    <Typography noWrap fontSize='18px' color='#909090' fontWeight='500'>
                        Created to change everything for the better. For everyone
                    </Typography>
                    <ShopButton color='#fff' hoverColor='#211C24' />
                </Box>
                <img src={iphoneImage} alt="Iphone 14 image" />
            </Container>
        </section>
    )
}

export default TopSection