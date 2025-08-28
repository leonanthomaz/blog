// src/pages/BlogPage/index.tsx
import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  InputAdornment,
  Stack
} from '@mui/material';
import { Search } from '@mui/icons-material';
import { blogPosts } from '../../data/blogPosts';
import CategoriesSidebar from '../../components/CategoriesSidebar';
import BlogCard from '../../components/BlogCard';
import { useScrollToTop } from '../../hooks/useScrollToTop';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Usa o hook para scrollar para o topo
  useScrollToTop();

  // Extrair categorias únicas
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  // Filtrar posts baseado na pesquisa e categoria
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Container maxWidth="lg" sx={{ py: 4, minHeight: '100vh' }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Blog & Artigos
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Compartilhando conhecimentos, experiências e projetos em Python.
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Buscar artigos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mb: 3 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
        <Box sx={{ width: { xs: '100%', md: '25%' } }}>
          <CategoriesSidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </Box>
        
        <Box sx={{ width: { xs: '100%', md: '75%' } }}>
          <Typography variant="h6" gutterBottom>
            {filteredPosts.length} artigo{filteredPosts.length !== 1 ? 's' : ''} encontrado{filteredPosts.length !== 1 ? 's' : ''}
          </Typography>
          
          {filteredPosts.length === 0 ? (
            <Box textAlign="center" py={4}>
              <Typography variant="h6" color="text.secondary">
                Nenhum artigo encontrado.
              </Typography>
            </Box>
          ) : (
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)'
                },
                gap: 3
              }}
            >
              {filteredPosts.map((post) => (
                <Box key={post.id}>
                  <BlogCard post={post} />
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Stack>
    </Container>
  );
};

export default BlogPage;