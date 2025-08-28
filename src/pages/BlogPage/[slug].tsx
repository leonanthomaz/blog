import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Chip, Divider } from '@mui/material';
import { CalendarToday, Schedule } from '@mui/icons-material';
import NotFoundPage from '../NotFoundPage';
import { blogPosts } from '../../data/blogPosts';
import CodeSnippet from '../../components/CodeSnippet';
import { useScrollToTop } from '../../hooks/useScrollToTop';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  // Usa o hook para scrollar para o topo
  useScrollToTop();

  if (!post) return <NotFoundPage />;

  const renderContent = (content: string) => {
    const parts = content.split(/(```[\s\S]*?```)/g);

    return parts.map((part, index) => {
      // bloco de código
      if (part.startsWith('```')) {
        const codeMatch = part.match(/```(\w+)?\s*([\s\S]*?)```/);
        if (codeMatch) {
          const language = codeMatch[1] || 'text';
          const code = codeMatch[2].trim();
          return <CodeSnippet key={index} code={code} language={language} />;
        }
      }

      // imagem Markdown
      const imgMatch = part.match(/!\[.*\]\((.*)\)/);
      if (imgMatch) {
        return (
          <Box key={index} sx={{ mb: 3, textAlign: 'center' }}>
            <img
              src={imgMatch[1]}
              alt={`Imagem do post: ${post.title}`}
              style={{ width: '80%', maxWidth: 600, borderRadius: 8 }}
            />
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
              Descrição da imagem do post
            </Typography>
          </Box>
        );
      }

      // texto normal com quebras de linha
      return part.split('\n').map((line, i) => (
        <Typography key={`${index}-${i}`} paragraph>
          {line}
        </Typography>
      ));
    });
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Chip label={post.category} color="primary" sx={{ mb: 2 }} />

      <Typography variant="h3" component="h1" gutterBottom>
        {post.title}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
          <CalendarToday sx={{ fontSize: 18, mr: 0.5 }} />
          <Typography variant="body2">
            {new Date(post.date).toLocaleDateString('pt-BR')}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Schedule sx={{ fontSize: 18, mr: 0.5 }} />
          <Typography variant="body2">{post.readTime}</Typography>
        </Box>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Renderiza a imagem principal do post como banner com descrição à esquerda */}
      {post.image && (
        <Box
          sx={{
            mb: 3,
            position: 'relative',
            width: '100%',
            maxHeight: 250, // altura mínima do banner
            overflow: 'hidden',
            borderRadius: 2,
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
          <Typography
            variant="caption"
            sx={{
              position: 'absolute',
              bottom: 8,
              left: 16,
              color: '#fff', // se a imagem for escura ou clara, dá pra ajustar
              backgroundColor: 'rgba(0,0,0,0.5)', // fundo semitransparente pra legibilidade
              padding: '2px 6px',
              borderRadius: 1,
            }}
          >
            Descrição da imagem principal do post
          </Typography>
        </Box>
      )}


      {/* Renderiza o conteúdo com código, imagens e texto */}
      {renderContent(post.content)}

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Tags:
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {post.tags.map(tag => (
            <Chip key={tag} label={tag} variant="outlined" size="small" />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default BlogPostPage;
