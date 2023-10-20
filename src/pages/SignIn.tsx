import { Box, Container, Typography, Button, InputBase, Link } from '@mui/material';
import Image from 'next/image';

type Props = {};

function SignIn({ }: Props) {

  return (
    <>
      <Container
        sx={{
          backgroundImage: "url('unsplash_jYz3EGBhDpk.png')",
          backgroundSize: 'cover',
          width: '390px',
          height: '844px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'end',
          alignItems: 'stretch',
        }}>
        <Box sx={{
          flex: 1,
          mt: '193px',
          mx: 'auto',
        }}>
          <Image
            src="/logo.png"
            width={222}
            height={71}
            alt='logo'
          />
        </Box>
        <Box sx={{
          mx: -3,
          p: 3,
          backdropFilter: "blur(20px)",
          borderRadius: '16px 16px 0 0',
        }}>
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: 500,
              my: 3,
              textAlign: 'center',
            }}
          >
            Welcome
          </Typography>
          <Typography color='primary'
            sx={{
              fontSize: '18px',
              fontWeight: 700,
              mb: 2,
            }}
          >
            Sign In
          </Typography>
          <InputBase
            fullWidth
            placeholder='Phone Number'
            sx={{
              background: 'white',
              mb: 2,
              borderRadius: 1,
              px: 2,
              height: '48px',
            }} />
          <Button variant='contained' fullWidth sx={{
            fontWeight: 700,
            borderRadius: 1,
            height: '48px',
            textTransform: 'none',
          }}>Get OTP</Button>
          <Box display='flex' justifyContent='center' alignItems='center' mt={5} mb={2}>
            <Typography fontSize='14px' mr={0.5}>Don't have an account?</Typography>
            <Link fontSize='14px' fontWeight={700} >Register Now</Link>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default SignIn;