import { About } from 'pages/About';
import { Home } from 'pages/Home';
import { Product } from 'pages/Product';
import { Profile } from 'pages/Profile';
import { SigIn } from 'pages/SignIn';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from 'Routes/PrivateRoutes';

export function MyRoutes() {
  const user = true;
  return (
    <Routes>
      <Route path="/" element={<SigIn />} />

      <Route path="dashboard" element={<PrivateRoutes user={user} redirectPath="/" />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="product" element={<Product />} />
      </Route>
      <Route path="about" element={<About />} />
    </Routes>
  );
}
