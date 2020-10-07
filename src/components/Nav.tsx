import React from 'react';
import MUIAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const AppBar: React.FC = () => {
  return (
    <MUIAppBar position="static">
      <Toolbar>
        <Typography variant="h6" noWrap>
          Gray Matter Foods
        </Typography>
        <IconButton aria-label="cart" color="inherit">
          <Badge badgeContent={17} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </MUIAppBar>
  );
};

export default AppBar;
