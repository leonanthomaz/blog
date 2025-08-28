// src/components/MarkdownContent.tsx
import { Box, Typography } from '@mui/material';
import CodeSnippet from '../../components/CodeSnippet';

interface MarkdownContentProps {
  content: string;
}

const MarkdownContent = ({ content }: MarkdownContentProps) => {
  const parts = content.split(/(```[\s\S]*?```|!\[[^\]]*\]\([^)]*\))/g);

  return (
    <Box className="blog-content">
      {parts.map((part, index) => {
        // Bloco de código
        if (part.startsWith('```')) {
          const codeMatch = part.match(/```(\w+)?\s*([\s\S]*?)```/);
          if (codeMatch) {
            const language = codeMatch[1] || 'text';
            const code = codeMatch[2].trim();
            return <CodeSnippet key={index} code={code} language={language} />;
          }
        }

        // Imagem Markdown
        const imgMatch = part.match(/!\[(.*?)\]\((.*?)\)/);
        if (imgMatch) {
          const altText = imgMatch[1];
          const src = imgMatch[2];
          return (
            <Box key={index} sx={{ mb: 3, textAlign: 'center' }}>
              <img
                src={src}
                alt={altText || 'Imagem do post'}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: 12,
                }}
              />
              {altText && (
                <Typography variant="caption" display="block" sx={{ mt: 1, color: 'text.secondary' }}>
                  {altText}
                </Typography>
              )}
            </Box>
          );
        }

        // Texto normal com quebras de linha (parágrafos)
        return (
          <div key={index}>
            {part.split('\n').map((line, i) =>
              line.trim() !== '' ? (
                <Typography key={i} paragraph sx={{ '&:last-of-type': { marginBottom: 0 } }}>
                  {line}
                </Typography>
              ) : null
            )}
          </div>
        );
      })}
    </Box>
  );
};

export default MarkdownContent;