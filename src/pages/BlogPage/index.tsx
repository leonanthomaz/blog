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
import Layout from '../../components/Layout';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useScrollToTop();

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = !searchTerm ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
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
            <Box mb={3}>
              <Typography variant="h6">
                {filteredPosts.length} artigo{filteredPosts.length !== 1 ? 's' : ''} encontrado{filteredPosts.length !== 1 ? 's' : ''}
              </Typography>
            </Box>
            
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
                  <BlogCard key={post.id} post={post} />
                ))}
              </Box>
            )}
          </Box>
        </Stack>
      </Container>
    </Layout>
  );
};

export default BlogPage;