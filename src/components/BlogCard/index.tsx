import { Card, CardContent, Chip, Typography, Box } from '@mui/material';
import { CalendarToday, Schedule } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import type { BlogPost } from '../../data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('Navigating to:', `/blog/${post.slug}`);
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
          boxShadow: 6
        }
      }}
      onClick={handleClick}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Chip 
          label={post.category} 
          size="small" 
          color="primary" 
          sx={{ mb: 1 }}
        />
        <Typography variant="h6" component="h2" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {post.excerpt}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto', pt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <CalendarToday sx={{ fontSize: 16, mr: 0.5 }} />
            <Typography variant="caption">
              {new Date(post.date).toLocaleDateString('pt-BR')}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Schedule sx={{ fontSize: 16, mr: 0.5 }} />
            <Typography variant="caption">
              {post.readTime}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BlogCard;