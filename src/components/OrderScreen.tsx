import React from 'react';
import LoadingSpinner from '@material-ui/core/CircularProgress';
import { useMenu } from '../hooks/useMenu';

const Menu: React.FC = () => {
  const { fetching, meta } = useMenu();
  return fetching ? <LoadingSpinner /> : <h1>{meta.version}</h1>;
};

export default Menu;
