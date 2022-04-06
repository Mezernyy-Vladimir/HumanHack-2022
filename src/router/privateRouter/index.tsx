import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import { useAppSelector } from '../../redux/hooks';

import Header from '../../widgets/Header';
import Container from '../../shared/ui/container';

const PrivateRouter = () => {
  const { accessToken } = useAppSelector((state) => state.auth);

  return accessToken ? (
    <>
      <Header />
      <div className="main-container">
        <Container height>
          <Outlet />
        </Container>
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRouter;
