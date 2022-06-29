import Vue from 'vue';
import App from './App.vue';

// Выводим импортированной функцией 2 разных сообщения
import { dataMessage } from "./functions";


Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');