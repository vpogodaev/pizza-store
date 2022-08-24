import React, { FC } from 'react';
import { renderRoutes } from 'react-router-config';
import { routes } from '@pages/routes';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '@shared/ui/components';

type TPagesProps = {};

export const Pages: FC<TPagesProps> = ({}) => (
  <BrowserRouter>
    <Header />
    {renderRoutes(routes)}
  </BrowserRouter>
);
