// pages/AboutPage.tsx
import React from 'react';
import { Box, Typography, Button, Container, Avatar, Stack, useTheme, useMediaQuery } from '@mui/material';
import { Work, Code } from '@mui/icons-material';
import minhaFoto from '@/assets/img/foto-leonan.jpg';

const AboutPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ bgcolor: 'background.default', py: 8, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems="center">
          {/* Avatar */}
          <Box sx={{ width: { xs: '100%', md: '40%' }, display: 'flex', justifyContent: 'center' }}>
            <Avatar
              src={minhaFoto}
              sx={{
                width: isMobile ? 250 : 350,
                height: isMobile ? 250 : 350,
                boxShadow: 4,
                border: '4px solid',
                borderColor: 'primary.main',
              }}
            />
          </Box>

          {/* Conteúdo */}
          <Box sx={{ width: { xs: '100%', md: '60%' } }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', mb: 3, color: 'text.primary' }}>
              Sobre Mim
            </Typography>

            <Stack spacing={3}>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                Sou Leonan Thomaz, Desenvolvedor Fullstack com foco em Python e React. Minha paixão é criar soluções
                eficientes e escaláveis, simplificando processos complexos com código limpo e organizado.
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                Ao longo da minha jornada, participei de projetos reais, desde sistemas de e-commerce até chatbots e automação,
                sempre buscando aprender e evoluir. Acredito no poder do conhecimento compartilhado e na prática constante.
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.primary' }}>
                Este blog é o meu espaço para compartilhar experiências, insights e dicas sobre desenvolvimento,
                sempre com foco em Python, automação, IA e tecnologias web modernas.
              </Typography>

              {/* Skills */}
              <Stack direction="row" spacing={4} flexWrap="wrap">
                <Stack spacing={2} sx={{ minWidth: 150 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Work sx={{ color: 'primary.main', mr: 1 }} />
                    <Typography variant="body1" sx={{ fontWeight: 'medium', color: 'text.primary' }}>
                      Desenvolvedor Python
                    </Typography>
                  </Box>
                </Stack>

                <Stack spacing={2} sx={{ minWidth: 150 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Code sx={{ color: 'primary.main', mr: 1 }} />
                    <Typography variant="body1" sx={{ fontWeight: 'medium', color: 'text.primary' }}>
                      Engenheiro de Software
                    </Typography>
                  </Box>
                </Stack>
              </Stack>

              {/* Botão de portfolio */}
              <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{ width: 'fit-content', px: 4, py: 1.5, borderRadius: 2, fontWeight: 'bold' }}
                onClick={() => window.open('http://leonanthomaz.vercel.app', '_blank')}
              >
                Ver Portfolio Completo
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutPage;
