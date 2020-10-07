import React, { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import MuiAppBar from '@material-ui/core/AppBar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useCart } from '../hooks/useCart';
import { routes } from '../routes';
import { Toolbar } from '../styled';

const AppBar: React.FC = () => {
  const history = useHistory();

  const { items } = useCart();

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Typography variant="h6" noWrap>
          Gray Matter Grille
        </Typography>
        <ButtonGroup>
          <IconButton
            aria-label="order"
            color="inherit"
            onClick={() => history.push(routes.orderScreen)}
          >
            <FastfoodIcon />
          </IconButton>
          <IconButton
            aria-label="cart"
            color="inherit"
            onClick={() => history.push(routes.cart)}
          >
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </ButtonGroup>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
