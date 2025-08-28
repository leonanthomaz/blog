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
        color: '#2d3748',
      },
      h2: {
        fontWeight: 700,
        fontSize: '2.8rem',
        fontFamily: "'Playfair Display', serif",
        lineHeight: 1.3,
        letterSpacing: '-0.01em',
        color: '#2d3748',
      },
      h3: {
        fontWeight: 600,
        fontSize: '2.2rem',
        fontFamily: "'Playfair Display', serif",
        lineHeight: 1.4,
        color: '#2d3748',
      },
      h4: {
        fontWeight: 600,
        fontSize: '1.8rem',
        fontFamily: "'Playfair Display', serif",
        lineHeight: 1.4,
        color: '#2d3748',
      },
      h5: {
        fontWeight: 600,
        fontSize: '1.4rem',
        lineHeight: 1.5,
        color: '#2d3748',
      },
      h6: {
        fontWeight: 600,
        fontSize: '1.2rem',
        lineHeight: 1.5,
        color: '#2d3748',
      },
      body1: {
        fontSize: '1.1rem',
        lineHeight: 1.7,
        fontWeight: 400,
        color: '#4a5568',
      },
      body2: {
        fontSize: '1rem',
        lineHeight: 1.6,
        fontWeight: 400,
        color: '#4a5568',
      },
      caption: {
        fontSize: '0.9rem',
        lineHeight: 1.5,
        fontWeight: 400,
        color: '#718096',
      },
    },
    palette: {
      primary: {
        main: '#4c6ef5',
        light: '#91a7ff',
        dark: '#3b5bdb',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#5c7cfa',
        light: '#85a3ff',
        dark: '#4263eb',
        contrastText: '#ffffff',
      },
      background: {
        default: '#f8f9fa',
        paper: '#ffffff',
      },
      text: {
        primary: '#2d3748',
        secondary: '#718096',
        disabled: '#a0aec0',
      },
      grey: {
        50: '#f8f9fa',
        100: '#f1f3f5',
        200: '#e9ecef',
        300: '#dee2e6',
        400: '#ced4da',
        500: '#adb5bd',
        600: '#868e96',
        700: '#495057',
        800: '#343a40',
        900: '#212529',
      },
      divider: alpha('#e9ecef', 0.8),
    },
    shape: {
      borderRadius: 12,
    },
    shadows: [
      'none',
      '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
      '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
      '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
      '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
      '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
    ] as any,
    components: {
      MuiCssBaseline: {
        styleOverrides: (theme) => ({
          code: {
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.9em',
            padding: '0.1em 0.3em',
            borderRadius: '4px',
            backgroundColor: alpha(theme.palette.primary.main, 0.08),
            color: theme.palette.primary.dark,
          },
          pre: {
            fontFamily: "'JetBrains Mono', monospace",
            borderRadius: '12px',
            padding: '1.5rem',
            overflow: 'auto',
            backgroundColor: theme.palette.background.default,
            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
          },
        }),
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
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
            '&:hover': {
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
            },
          },
          outlined: {
            borderWidth: '1.5px',
            '&:hover': {
              borderWidth: '1.5px',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
            transition: 'all 0.3s ease',
            border: `1px solid ${alpha('#e9ecef', 0.8)}`,
            '&:hover': {
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: '16px',
            border: `1px solid ${alpha('#e9ecef', 0.8)}`,
          },
          elevation1: {
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
          },
          elevation2: {
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
          },
          elevation3: {
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: '#ffffff',
            color: '#2d3748',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
            backdropFilter: 'blur(8px)',
            backgroundImage: 'none',
            borderBottom: `1px solid ${alpha('#e9ecef', 0.8)}`,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            fontWeight: 500,
            backgroundColor: alpha('#4c6ef5', 0.08),
            color: '#3b5bdb',
            '&:hover': {
              backgroundColor: alpha('#4c6ef5', 0.12),
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',
              '&:hover fieldset': {
                borderColor: '#4c6ef5',
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
            backgroundColor: alpha('#e9ecef', 0.8),
          },
        },
      },
    },
  });
};