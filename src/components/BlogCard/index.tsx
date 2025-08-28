// src/components/BlogCard.tsx
import { Card, CardContent, Chip, Typography, Box } from '@mui/material';
import { CalendarToday, Schedule, ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import type { BlogPost } from '../../data/blogPosts';
import { calculateReadTime } from '../../utils/readTime';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${post.slug}`);
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6,
        },
      }}
      onClick={handleClick}
    >
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Chip
          label={post.category}
          size="small"
          color="primary"
          sx={{ mb: 1, width: 'fit-content' }}
        />
        <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {post.subtitle}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            mt: 'auto',
            pt: 2,
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CalendarToday sx={{ fontSize: 16, color: 'text.secondary' }} />
            <Typography variant="caption" color="text.secondary">
              {new Date(post.date).toLocaleDateString('pt-BR')}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Schedule sx={{ fontSize: 16, color: 'text.secondary' }} />
            <Typography variant="caption" color="text.secondary">
              {calculateReadTime(post.content)}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
          <Typography variant="caption" color="primary" sx={{ fontWeight: 'bold' }}>
            Ler artigo
          </Typography>
          <ArrowForward sx={{ fontSize: 14, color: 'primary.main' }} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default BlogCard;