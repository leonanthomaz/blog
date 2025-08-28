import { Box, Button, Typography } from '@mui/material';
import { Category } from '@mui/icons-material';

interface CategoriesSidebarProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const CategoriesSidebar = ({
  categories,
  selectedCategory,
  onSelectCategory
}: CategoriesSidebarProps) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Categorias
      </Typography>
      
      <Button
        fullWidth
        sx={{
          justifyContent: 'flex-start',
          mb: 1,
          backgroundColor: !selectedCategory ? 'primary.main' : 'transparent',
          color: !selectedCategory ? 'primary.contrastText' : 'text.primary',
          '&:hover': {
            backgroundColor: !selectedCategory ? 'primary.dark' : 'action.hover'
          }
        }}
        onClick={() => onSelectCategory(null)}
      >
        Todas as categorias
      </Button>
      
      {categories.map((category) => (
        <Button
          key={category}
          fullWidth
          sx={{
            justifyContent: 'flex-start',
            mb: 0.5,
            backgroundColor: selectedCategory === category ? 'primary.main' : 'transparent',
            color: selectedCategory === category ? 'primary.contrastText' : 'text.primary',
            '&:hover': {
              backgroundColor: selectedCategory === category ? 'primary.dark' : 'action.hover'
            }
          }}
          onClick={() => onSelectCategory(
            selectedCategory === category ? null : category
          )}
        >
          <Category sx={{ fontSize: 16, mr: 1 }} />
          {category}
        </Button>
      ))}
    </Box>
  );
};

export default CategoriesSidebar;