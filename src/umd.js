import theme from 'muse-ui/lib/theme';
import { carbon, createTheme } from './index';

theme.addCreateTheme(createTheme).add(carbon);

export { carbon, createTheme };
