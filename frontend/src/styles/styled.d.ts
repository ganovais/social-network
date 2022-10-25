import 'styled-components';
import { theme_dark } from './theme_dark';

declare module 'styled-components' {
  type ThemeType = typeof theme_dark;

  export interface DefaultTheme extends ThemeType {}
}
