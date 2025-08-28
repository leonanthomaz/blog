// src/components/Navbar.tsx
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  alpha,
  useScrollTrigger,
  Slide,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';

const navItems = [
  { label: 'Início', path: '/' },
  { label: 'Blog', path: '/blog' },
  { label: 'Sobre', path: '/sobre' },
  { label: 'Contato', path: '/contato' },
];

interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const drawer = (
    <Box sx={{ 
      width: 280, 
      height: '100%', 
      background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.background.default, 0.98)} 100%)`,
      display: 'flex', 
      flexDirection: 'column' 
    }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        p: 2, 
        borderBottom: `1px solid ${theme.palette.divider}` 
      }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 800,
            color: 'text.primary',
            fontFamily: "'Playfair Display', serif"
          }}
        >
          Leonan Blog
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ flexGrow: 1, p: 2 }}>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
            <ListItemButton 
              onClick={() => {
                navigate(item.path);
                setMobileOpen(false);
              }}
              sx={{
                borderRadius: 2,
                backgroundColor: isActive(item.path) ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
                color: isActive(item.path) ? 'primary.main' : 'text.primary',
                fontWeight: isActive(item.path) ? 600 : 400,
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.08),
                }
              }}
            >
              <ListItemText 
                primary={item.label} 
                primaryTypographyProps={{ 
                  fontWeight: isActive(item.path) ? 600 : 400 
                }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar 
          component="nav" 
          elevation={0}
          sx={{ 
            background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.95)} 0%, ${alpha(theme.palette.background.paper, 0.98)} 100%)`,
            backdropFilter: 'blur(10px)',
            borderBottom: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
            py: 0.5
          }}
        >
          <Toolbar sx={{ 
            minHeight: { xs: '60px', sm: '70px' }!,
            justifyContent: 'space-between'
          }}>
            <Typography
              variant="h5"
              component="a"
              href="/"
              sx={{
                fontWeight: 800,
                textDecoration: 'none',
                color: 'text.primary',
                fontFamily: "'Playfair Display', serif",
                '&:hover': {
                  color: 'primary.main'
                }
              }}
            >
              Leonan Blog
            </Typography>
            
            <Box sx={{ 
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 0.5
            }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => navigate(item.path)}
                  sx={{
                    color: isActive(item.path) ? 'primary.main' : 'text.secondary',
                    fontWeight: isActive(item.path) ? 600 : 400,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    minWidth: 'auto',
                    position: 'relative',
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: alpha(theme.palette.primary.main, 0.05),
                      '&::after': {
                        width: '100%'
                      }
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: isActive(item.path) ? '100%' : '0%',
                      height: '2px',
                      backgroundColor: 'primary.main',
                      transition: 'width 0.3s ease'
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ 
                display: { md: 'none' },
                color: 'text.primary'
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      
      <Box component="nav">
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: 280,
              borderLeft: `1px solid ${theme.palette.divider}`
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      
      {/* Espaçamento reduzido abaixo da navbar */}
      <Toolbar sx={{ 
        minHeight: { xs: '60px', sm: '70px' }!,
        mb: 1 // Reduzido significativamente o espaçamento
      }} />
    </>
  );
};

export default Navbar;