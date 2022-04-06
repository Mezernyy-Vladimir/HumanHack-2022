import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/login';
import Register from '../pages/register';
import Home from '../pages/home';
import PrivateRouter from './privateRouter';

const Router = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      <Route path="/" element={<PrivateRouter />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/:id/:number" element={<PrivateRouter />}>
        <Route path="/:id/:number" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;
