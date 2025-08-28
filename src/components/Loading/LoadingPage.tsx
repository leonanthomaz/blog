import React from 'react';
import { Box, CircularProgress, Typography, keyframes, styled } from '@mui/material';
import { 
  Computer, 
  Mouse, 
  Keyboard, 
  Wifi, 
  Language, 
  Article,
  Code,
  Cloud
} from '@mui/icons-material';

// Animação de digitação
const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

// Animação de piscar do cursor
const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

// Animação de flutuação
const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

// Animação de pulso
const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
`;

// Animação de conexão de rede
const networkPulse = keyframes`
  0% { transform: scale(0.5); opacity: 0; }
  50% { transform: scale(1.2); opacity: 0.5; }
  100% { transform: scale(1); opacity: 0; }
`;

// Componente de cursor de digitação
const TypingCursor = styled('span')({
  display: 'inline-block',
  marginLeft: '2px',
  width: '2px',
  height: '1.2em',
  backgroundColor: 'primary.main',
  animation: `${blink} 1s infinite`,
  verticalAlign: 'middle'
});

// Componente de texto com efeito de digitação
const TypingText = styled(Typography)({
  overflow: 'hidden',
  borderRight: '2px solid',
  borderColor: 'primary.main',
  whiteSpace: 'nowrap',
  margin: '0 auto',
  animation: `${typing} 3.5s steps(40, end), ${blink} 1s step-end infinite`,
});

// Componente de ícone flutuante
const FloatingIcon = styled(Box)(({ theme }) => ({
  position: 'absolute',
  color: theme.palette.primary.main,
  animation: `${float} 3s ease-in-out infinite`,
  opacity: 0.7,
  zIndex: 1,
}));

// Componente de partícula de rede
const NetworkParticle = styled(Box)(({ theme }) => ({
  position: 'absolute',
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  opacity: 0,
  animation: `${networkPulse} 2s infinite`,
}));

const LoadingPage: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'background.default',
        zIndex: 1300,
        overflow: 'hidden',
      }}
    >
      {/* Efeito de partículas de rede */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: 0,
          opacity: 0.3
        }}
      >
        {[...Array(12)].map((_, i) => (
          <NetworkParticle
            key={i}
            sx={{
              width: Math.random() * 40 + 10,
              height: Math.random() * 40 + 10,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </Box>

      {/* Ícones flutuantes temáticos */}
      <FloatingIcon sx={{ top: '15%', left: '15%', animationDelay: '0.5s' }}>
        <Computer sx={{ fontSize: 40 }} />
      </FloatingIcon>
      
      <FloatingIcon sx={{ top: '20%', right: '20%', animationDelay: '1s' }}>
        <Wifi sx={{ fontSize: 36 }} />
      </FloatingIcon>
      
      <FloatingIcon sx={{ bottom: '25%', left: '20%', animationDelay: '1.5s' }}>
        <Language sx={{ fontSize: 38 }} />
      </FloatingIcon>
      
      <FloatingIcon sx={{ bottom: '15%', right: '15%', animationDelay: '2s' }}>
        <Article sx={{ fontSize: 42 }} />
      </FloatingIcon>
      
      <FloatingIcon sx={{ top: '30%', left: '30%', animationDelay: '0.8s' }}>
        <Mouse sx={{ fontSize: 32 }} />
      </FloatingIcon>
      
      <FloatingIcon sx={{ top: '40%', right: '30%', animationDelay: '1.2s' }}>
        <Code sx={{ fontSize: 36 }} />
      </FloatingIcon>
      
      <FloatingIcon sx={{ bottom: '30%', right: '30%', animationDelay: '1.8s' }}>
        <Keyboard sx={{ fontSize: 34 }} />
      </FloatingIcon>
      
      <FloatingIcon sx={{ bottom: '40%', left: '30%', animationDelay: '2.2s' }}>
        <Cloud sx={{ fontSize: 40 }} />
      </FloatingIcon>

      {/* Container principal */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 2,
          backgroundColor: 'background.paper',
          borderRadius: 4,
          p: 6,
          boxShadow: 8,
          maxWidth: '90%',
          width: 500
        }}
      >
        {/* Monitor de computador estilizado */}
        <Box
          sx={{
            position: 'relative',
            width: 120,
            height: 100,
            mb: 4,
            backgroundColor: 'grey.300',
            borderRadius: '8px 8px 0 0',
            border: '2px solid',
            borderColor: 'grey.400',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -20,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 40,
              height: 20,
              backgroundColor: 'grey.400',
              borderRadius: '0 0 4px 4px'
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              bottom: -35,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 60,
              height: 4,
              backgroundColor: 'grey.500',
              borderRadius: '2px'
            }
          }}
        >
          {/* Tela do computador com conteúdo de blog */}
          <Box
            sx={{
              width: '100%',
              height: '100%',
              backgroundColor: 'primary.main',
              borderRadius: '6px 6px 0 0',
              opacity: 0.8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: `${pulse} 2s infinite`,
            }}
          >
            <Article sx={{ color: 'white', fontSize: 40 }} />
          </Box>
        </Box>

        {/* Texto com efeito de digitação */}
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <TypingText variant="h6" sx={{ fontWeight: 500 }}>
            Carregando conteúdo do blog
          </TypingText>
        </Box>

        {/* Circular Progress personalizado */}
        <Box sx={{ position: 'relative', display: 'inline-flex', mb: 3 }}>
          <CircularProgress 
            size={60}
            thickness={4}
            disableShrink
            sx={{
              color: 'primary.main',
              '& .MuiCircularProgress-circle': {
                strokeLinecap: 'round'
              }
            }}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Wifi sx={{ fontSize: 20, color: 'primary.main' }} />
          </Box>
        </Box>

        {/* Mensagem adicional */}
        <Typography 
          variant="body2" 
          sx={{ 
            color: 'text.secondary',
            textAlign: 'center',
            maxWidth: 300
          }}
        >
          Carregando...
          <TypingCursor />
        </Typography>
      </Box>
    </Box>
  );
};

export default LoadingPage;