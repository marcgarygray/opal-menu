import React from 'react';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useCart } from '../hooks/useCart';
import { asCurrency } from '../utils';
import { BottomRow } from '../styled';

const Cart: React.FC = () => {
  const { clearCart, items } = useCart();

  return (
    <>
      <Typography variant="h3">Cart</Typography>
      <TableContainer
        component={Paper}
        style={{ marginTop: '24px', marginBottom: '24px' }}
      >
        <Table size="small" aria-label="cart contents">
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(item => (
              <TableRow key={`${item.name}-${item.size}`}>
                <TableCell component="th" scope="row">
                  {item.name} - {item.size}
                </TableCell>
                <TableCell align="right">{asCurrency(item.price)}</TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="right">
                  {asCurrency(item.price * item.quantity)}
                </TableCell>
              </TableRow>
            ))}
            <BottomRow key="total">
              <TableCell colSpan={3} align="right">
                <strong>TOTAL</strong>
              </TableCell>
              <TableCell align="right">
                <strong>
                  {asCurrency(
                    items.reduce(
                      (sum, item) => sum + item.price * item.quantity,
                      0,
                    ),
                  )}
                </strong>
              </TableCell>
            </BottomRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" onClick={() => clearCart()}>
        Empty Cart
      </Button>
    </>
  );
};

export default Cart;
