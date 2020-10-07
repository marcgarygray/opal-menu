import { Factory, Menu } from './types';

export const getJSON: (route: string) => Promise<Menu | null> = async route => {
  try {
    const response = await fetch(route, { method: 'GET', mode: 'cors' });
    if (response.ok) {
      const parsed: Menu = await response.json();
      return parsed;
    }
    return null;
  } catch (_) {
    return null;
  }
};

export const getMenu: Factory<Promise<Menu | null>> = async () =>
  getJSON(
    'https://mobile-dev-code-project.s3-us-west-2.amazonaws.com/project.json',
  );
