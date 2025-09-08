import {
  Container,
  Box,
  Stack,
  Typography,
  Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ErrorOutline } from '@mui/icons-material';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="md"
      sx={{
        py: 8,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      <Box sx={{ color: 'primary.main', mb: 3 }}>
        <ErrorOutline sx={{ fontSize: 80 }} />
      </Box>

      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
        404 - Página Não Encontrada
      </Typography>

      <Typography variant="h6" component="p" color="text.secondary" paragraph>
        A página que você está procurando não existe ou foi removida.
      </Typography>

      <Stack
        direction="column"
        alignItems="center"
        spacing={2}
        sx={{ mt: 4 }}
      >
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/')}
        >
          Ir para o Blog
        </Button>
        <Button
          variant="text"
          size="large"
          onClick={() => navigate('/')}
          sx={{ color: 'text.secondary' }}
        >
          Voltar para a Página Inicial
        </Button>
      </Stack>
    </Container>
  );
};

export default NotFoundPage;