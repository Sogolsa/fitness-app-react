import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import BannerImage from '../assets/images/banner.jpg';
import SearchInput from './SearchInput';

function HeroBanner() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        overflowX: 'hidden',
        maxWidth: '100%',
        width: 'auto',
        height: { lg: '200vh', xs: '100vh' },
        minHeight: { lg: '600px', xs: '350px' },
        position: 'relative',
        paddingTop: { lg: '200px', xs: '40px' },
        paddingLeft: { lg: '40px', xs: '15px' },
        // boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          zIndex: 1,
          mt: { lg: '50px', xs: '20px' },
          ml: { sm: '40px', xs: '10px' },
        }}
      >
        <Typography
          color='#a53860'
          sx={{
            fontWeight: { lg: '600', xs: '400' },
            fontSize: { lg: '26px', xs: '20px' },
          }}
        >
          Welcome to My Fitness App
        </Typography>
        <Typography
          fontWeight='700'
          sx={{ fontSize: { lg: '42px', xs: '30px' } }}
          mb='20px'
          mt='30px'
        >
          Your journey to <br /> a healthier lifestyle <br /> starts here
        </Typography>
        <Stack>
          <a
            href='#exercises'
            style={{
              marginTop: '45px',
              fontSize: '22px',
              background: '#a53860',
              padding: '14px',
              color: 'white',
              borderRadius: '4px',
              textDecoration: 'none',
              width: '200px',
              textAlign: 'center',
            }}
          >
            Explore Exercises
          </a>
        </Stack>
      </Box>
    </Box>
  );
}

export default HeroBanner;
