import React, { createContext, useContext, useEffect, useState } from 'react';
import { getMenu } from '../api';
import { Menu } from '../types';

export interface Context extends Menu {
  fetching: boolean;
}

const emptyMenu: Menu = {
  meta: {
    version: 0,
    date: '',
  },
  menu: [],
};

export const MenuContext = createContext<Context>({
  ...emptyMenu,
  fetching: true,
});

export const MenuProvider: React.FC = ({ children }) => {
  const [menu, setMenu] = useState<Menu>({ ...emptyMenu });
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const fetchMenu: () => Promise<void> = async () => {
      const fetchedMenu = await getMenu();
      if (fetchedMenu !== null) {
        setMenu(fetchedMenu);
      }
      setFetching(false);
    };

    fetchMenu();
  }, []);

  return (
    <MenuContext.Provider value={{ ...menu, fetching }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu: () => Context = () => useContext(MenuContext);
