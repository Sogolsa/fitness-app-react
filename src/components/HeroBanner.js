import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import BannerImage from '../assets/images/banner.jpg';

const HeroBanner = ({ handleExplore }) => {
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
        height: { lg: '160vh', xs: '80vh' },
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
          ml: { sm: '40px', xs: '2px' },
        }}
      >
        <Typography
          color='#a53860'
          sx={{
            fontWeight: { lg: '600', xs: '600' },
            fontSize: { lg: '26px', xs: '18px' },
            maxWidth: { xs: '60%', lg: '100%' },
          }}
        >
          Welcome to My Fitness App
        </Typography>
        <Typography
          sx={{
            fontSize: { lg: '42px', xs: '20px', sm: '25px' },
            fontWeight: { lg: '700', xs: '600' },
            maxWidth: { xs: '75%' },
          }}
          mb='20px'
          mt='30px'
        >
          Your journey to <br /> a healthier lifestyle <br /> starts here
        </Typography>
        <Stack>
          <Button
            href='#exercises'
            onClick={handleExplore}
            sx={{
              fontSize: { xs: '14px', sm: '18px', m: '20px', lg: '22px' },
              width: { xs: '40%', lg: '200px' },
              maxWidth: { xs: '60%' },
            }}
            style={{
              marginTop: '45px',
              background: '#a53860',
              color: 'white',
              borderRadius: '4px',
              textDecoration: 'none',
              textTransform: 'none',
              textAlign: 'center',
            }}
          >
            Explore Exercises
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default HeroBanner;
