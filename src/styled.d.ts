// src/styled.d.ts
import 'styled-components';
import { Theme } from './themes/themesTypes';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
