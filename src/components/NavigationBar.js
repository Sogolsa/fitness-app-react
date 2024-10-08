import React from 'react';
import {
  AppBar,
  Stack,
  Toolbar,
  Button,
  Container,
  Box,
  Typography,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom'; // Change this import

import SearchInput from './SearchInput';
import Logo from '../assets/images/Logo.png';

const NavigationBar = ({ searchQuery, setSearchQuery, handleSearch }) => {
  const location = useLocation();

  return (
    <AppBar
      position='static'
      sx={{
        backgroundColor: '#000',
        maxWidth: '100%',
        width: { lg: 'auto', xs: '100%' },
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Stack
            direction={{ lg: 'row', xs: 'column' }}
            justifyContent='space-between'
          >
            <Button component={Link} to='/'>
              <img
                src={Logo}
                alt='logo'
                style={{
                  width: '45px',
                  height: '45px',
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </Button>

            <Stack
              direction='row'
              alignItems='center'
              sx={{
                display: { sm: 'flex', xs: 'flex' },
                gap: { lg: '40px', xs: '15px' },
                fontSize: { lg: '24px', xs: '14px' },
              }}
            >
              <Typography
                component={Link}
                to='/'
                sx={{
                  textDecoration: 'none',
                  color: '#fff',
                  borderBottom:
                    location.pathname === '/' ? '3px solid #fff' : 'none',
                }}
              >
                Home
              </Typography>
              <Typography
                component={Link}
                to='/exercises'
                sx={{
                  textDecoration: 'none',
                  color: '#fff',
                  borderBottom:
                    location.pathname === '/exercises'
                      ? '3px solid #fff'
                      : 'none',
                }}
              >
                Exercises
              </Typography>
            </Stack>
          </Stack>

          <Box
            sx={{
              marginLeft: 'auto',
              display: { xs: 'flex', sm: 'block' },
              width: 'auto',
              justifyContent: 'center',
            }}
          >
            <SearchInput
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleSearch={handleSearch}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavigationBar;
