// src/styles/muiTheme.ts
import { createTheme, alpha } from '@mui/material/styles';

export const useMuiTheme = () => {
  return createTheme({
    typography: {
      fontFamily: "'Inter', sans-serif",
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      
      h1: {
        fontWeight: 800,
        fontSize: '3.5rem',
        fontFamily: "'Playfair Display', serif",
        lineHeight: 1.2,
        letterSpacing: '-0.02em',
      },
      h2: {
        fontWeight: 700,
        fontSize: '2.8rem',
        fontFamily: "'Playfair Display', serif",
        lineHeight: 1.3,
        letterSpacing: '-0.01em',
      },
      h3: {
        fontWeight: 600,
        fontSize: '2.2rem',
        fontFamily: "'Playfair Display', serif",
        lineHeight: 1.4,
      },
      h4: {
        fontWeight: 600,
        fontSize: '1.8rem',
        fontFamily: "'Playfair Display', serif",
        lineHeight: 1.4,
      },
      h5: {
        fontWeight: 600,
        fontSize: '1.4rem',
        lineHeight: 1.5,
      },
      h6: {
        fontWeight: 600,
        fontSize: '1.2rem',
        lineHeight: 1.5,
      },
      body1: {
        fontSize: '1.1rem',
        lineHeight: 1.7,
        fontWeight: 400,
      },
      body2: {
        fontSize: '1rem',
        lineHeight: 1.6,
        fontWeight: 400,
      },
      caption: {
        fontSize: '0.9rem',
        lineHeight: 1.5,
        fontWeight: 400,
      },
    },
    palette: {
      primary: {
        main: '#2563eb',
        light: '#60a5fa',
        dark: '#1d4ed8',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#0ea5e9',
        light: '#38bdf8',
        dark: '#0284c7',
        contrastText: '#ffffff',
      },
      background: {
        default: '#fafafa',
        paper: '#ffffff',
      },
      text: {
        primary: '#1f2937',
        secondary: '#6b7280',
        disabled: '#9ca3af',
      },
      grey: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
      divider: alpha('#6b7280', 0.2),
    },
    shape: {
      borderRadius: 12,
    },
    shadows: [
      'none',
      '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      ...Array(19).fill('none')
    ] as any,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          code: {
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.9em',
            padding: '0.1em 0.3em',
            borderRadius: '4px',
            backgroundColor: alpha('#2563eb', 0.1),
            color: '#2563eb',
          },
          pre: {
            fontFamily: "'JetBrains Mono', monospace",
            borderRadius: '12px',
            padding: '1.5rem',
            overflow: 'auto',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: '8px',
            padding: '10px 24px',
            fontSize: '1rem',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              transform: 'translateY(-1px)',
            },
          },
          contained: {
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            '&:hover': {
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            },
          },
          outlined: {
            borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: '16px',
          },
          elevation1: {
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          },
          elevation2: {
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          },
          elevation3: {
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: '#ffffff',
            color: '#1f2937',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            backdropFilter: 'blur(8px)',
            backgroundImage: 'none',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            fontWeight: 500,
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',
              '&:hover fieldset': {
                borderColor: '#2563eb',
              },
            },
          },
        },
      },
      MuiAvatar: {
        styleOverrides: {
          root: {
            borderRadius: '12px',
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            backgroundColor: alpha('#6b7280', 0.2),
          },
        },
      },
    },
  });
};