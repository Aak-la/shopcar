import Vue from 'vue';
import 'vant/lib/index.css';
import { Toast, Dialog } from 'vant';
Vue.prototype.$api = api;
Vue.prototype.$Dialog = Dialog;
Vue.prototype.$Toast = Toast;
Vue.prototype.$animate = animate;
Vue.config.productionTip = false;
import api from './api';
import animate from './tools/animate';
import 'lib-flexible';
import Vant from 'vant';

Vue.use(Vant);
