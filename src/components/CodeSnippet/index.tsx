import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { IconButton, Box } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useSnackbar } from 'notistack';
import { useState } from 'react';

interface CodeSnippetProps {
  code: string;
  language: string;
}

const CodeSnippet = ({ code, language }: CodeSnippetProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      enqueueSnackbar('Código copiado!', { variant: 'success' });
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      enqueueSnackbar('Falha ao copiar código', { variant: 'error' });
    }
  };

  return (
    <Box sx={{ position: 'relative', my: 2 }}>
      <IconButton
        onClick={handleCopy}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          zIndex: 10,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)'
          }
        }}
        size="small"
      >
        <ContentCopyIcon fontSize="small" />
      </IconButton>
      <SyntaxHighlighter
        language={language}
        style={materialDark}
        showLineNumbers
        customStyle={{ borderRadius: '4px', padding: '16px' }}
      >
        {code}
      </SyntaxHighlighter>
    </Box>
  );
};

export default CodeSnippet;