// src/pages/BlogPostPage/index.tsx
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Chip,
  Divider,
  Button
} from '@mui/material';
import { CalendarToday, Schedule, ArrowBack } from '@mui/icons-material';
import NotFoundPage from '../NotFoundPage';
import { blogPosts } from '../../data/blogPosts';
import { calculateReadTime } from '../../utils/readTime'; // Importa a nova função
import { useScrollToTop } from '../../hooks/useScrollToTop';
import MarkdownContent from './MarkdownContent';
import Navbar from '../../components/Navbar';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);

  useScrollToTop();

  if (!post) {
    return <NotFoundPage />;
  }

  const readTime = calculateReadTime(post.content);

  return (
    <>
      <Navbar/>
      <Container maxWidth="md" sx={{ py: 4, minHeight: '100vh' }}>
        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button
            onClick={() => navigate('/blog')}
            startIcon={<ArrowBack />}
            sx={{
              textTransform: 'none',
              color: 'text.secondary',
              '&:hover': {
                backgroundColor: 'transparent',
                textDecoration: 'underline'
              },
              p: 0,
            }}
          >
            Voltar para o Blog
          </Button>
          <Typography variant="body2" color="text.secondary">
            /
          </Typography>
          <Chip label={post.category} color="primary" variant="filled" size="small" />
        </Box>

        <Typography variant="h3" component="h1" gutterBottom>
          {post.title}
        </Typography>

        <Typography variant="subtitle1" color="text.secondary" paragraph>
          {post.subtitle}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
            <CalendarToday sx={{ fontSize: 18, mr: 0.5 }} />
            <Typography variant="body2">
              {new Date(post.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
            <Schedule sx={{ fontSize: 18, mr: 0.5 }} />
            <Typography variant="body2">{readTime}</Typography>
          </Box>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {post.image && (
          <Box
            sx={{
              mb: 4,
              position: 'relative',
              width: '100%',
              maxHeight: 400,
              overflow: 'hidden',
              borderRadius: 3,
              boxShadow: 2,
              border: theme => `1px solid ${theme.palette.divider}`,
            }}
          >
            <img
              src={post.image}
              alt={`Imagem principal: ${post.title}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        )}

        <MarkdownContent content={post.content} />

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Tags:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {post.tags.map(tag => (
              <Chip key={tag} label={tag} color="default" variant="outlined" size="small" />
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default BlogPostPage;