import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import playstation from '@assets/PlayStation.png'
import macbook from '@assets/macBook.png'
import airpods from '@assets/headphones.png'
import applevision from '@assets/appleVision.png'
import { ROUTER_PATHS } from '@/router/types'
import ShopButton from '../ShopButton'

const SmallerBanners = () => {
    return (
        <section className='grid grid-cols-2'>
            <Box display='flex' flexDirection='column'>
                <Box bgcolor='white' display='flex' justifyContent='space-between' alignItems='center' pr='35px'>
                    <img src={playstation} alt="" />
                    <Box >
                        <Typography fontWeight='medium' fontSize='35px'>
                            Playstation 5
                        </Typography>
                        <Typography color='#909090' fontWeight='medium' fontSize='13px'>
                            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
                        </Typography>
                    </Box>
                </Box>
                <Box display='flex'>
                    <Box bgcolor='#EDEDED' display='flex' justifyContent='space-between' alignItems='center'>
                        <img width='90px' src={airpods} alt="" />
                        <Box display='flex' flexDirection='column' px='25px' gap='8px'>
                            <Typography fontWeight='medium' fontSize='22px'>
                                Apple AirPods <span className='font-medium'>Max</span>
                            </Typography>
                            <Typography color='#909090' fontWeight='medium' fontSize='13px' >
                                Computational audio. Listen, it's powerful
                            </Typography>
                        </Box>
                    </Box>
                    <Box bgcolor='#353535' display='flex' justifyContent='space-between' alignItems='center'>
                        <img width='120px' src={applevision} alt="" />
                        <Box display='flex' flexDirection='column' px='25px' gap='8px'>
                            <Typography color='white' fontWeight='medium' fontSize='22px'>
                                Apple Vision  <span className='font-medium'>Pro</span>
                            </Typography>
                            <Typography color='#909090' fontWeight='medium' fontSize='13px'>
                                An immersive way to experience entertainment
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box bgcolor='#EDEDED' display='flex' justifyContent='space-between' alignItems='center' pl='35px'>
                <Box display='flex' flexDirection='column' gap='16px' alignItems='flex-start'>
                    <Typography fontSize='40px'>
                        Macbook <span className='font-medium'>Air</span>
                    </Typography>
                    <Typography fontSize='13px' color='#909090' fontWeight='medium'>
                        The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
                    </Typography>
                    <ShopButton color='#000' hoverColor='#EDEDED' />
                </Box>
                <img src={macbook} alt="" />
            </Box>
        </section>
    )
}

export default SmallerBanners