// src/styles/globalStyles.tsx
import { GlobalStyles } from '@mui/material';
import { alpha } from '@mui/material/styles';

export const GlobalCss = () => (
  <GlobalStyles
    styles={() => ({
      '*, *::before, *::after': {
        boxSizing: 'border-box',
      },
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        margin: 0,
        padding: 0,
        backgroundColor: '#fafafa',
        fontFamily: "'Inter', sans-serif",
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        lineHeight: 1.6,
        color: '#1f2937',
      },
      a: {
        textDecoration: 'none',
        color: 'inherit',
        transition: 'color 0.2s ease',
        '&:hover': {
          color: '#2563eb',
        },
      },
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
      img: {
        maxWidth: '100%',
        display: 'block',
        borderRadius: '8px',
      },
      'h1, h2, h3, h4, h5, h6': {
        marginTop: '2rem',
        marginBottom: '1rem',
        fontWeight: 600,
      },
      'p, li': {
        marginBottom: '1rem',
      },
      'blockquote': {
        borderLeft: '4px solid #2563eb',
        paddingLeft: '1.5rem',
        marginLeft: 0,
        fontStyle: 'italic',
        color: '#6b7280',
        backgroundColor: alpha('#2563eb', 0.03),
        padding: '1.5rem',
        borderRadius: '0 12px 12px 0',
        margin: '2rem 0',
      },
      '::selection': {
        backgroundColor: alpha('#2563eb', 0.2),
        color: '#1f2937',
      },
      '::-webkit-scrollbar': {
        width: '8px',
      },
      '::-webkit-scrollbar-track': {
        background: '#f1f1f1',
        borderRadius: '4px',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#c1c1c1',
        borderRadius: '4px',
        '&:hover': {
          background: '#a8a8a8',
        },
      },
      '.syntax-highlighter': {
        borderRadius: '12px !important',
        padding: '1.5rem !important',
        margin: '1.5rem 0 !important',
        fontSize: '0.9rem !important',
      },
      '.blog-content': {
        '& img': {
          borderRadius: '12px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          margin: '2rem 0',
        },
        '& h2': {
          paddingBottom: '0.5rem',
          borderBottom: '2px solid #e5e7eb',
          marginTop: '3rem',
        },
        '& h3': {
          marginTop: '2.5rem',
        },
        '& ul, & ol': {
          paddingLeft: '1.5rem',
          marginBottom: '1.5rem',
        },
        '& li': {
          marginBottom: '0.5rem',
        },
        '& table': {
          width: '100%',
          borderCollapse: 'collapse',
          margin: '1.5rem 0',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        },
        '& th, & td': {
          padding: '0.75rem',
          border: '1px solid #e5e7eb',
        },
        '& th': {
          backgroundColor: '#f9fafb',
          fontWeight: 600,
        },
        '& tr:nth-of-type(even)': {
          backgroundColor: '#f9fafb',
        },
      },
    })}
  />
);