import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import VueResource from 'vue-resource';
import Host from './config.js';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(iView);
Vue.use(VueResource);

// 路由配置
var RouterConfig = {
    routes: Routers
};
var router = new VueRouter(RouterConfig);

router.beforeEach(function (to, from, next) {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach(function (to, from, next) {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    render: function render(h) {
        return h(App);
    }
});

//# sourceMappingURL=main-compiled.js.map