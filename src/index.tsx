import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Nav from './components/Nav';
import OrderScreen from './components/OrderScreen';
import Cart from './components/Cart';
import { MenuProvider } from './hooks/useMenu';
import { CartProvider } from './hooks/useCart';
import { routes } from './routes';
import { Container } from './styled';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MenuProvider>
        <CartProvider>
          <Nav />
          <Container>
            <Switch>
              <Route exact path={routes.orderScreen} component={OrderScreen} />
              <Route exact path={routes.cart} component={Cart} />
              <Route render={() => <h1>Not Found</h1>} />
            </Switch>
          </Container>
        </CartProvider>
      </MenuProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
