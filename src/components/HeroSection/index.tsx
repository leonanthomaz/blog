// src/components/HeroSection.tsx
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        borderRadius: 3,
        mb: 6,
      }}
    >
      <Container maxWidth="md">
        <Box textAlign="center">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 800,
              color: 'text.primary',
            }}
          >
            Blog do Leonan
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}
          >
            Compartilhando conhecimentos em Python, desenvolvimento web e tecnologia
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/blog')}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              borderRadius: 2,
            }}
          >
            Ver Artigos
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;