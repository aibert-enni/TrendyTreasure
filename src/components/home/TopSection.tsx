import { Container, Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const TopSection = () => {
    return (
        <section className='bg-home bg-cover bg-center py-[100px]'>
            <Container sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                    backgroundColor: 'white',
                    maxWidth: '410px',
                    borderRadius: 1,
                    p: 4
                }}>
                    <Typography fontSize='2.3em' color='#27323F' fontWeight='600'>
                        The best home entertainment system is here
                    </Typography>
                    <Typography fontSize='1em' color='#54595F'>
                        Sit diam odio eget rhoncus volutpat est nibh velit posuere egestas.
                    </Typography>
                    <Link className='text-main-blue font-inter font-semibold hover:underline underline-offset-2 text-lg' to='/shop'>
                        Shop now
                    </Link>
                </Box>
            </Container>
        </section>
    )
}

export default TopSection