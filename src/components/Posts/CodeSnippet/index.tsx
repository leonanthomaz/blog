import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { IconButton, Box } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useSnackbar } from 'notistack';

interface CodeSnippetProps {
  code: string;
  language: string;
}

const myCustomTheme = {
  ...materialDark,
  comment: { color: '#bdbdbde6'},
};

const CodeSnippet = ({ code, language }: CodeSnippetProps) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      enqueueSnackbar('Código copiado!', { variant: 'success' });
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
          backgroundColor: 'rgba(189, 189, 189, 0.9)',
          '&:hover': {
            backgroundColor: 'rgba(202, 202, 202, 0.53)'
          }
        }}
        size="small"
      >
        <ContentCopyIcon fontSize="small" />
      </IconButton>
      <SyntaxHighlighter
        language={language}
        style={myCustomTheme}
        showLineNumbers
        customStyle={{ borderRadius: '4px', padding: '16px'}}
      >
        {code}
      </SyntaxHighlighter>
    </Box>
  );
};

export default CodeSnippet;