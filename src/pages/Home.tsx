import { Box, Container } from '@mui/material'
import TopSection from '../components/home/TopSection'

const Home = () => {
    return (
        <main>
            <TopSection />
            <Box>
                <Container>
                    <section>
                        <div className='flex'>
                            <div className='flex'>
                                <div>
                                    <p>Free shipping</p>
                                    <p>When you spend $80 or more</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>
            </Box>
        </main>
    )
}

export default Home