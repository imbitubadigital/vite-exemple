import { Dashboard } from '_template/Dashboard';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { PrivateRoutesProps } from './interfaces';

export const PrivateRoutes = ({
  user,
  redirectPath = '/landing',
}: PrivateRoutesProps) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <Dashboard>
      <Outlet />
    </Dashboard>
  );
};
