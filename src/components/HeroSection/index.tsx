import { Box, Typography, Button, Stack, IconButton, Container, useMediaQuery, useTheme } from '@mui/material';
import { Article, GitHub, LinkedIn, Email, ArrowDownward, Instagram } from '@mui/icons-material';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={3} alignItems="center">
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 'bold',
              fontSize: isMobile ? '2.5rem' : '4rem',
              color: 'white',
            }}
          >
            Leonan Thomaz
          </Typography>

          <Typography
            variant="h5"
            sx={{
              opacity: 0.9,
              fontStyle: 'italic',
              color: 'white',
            }}
          >
            Bem vindo ao meu blog!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              opacity: 0.8,
              fontSize: '1.1rem',
              maxWidth: '600px',
              color: 'white',
            }}
          >
            Compartilhando conhecimento através de artigos técnicos, tutoriais e experiências no mundo do desenvolvimento Python.
          </Typography>

          {/* Redes Sociais */}
          <Stack direction="row" spacing={2}>
            <IconButton
              component="a"
              href="https://github.com/leonanthomaz"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                border: '1px solid rgba(65, 65, 65, 0.81)',
                color: 'white',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(252, 252, 252, 1)',
                  borderColor: 'white',
                },
              }}
            >
              <GitHub />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.linkedin.com/in/leonanthomaz"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                border: '1px solid rgba(65, 65, 65, 0.81)',
                color: 'white',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(252, 252, 252, 1)',
                  borderColor: 'white',
                },
              }}
            >
              <LinkedIn />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.instagram.com/leonan.thomaz"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                border: '1px solid rgba(65, 65, 65, 0.81)',
                color: 'white',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(252, 252, 252, 1)',
                  borderColor: 'white',
                },
              }}
            >
              <Instagram />
            </IconButton>

            <IconButton
              component="a"
              href="mailto:leonan.thomaz@gmail.com"
              sx={{
                border: '1px solid rgba(65, 65, 65, 0.81)',
                color: 'white',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(252, 252, 252, 1)',
                  borderColor: 'white',
                },
              }}
            >
              <Email />
            </IconButton>
          </Stack>

          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={<Article />}
            onClick={() => navigate('/blog')}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontWeight: 'bold',
              fontSize: '1.1rem',
              backgroundColor: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
                boxShadow: 4,
              },
              transition: 'all 0.3s ease',
            }}
          >
            Ver Artigos
          </Button>
        </Stack>

        {/* Scroll Down Indicator */}
        <ScrollLink
          to="about"
          smooth={true}
          duration={800}
          spy={true}
          style={{ textDecoration: 'none' }}
        >
          <Box
            sx={{
              position: 'absolute',
              bottom: 40,
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'bounce 2s infinite',
              cursor: 'pointer',
              color: 'white',
              '@keyframes bounce': {
                '0%, 20%, 50%, 80%, 100%': {
                  transform: 'translateX(-50%) translateY(0)',
                },
                '40%': {
                  transform: 'translateX(-50%) translateY(-10px)',
                },
                '60%': {
                  transform: 'translateX(-50%) translateY(-5px)',
                },
              },
            }}
          >
            <ArrowDownward sx={{ fontSize: 40, opacity: 0.7, color: 'white' }} />
          </Box>
        </ScrollLink>
      </Container>
    </Box>
  );
};

export default HeroSection;
