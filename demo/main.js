import 'muse-ui/dist/muse-ui.css';
import Vue from 'vue';
import MuseUI, { theme } from 'muse-ui';
import { carbon, createTheme } from '../src';
import App from './App';

theme.add('carbon', carbon)
  .addCreateTheme(createTheme)
  .use('carbon');
Vue.use(MuseUI);

new Vue({
  ...App
}).$mount('#app');
