// src/pages/HomePage/index.tsx
import { Box } from '@mui/material';
import HeroSection from '../../components/HeroSection';
import AboutSection from '../../components/AboutSection';
import BlogPreviewSection from '../../components/BlogPreviewSection';
import Footer from '../../components/Footer';

const HomePage = () => {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <HeroSection />
      <AboutSection />
      <BlogPreviewSection />
      <Footer />
    </Box>
  );
};

export default HomePage;