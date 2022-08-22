import { RouteConfig } from 'react-router-config';
import { Constructor } from '@pages/constructor';
import { paths } from '@pages/paths';

export const routes: RouteConfig[] = [
  {
    exact: true,
    path: paths.home(),
    component: Constructor,
  },
];