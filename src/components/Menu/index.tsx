import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

export function Menu() {
  return (
    <S.Container>
      <Link to="/dashboard">Home Dashboard</Link>
      <Link to="/dashboard/profile">Profile</Link>
      <Link to="/dashboard/product">Product</Link>
    </S.Container>
  );
}
