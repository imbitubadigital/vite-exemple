import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';
//import {} from './interfaces';

export function SigIn() {
  return (
    <S.Container>
      <Link to="/dashboard">Logar</Link>
    </S.Container>
  );
}
