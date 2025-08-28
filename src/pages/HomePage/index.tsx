// src/pages/HomePage/index.tsx
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Avatar,
  IconButton,
  Paper,
  useTheme,
  useMediaQuery,
  Stack,
  Chip
} from '@mui/material';
import { 
  Article,
  GitHub,
  LinkedIn,
  Email,
  Work,
  School,
  Code,
  ArrowDownward,
  CalendarToday,
  Schedule
} from '@mui/icons-material';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import minhaFoto from '@/assets/img/foto-leonan.jpg';
import { blogPosts, type BlogPost } from '../../data/blogPosts';

const HomePage = () => {    
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  // Pegar artigos em destaque (com featured: true) ou os 3 mais recentes
  const featuredPosts = blogPosts
    .filter(post => post.featured)
    .slice(0, 3);
  
  // Se não tiver artigos destacados, pega os 3 mais recentes
  const displayPosts = featuredPosts.length > 0 
    ? featuredPosts 
    : blogPosts.slice(0, 3);

  // Componente para o card do artigo
  const ArticleCard = ({ post }: { post: BlogPost }) => (
    <Paper
      elevation={2}
      sx={{
        p: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6,
          cursor: 'pointer'
        }
      }}
      onClick={() => navigate(`/blog/${post.slug}`)}
    >
      <Stack spacing={2} sx={{ height: '100%' }}>
        {/* Categoria */}
        <Chip 
          label={post.category} 
          size="small" 
          color="primary" 
          sx={{ width: 'fit-content' }}
        />
        
        {/* Ícone e título */}
        <Box sx={{ color: 'primary.main' }}>
          <Article fontSize="large" />
        </Box>
        
        <Typography variant="h6" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
          {post.title}
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
          {post.subtitle}
        </Typography>
        
        {/* Data e tempo de leitura */}
        <Stack spacing={1} sx={{ mt: 'auto', pt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CalendarToday sx={{ fontSize: 16, color: 'text.secondary' }} />
            <Typography variant="caption" color="text.secondary">
              {new Date(post.date).toLocaleDateString('pt-BR')}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Schedule sx={{ fontSize: 16, color: 'text.secondary' }} />
            <Typography variant="caption" color="text.secondary">
              {post.readTime}
            </Typography>
          </Box>
        </Stack>
        
        <Typography variant="caption" color="primary" sx={{ mt: 1 }}>
          Ler artigo →
        </Typography>
      </Stack>
    </Paper>
  );

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Section com imagem de fundo */}
      <Box 
        id="home"
        sx={{ 
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={3} alignItems="center">
            <Typography 
              variant="h1" 
              component="h1" 
              sx={{ 
                fontWeight: 'bold',
                fontSize: isMobile ? '2.5rem' : '4rem'
              }}
            >
              Leonan Thomaz
            </Typography>
            
            <Typography 
              variant="h5" 
              sx={{ 
                opacity: 0.9,
                fontStyle: 'italic'
              }}
            >
              Bem vindo ao meu blog!
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                opacity: 0.8,
                fontSize: '1.1rem',
                maxWidth: '600px'
              }}
            >
              Compartilhando conhecimento através de artigos técnicos, tutoriais e experiências no mundo do desenvolvimento Python.
            </Typography>
            
            {/* Redes Sociais */}
            <Stack direction="row" spacing={2}>
              <IconButton 
                color="inherit" 
                sx={{ 
                  border: '1px solid',
                  borderColor: 'rgba(255,255,255,0.3)',
                  '&:hover': { 
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <GitHub />
              </IconButton>
              <IconButton 
                color="inherit" 
                sx={{ 
                  border: '1px solid',
                  borderColor: 'rgba(255,255,255,0.3)',
                  '&:hover': { 
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton 
                color="inherit" 
                sx={{ 
                  border: '1px solid',
                  borderColor: 'rgba(255,255,255,0.3)',
                  '&:hover': { 
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
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
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 4
                },
                transition: 'all 0.3s ease'
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
                '@keyframes bounce': {
                  '0%, 20%, 50%, 80%, 100%': {
                    transform: 'translateX(-50%) translateY(0)'
                  },
                  '40%': {
                    transform: 'translateX(-50%) translateY(-10px)'
                  },
                  '60%': {
                    transform: 'translateX(-50%) translateY(-5px)'
                  }
                }
              }}
            >
              <ArrowDownward sx={{ fontSize: 40, opacity: 0.7 }} />
            </Box>
          </ScrollLink>
        </Container>
      </Box>

      {/* Sobre Mim Section */}
      <Box 
        id="about"
        sx={{ 
          py: 8,
          bgcolor: 'background.default'
        }}
      >
        <Container maxWidth="lg">
          <Stack 
            direction={{ xs: 'column', md: 'row' }} 
            spacing={6} 
            alignItems="center"
          >
            <Box sx={{ width: { xs: '100%', md: '40%' }, display: 'flex', justifyContent: 'center' }}>
              <Avatar
                src={minhaFoto}
                sx={{
                  width: isMobile ? 250 : 350,
                  height: isMobile ? 250 : 350,
                  boxShadow: 4,
                  border: '4px solid',
                  borderColor: 'primary.main'
                }}
              />
            </Box>
            
            <Box sx={{ width: { xs: '100%', md: '60%' } }}>
              <Typography 
                variant="h3" 
                gutterBottom 
                sx={{ 
                  fontWeight: 'bold',
                  mb: 3
                }}
              >
                Sobre Mim
              </Typography>
              
              <Stack spacing={3}>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Sou um desenvolvedor Python apaixonado por compartilhar conhecimento e ajudar 
                  outros desenvolvedores a crescerem em sua jornada. Com experiência em projetos 
                  desafiadores, acredito no poder da comunidade e do aprendizado contínuo.
                </Typography>
                
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Neste blog, compartilho tutoriais, dicas e experiências reais do dia a dia 
                  do desenvolvimento, sempre com foco em Python e tecnologias relacionadas.
                </Typography>
                
                <Stack direction="row" spacing={4} flexWrap="wrap">
                  <Stack spacing={2} sx={{ minWidth: 150 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Work sx={{ color: 'primary.main', mr: 1 }} />
                      <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                        Desenvolvedor Python
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <School sx={{ color: 'primary.main', mr: 1 }} />
                      <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                        Mentor & Educador
                      </Typography>
                    </Box>
                  </Stack>
                  
                  <Stack spacing={2} sx={{ minWidth: 150 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Code sx={{ color: 'primary.main', mr: 1 }} />
                      <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                        Open Source
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Article sx={{ color: 'primary.main', mr: 1 }} />
                      <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                        Technical Writer
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
                
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  sx={{
                    width: 'fit-content',
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 'bold'
                  }}
                  onClick={() => window.open('http://leonanthomaz.vercel.app', '_blank')}
                >
                  Ver Portfolio Completo
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Blog Preview Section */}
      <Box 
        id="blog-preview"
        sx={{ 
          py: 8,
          bgcolor: 'grey.50'
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={4} alignItems="center">
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              {featuredPosts.length > 0 ? 'Artigos em Destaque' : 'Artigos Recentes'}
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.secondary',
                maxWidth: '600px',
                textAlign: 'center'
              }}
            >
              {featuredPosts.length > 0 
                ? 'Confira meus artigos mais relevantes sobre desenvolvimento Python'
                : 'Confira meus artigos mais recentes sobre desenvolvimento Python'
              }
            </Typography>
            
            <Stack 
              direction={{ xs: 'column', md: 'row' }} 
              spacing={3} 
              sx={{ width: '100%' }}
            >
              {displayPosts.map((post) => (
                <ArticleCard key={post.id} post={post} />
              ))}
            </Stack>
            
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<Article />}
              onClick={() => navigate('/blog')}
              sx={{
                px: 6,
                py: 1.5,
                borderRadius: 2,
                fontWeight: 'bold'
              }}
            >
              Ver Todos os Artigos
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Footer */}
      <Box 
        component="footer"
        sx={{ 
          py: 6,
          bgcolor: 'grey.900',
          color: 'white'
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
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Desenvolvedor Python & Mentor
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                Compartilhando conhecimento e ajudando a comunidade de desenvolvedores.
              </Typography>
            </Stack>
            
            <Stack spacing={2} alignItems={{ xs: 'center', md: 'flex-end' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Conecte-se Comigo
              </Typography>
              <Stack direction="row" spacing={1}>
                <IconButton color="inherit" sx={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <GitHub />
                </IconButton>
                <IconButton color="inherit" sx={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <LinkedIn />
                </IconButton>
                <IconButton color="inherit" sx={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <Email />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
          
          <Box sx={{ borderTop: '1px solid', borderColor: 'grey.800', mt: 4, pt: 3 }}>
            <Typography variant="body2" align="center" sx={{ opacity: 0.6 }}>
              © {new Date().getFullYear()} Leonan Thomaz. Todos os direitos reservados.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;