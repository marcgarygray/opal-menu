import React from 'react';
import LoadingSpinner from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import AddtoCartIcon from '@material-ui/icons/AddShoppingCart';
import { useMenu } from '../hooks/useMenu';
import { useCart } from '../hooks/useCart';
import { asCurrency } from '../utils';

const Menu: React.FC = () => {
  const { fetching, menu, meta } = useMenu();

  const { addItem } = useCart();

  return fetching ? (
    <LoadingSpinner />
  ) : (
    <>
      <Typography variant="h3">Menu v{meta.version}</Typography>
      <Grid container spacing={2}>
        {menu.map(item => (
          <Grid item key={item.item} xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.item}</Typography>
                <List aria-label="options">
                  {item.options.map(option => (
                    <ListItem
                      button
                      key={`${item.item}-${option.size}`}
                      onClick={() =>
                        addItem({
                          name: item.item,
                          price: option.price,
                          size: option.size,
                        })
                      }
                    >
                      <ListItemIcon>
                        <AddtoCartIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={`${option.size} : ${asCurrency(option.price)}`}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Menu;
