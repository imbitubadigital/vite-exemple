import { Menu } from 'components/Menu';
import React from 'react';

import { DashboardProps } from './interfaces';
import * as S from './styles';
export function Dashboard({ children }: DashboardProps) {
  return (
    <S.Container>
      <Menu />
      <S.Body>{children}</S.Body>
    </S.Container>
  );
}
