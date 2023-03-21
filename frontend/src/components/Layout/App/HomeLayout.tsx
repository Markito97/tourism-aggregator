import { Box, Container, styled } from '@mui/system';
import { Navbar } from './Navbar';
import HeaderBackImg from '@assets/Rectangle.jpg';
import { HeaderTitle } from './HeaderTitle';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Footer } from './Footer';

const Header = styled(Box)({
  height: '100vh',
  display: 'block',
  background: `linear-gradient(
    181.06deg,
    rgba(0, 0, 0, 0.2) 0.91%,
    rgba(255, 255, 255, 0) 116.71%,
    rgba(255, 255, 255, 0) 116.72%
  ),
  url(${HeaderBackImg}) no-repeat center top / cover`,
});

const HeaderInactive = styled(Box)({
  background: 'rgba(45, 45, 45, 1)',
});

const Main = styled(Box)({
  flex: '1 1 auto',
  width: '100%',
});

export const HomeLayout = () => {
  const location = useLocation();
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    if (location.pathname !== '/') {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  }, [location]);

  return (
    <Box>
      {isShow ? (
        <Header component="header">
          <Container maxWidth="desktop">
            <Navbar />
            <HeaderTitle />
          </Container>
        </Header>
      ) : (
        <HeaderInactive>
          <Container maxWidth="desktop">
            <Navbar />
          </Container>
        </HeaderInactive>
      )}

      <Main>
        {isShow ? (
          <Outlet />
        ) : (
          <Container maxWidth="desktop">
            <Outlet />
          </Container>
        )}
      </Main>

      <footer>
        <Footer />
      </footer>
    </Box>
  );
};
