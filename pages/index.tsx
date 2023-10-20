import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SignIn from '../src/pages/SignIn';
import SignUp from '../src/pages/SignUp';
import HomePage from '../src/pages/HomePage';

export default function Home() {
  return (
    <>
    <Typography textAlign="center" mt={10} variant='h3'>Please zoom out for a better view "Ctrl + -" </Typography>
      <Box display='flex' gap={2} flexWrap='wrap' py={20} >
        <SignIn />
        <SignUp />
        <HomePage />
      </Box>
    </>
  );
}
