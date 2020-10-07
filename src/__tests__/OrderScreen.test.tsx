import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Factory } from '../types';
import { MenuContext } from '../hooks/useMenu';
import testData from '../testData.json';
import OrderScreen from '../components/OrderScreen';

const renderWhileFetching: Factory<RenderResult> = () => {
  return render(
    <MenuContext.Provider
      value={{
        ...testData,
        fetching: true,
      }}
    >
      <OrderScreen />
    </MenuContext.Provider>,
  );
};

const renderWithTestData: Factory<RenderResult> = () => {
  return render(
    <MenuContext.Provider
      value={{
        ...testData,
        fetching: false,
      }}
    >
      <OrderScreen />
    </MenuContext.Provider>,
  );
};

it('displays loading indicator while menu data is fetching', () => {
  const { queryByRole, queryByText } = renderWhileFetching();
  expect(queryByText(`${testData.meta.version}`)).toBeNull();
  expect(queryByRole('progressbar')).not.toBeNull();
});

it('displays version number of menu data after data is fetched', () => {
  const { queryByRole, queryByText } = renderWithTestData();
  expect(queryByRole('progressbar')).toBeNull();
  expect(queryByText(`Menu v${testData.meta.version}`)).not.toBeNull();
});
