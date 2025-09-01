// src/components/Footer.tsx
import {
  Box,
  Container,
  Stack,
  Typography,
  IconButton
} from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        bgcolor: 'background.paper',
        color: 'text.primary',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          justifyContent="space-between"
          alignItems={{ xs: 'center', md: 'flex-start' }}
        >
          <Stack spacing={2} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Leonan Thomaz
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }} color="text.secondary">
              Desenvolvedor Python
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }} color="text.secondary">
              Compartilhando conhecimento e ajudando a comunidade de desenvolvedores.
            </Typography>
          </Stack>

          <Stack spacing={2} alignItems={{ xs: 'center', md: 'flex-end' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Conecte-se Comigo
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton color="primary">
                <GitHub />
              </IconButton>
              <IconButton color="primary">
                <LinkedIn />
              </IconButton>
              <IconButton color="primary">
                <Email />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>

        <Box sx={{ borderTop: '1px solid', borderColor: 'divider', mt: 4, pt: 3 }}>
          <Typography variant="body2" align="center" sx={{ opacity: 0.6 }} color="text.secondary">
            © {new Date().getFullYear()} Leonan Thomaz. Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;