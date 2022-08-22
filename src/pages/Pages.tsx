import React, { FC } from 'react';
import { renderRoutes } from 'react-router-config';
import { routes } from '@pages/routes';
import { BrowserRouter } from 'react-router-dom';

type TPagesProps = {};

export const Pages: FC<TPagesProps> = ({}) => {
  return <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>;
};
