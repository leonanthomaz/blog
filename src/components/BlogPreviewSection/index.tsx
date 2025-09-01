// src/components/BlogPreviewSection.tsx
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { Article } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';
import BlogCard from '../BlogCard';

const BlogPreviewSection = () => {
  const navigate = useNavigate();
  
  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 3);
  const displayPosts = featuredPosts.length > 0 ? featuredPosts : blogPosts.slice(0, 3);

  return (
    <Box
      id="blog-preview"
      sx={{
        py: 8,
        bgcolor: 'grey.50',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center">
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            {featuredPosts.length > 0 ? 'Artigos em Destaque' : 'Artigos Recentes'}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              textAlign: 'center',
            }}
          >
            {featuredPosts.length > 0
              ? 'Confira meus artigos mais relevantes sobre desenvolvimento Python'
              : 'Confira meus artigos mais recentes sobre desenvolvimento Python'}
          </Typography>

          <Stack 
            direction={{ xs: 'column', md: 'row' }} 
            spacing={3} 
            sx={{ 
              width: '100%',
              justifyContent: 'center'
            }}
          >
            {displayPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
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
              fontWeight: 'bold',
            }}
          >
            Ver Todos os Artigos
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default BlogPreviewSection;