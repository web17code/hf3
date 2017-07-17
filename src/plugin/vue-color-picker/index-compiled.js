// 导入组件
import colorPicker from './colorPicker.vue';

// 定义插件，可通过 Vue.use() 方法注册插件，然后全局使用组件
var install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // 定义全局组件
  Vue.component('colorPicker', colorPicker);
};

export { colorPicker };

// 默认导出 install 方法
export default {
  install: install
};

//# sourceMappingURL=index-compiled.js.map