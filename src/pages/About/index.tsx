import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';
//import {} from './interfaces';

export function About() {
  return (
    <S.Container>
      <Link to="/dashboard">About</Link>
    </S.Container>
  );
}
