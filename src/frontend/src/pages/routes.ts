import { RouteConfig } from 'react-router-config';
import { Constructor } from '@pages/constructor';
import { paths } from '@pages/paths';
import { Cart } from '@pages/cart';

export const routes: RouteConfig[] = [
  {
    exact: true,
    path: [paths.home(), paths.constructor()],
    component: Constructor,
  },
  {
    exact: true,
    path: paths.cart(),
    component: Cart,
  },
];
