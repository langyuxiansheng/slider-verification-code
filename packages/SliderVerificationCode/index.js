// 导入组件，组件必须声明 name
import SliderVerificationCode from './src/main.vue';
// 为组件添加 install 方法，用于按需引入
SliderVerificationCode.install = function (Vue) {
    Vue.component(SliderVerificationCode.name, SliderVerificationCode);
}
export default SliderVerificationCode;