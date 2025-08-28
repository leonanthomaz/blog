// src/main.tsx
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { useMuiTheme } from './styles/muiTheme';
import { GlobalProvider } from './contexts/GlobalContext';
import { SnackbarProvider } from 'notistack';
import { GlobalCss } from './styles/globalStyles';

const Root = () => {
    return (
        <MainApp />
    );
};

const MainApp = () => {
    const muiTheme = useMuiTheme();

    return (
     <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <GlobalCss />
        <GlobalProvider> 
          <SnackbarProvider
                maxSnack={3}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                <App />
            </SnackbarProvider>
        </GlobalProvider>
      </MuiThemeProvider>
    );
};

createRoot(document.getElementById('root')!).render(<Root />);