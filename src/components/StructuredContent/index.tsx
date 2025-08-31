// src/components/StructuredContent.tsx
import { Box, Typography } from '@mui/material';
import { parseMarkdown, type MarkdownElement } from '../../utils/markdownParser';
import CodeSnippet from '../CodeSnippet';
import type { JSX } from 'react';

interface StructuredContentProps {
  content: string;
}

const StructuredContent = ({ content }: StructuredContentProps) => {
  const elements: MarkdownElement[] = parseMarkdown(content);

  return (
    <Box>
      {elements.map((el, idx) => {
        switch (el.type) {
          case 'heading':
            const Tag = `h${el.level}` as keyof JSX.IntrinsicElements;
            return (
                <Typography
                    key={idx}
                    component={Tag}
                    gutterBottom
                    sx={{
                        fontWeight: 'bold', // deixa negrito
                        color: el.level === 1 ? 'primary.main' : 'text.primary', // título principal colorido
                        mt: el.level === 1 ? 3 : 2, // margem maior pro h1
                        mb: 1,
                    }}
                    >
                    {el.text}
                </Typography>
            );
          case 'paragraph':
            return (
              <Typography key={idx} paragraph>
                {el.text}
              </Typography>
            );
          case 'code':
            return <CodeSnippet key={idx} code={el.code} language={el.language} />;
          case 'image':
            return (
              <Box key={idx} sx={{ mb: 3, textAlign: 'center' }}>
                <img
                  src={el.src}
                  alt={el.alt || 'Imagem do post'}
                  style={{
                    maxWidth: '600px',
                    height: '200px',
                    objectFit: 'cover', // mantém proporção cortando se necessário
                    borderRadius: 12,
                  }}
                />
                {el.alt && (
                  <Typography variant="caption" display="block" sx={{ mt: 1, color: 'text.secondary' }}>
                    {el.alt}
                  </Typography>
                )}
              </Box>
            );
          case 'list':
            return el.ordered ? (
              <ol key={idx}>
                {el.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ol>
            ) : (
              <ul key={idx}>
                {el.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </Box>
  );
};

export default StructuredContent;
