import {
  Container, Box, Card, Typography, Button, CircularProgress, circularProgressClasses, Divider
} from '@mui/material';
import MenuIcon from '../ions/MenuIcon';
import QuickIcon from '../ions/QuickIcon';
import TargetIcon from '../ions/TargetIcon';
import HomeIcon from '../ions/HomeIcon';
import QuickOrderIcon from '../ions/QuickOrderIcon';
import NotificationIcon from '../ions/NotificationIcon';
import ProfileIcon from '../ions/ProfileIcon';

type Props = {};

function HomePage({ }: Props) {
  return (
    <>
      <Container
        sx={{
          position: 'relative',
          background: '#F2F3F3',
          width: '390px',
          height: '844px',
          px: 3,
          pt: 3,
          overflowY: 'scroll',
        }}>
        <Box sx={{
          py: 2,
        }}>
          <MenuIcon />
        </Box>
        <Box sx={{
          backgroundImage: "url('home-hero.png')",
          backgroundSize: 'cover',
          borderRadius: 2,
          height: 205,
          mb: 2,
        }} />
        <Card elevation={0} sx={{
          borderRadius: 2,
          display: 'flex',
          height: 96,
          mb: 2,
        }}>
          <Box sx={{
            backgroundImage: "url('offer-banner.png')",
            backgroundSize: 'cover',
            width: '50%',
          }} />
          <Box sx={{
            width: '50%',
            pl: 2,
            pt: 3,
          }}>
            <Typography fontSize='20px' fontWeight={500} color='primary' >Get 25% Offer</Typography>
            <Typography fontSize='12px' color='#949E99' >on your first order with us!</Typography>
          </Box>
        </Card>
        <Box display='flex' gap={3} mb={3} >
          <Button variant='contained'
            startIcon={<QuickIcon />}
            sx={{
              flex: 1,
              fontWeight: 700,
              borderRadius: 1,
              height: '48px',
              textTransform: 'none',
            }}
          >Quick Order</Button>
          <Button variant='contained'
            startIcon={<TargetIcon />}
            sx={{
              flex: 1,
              fontWeight: 700,
              borderRadius: 1,
              height: '48px',
              textTransform: 'none',
            }}
          >Detailed Order</Button>
        </Box>
        <Box>
          <Typography color='primary' sx={{
            fontSize: '18px',
            fontWeight: 700,
            mb: 2,
          }}>Your Orders</Typography>
          {/* order white box */}
          <Box bgcolor='white' p={2} mb={2} borderRadius={2}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mb: 1,
            }}>
              <Box mr={2}>
                <FacebookCircularProgress />
              </Box>
              <Box mt={-1}>
                <Typography color='primary' sx={{
                  fontSize: '16px',
                  fontWeight: 700,
                  lineHeight: '19px',
                  mb: 1,
                }}>Order Number: 234567B</Typography>
                <Typography color='secondary' sx={{
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: '16px',
                }}>Confirmed</Typography>
              </Box>
            </Box>
            <Divider sx={{
              color: '#B2CCC0',
              width: 242,
              mx: 'auto',
            }} />
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              maxWidth: 242,
              mx: 'auto',
              mt: 1.5,
              px: 1,
            }}>
              {/* collection box */}
              <Box >
                <Typography color='primary' sx={{
                  fontSize: '16px',
                  fontWeight: 700,
                  lineHeight: '16px',
                  mb: 2,
                }}>Collection</Typography>
                <Typography color='secondary' sx={{
                  fontSize: '12px',
                  fontWeight: 500,
                  lineHeight: '12px',
                  mb: 1,
                }}>Date: 22-04-22</Typography>
                <Typography color='secondary' sx={{
                  fontSize: '12px',
                  fontWeight: 500,
                  lineHeight: '14px',
                }}>Time: 9:30 AM</Typography>
              </Box>
              <Divider orientation="vertical" flexItem sx={{
                color: '#B2CCC0',
                height: 41,
                mt: '12px',
              }} />
              {/* Delivery */}
              <Box >
                <Typography color='primary' sx={{
                  fontSize: '16px',
                  fontWeight: 700,
                  lineHeight: '16px',
                  mb: 2,
                }}>Delivery</Typography>
                <Typography color='secondary' sx={{
                  fontSize: '12px',
                  fontWeight: 500,
                  lineHeight: '12px',
                  mb: 1,
                }}>Date: 22-04-22</Typography>
                <Typography color='secondary' sx={{
                  fontSize: '12px',
                  fontWeight: 500,
                  lineHeight: '14px',
                }}>Time: 11:00 AM</Typography>
              </Box>
            </Box>
          </Box>
          <Box bgcolor='white' p={2} mb={2} borderRadius={2}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mb: 1,
            }}>
              <Box mr={2}>
                <FacebookCircularProgress />
              </Box>
              <Box mt={-1}>
                <Typography color='primary' sx={{
                  fontSize: '16px',
                  fontWeight: 700,
                  lineHeight: '19px',
                  mb: 1,
                }}>Order Number: 234567B</Typography>
                <Typography color='secondary' sx={{
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: '16px',
                }}>Confirmed</Typography>
              </Box>
            </Box>
            <Divider sx={{
              color: '#B2CCC0',
              width: 242,
              mx: 'auto',
            }} />
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              maxWidth: 242,
              mx: 'auto',
              mt: 1.5,
              px: 1,
            }}>
              {/* collection box */}
              <Box >
                <Typography color='primary' sx={{
                  fontSize: '16px',
                  fontWeight: 700,
                  lineHeight: '16px',
                  mb: 2,
                }}>Collection</Typography>
                <Typography color='secondary' sx={{
                  fontSize: '12px',
                  fontWeight: 500,
                  lineHeight: '12px',
                  mb: 1,
                }}>Date: 22-04-22</Typography>
                <Typography color='secondary' sx={{
                  fontSize: '12px',
                  fontWeight: 500,
                  lineHeight: '14px',
                }}>Time: 9:30 AM</Typography>
              </Box>
              <Divider orientation="vertical" flexItem sx={{
                color: '#B2CCC0',
                height: 41,
                mt: '12px',
              }} />
              {/* Delivery */}
              <Box >
                <Typography color='primary' sx={{
                  fontSize: '16px',
                  fontWeight: 700,
                  lineHeight: '16px',
                  mb: 2,
                }}>Delivery</Typography>
                <Typography color='secondary' sx={{
                  fontSize: '12px',
                  fontWeight: 500,
                  lineHeight: '12px',
                  mb: 1,
                }}>Date: 22-04-22</Typography>
                <Typography color='secondary' sx={{
                  fontSize: '12px',
                  fontWeight: 500,
                  lineHeight: '14px',
                }}>Time: 11:00 AM</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Bottom nav bar */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          position: 'sticky',
          mx: -3,
          mb: -1,
          left: 0,
          right: 0,
          bottom: 0,
          height: 80,
          background: 'white',
          borderRadius: '16px 16px 0 0',
          boxShadow: '0px -4px 4px rgba(63, 69, 66, 0.1)',
        }}>
          <HomeIcon />
          <QuickOrderIcon sx={{
            color: 'black',
          }} />
          <NotificationIcon />
          <ProfileIcon />
        </Box>
      </Container>
    </>
  );
}

function FacebookCircularProgress(props: any) {
  return (
    <Box sx={{
      display: 'inline-block',
      position: 'relative',
      width: 81,
      height: 81,
    }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: '#B2CCC0',
        }}
        size={81}
        thickness={7}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) => theme.palette.primary,
          animationDuration: '550ms',
          position: 'absolute',
          left: 1,
          top: 1,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
        size={79}
        thickness={6}
        {...props}
        value={60}
      />
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 1,
        left: 2,
        right: 0,
        bottom: 0,
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Typography color='primary' sx={{
            fontSize: '18px',
            fontWeight: 700,
          }}>60</Typography>
          <Typography color='primary' sx={{
            fontSize: '10px',
            fontWeight: 700,
          }}>%</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;