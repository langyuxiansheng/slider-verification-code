import Vue from 'vue';
import App from './App.vue';
import SliderVerificationCode from '../packages';
Vue.use(SliderVerificationCode);
Vue.config.productionTip = false;
new Vue({
    render: h => h(App),
}).$mount('#app');
