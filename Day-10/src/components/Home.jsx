import React from 'react'
import { Box, Typography } from '@mui/material'
import bg from '../data/images/lg-bg.jpg'

export default function Home() {


    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', width: '100%', height: '100%', backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom', filter: 'saturate(62%)' }}>
                <Typography sx={{
                    ml: 16,
                    mb: 8,
                    color: 'white',
                    textAlign: 'left',
                    fontWeight: 700,
                    padding: '1.75rem',
                    '@keyframes slide-down': {
                        '0%': {
                            transform: 'translateX(25px)',
                            opacity: 0
                        },
                        '100%': {
                            transform: 'translateX(0px)',
                            opacity: 1
                        }
                    },
                    animation: 'slide-down 0.6s ease-in-out'
                }} variant='h1'>
                    SuperMarket
                    <Typography variant='h2' sx={{ fontWeight: 400 }}>Management</Typography>
                </Typography>
            </Box>
        </>
    )
}
