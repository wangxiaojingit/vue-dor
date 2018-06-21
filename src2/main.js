// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mock from "./mock/index.js"
//全局引入jquery
var $ =require("jquery")
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default global options } */)
//每次进入路由之前都会进入这个方法 路由的钩子函数
router.beforeEach(function(to,from,next){
 
  //  if(to.path=="/list"){
  //    next({path:'/home'})
  //  }else{
  //   console.log(to.meta.title)
  //   document.title=to.meta.title;
  //   next();
 
  //  }

   document.title=to.meta.title;
   next();
})

//Vue.use(VueLazyload)
//懒加载 ,除此之外在页面上还需要把:src  改成v-lazy=
import VueLazyload from 'vue-lazyload';
import err from "./assets/error.jpg";
import load from "./assets/loading.gif";
import store from "./vuex/index.js"
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: err,
  loading: load,
  attempt: 1,
  listenEvents:['scroll']
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
