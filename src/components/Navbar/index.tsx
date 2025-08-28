// src/components/Navbar.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

const navItems = [
  { label: 'Blog', path: '/blog' },
  { label: 'Sobre', path: '/sobre' },
  { label: 'Contato', path: '/contato' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Meu Blog
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => navigate(item.path)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" elevation={0} sx={{ py: 0.5, borderBottom: `1px solid ${theme.palette.divider}` }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              display: { xs: 'block', sm: 'block' },
              fontWeight: 800,
              textDecoration: 'none',
              color: 'text.primary',
              fontFamily: "'Playfair Display', serif"
            }}
          >
            Meu Blog
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                sx={{
                  color: 'text.secondary',
                  mx: 1,
                  fontWeight: 600,
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'transparent'
                  }
                }}
                onClick={() => navigate(item.path)}
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
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3, width: '100%' }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Navbar;