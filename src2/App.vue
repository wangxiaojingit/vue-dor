<template>
  <div id="app">
    <!-- 根据路由中设置的缓存参数进行判断是否缓存 -->
    <transition  name="fadeIn">
    <keep-alive v-if="$route.meta.keepAlive"> 
      <router-view></router-view>
    </keep-alive>
    </transition>
   <transition  name="fadeIn">   
    <router-view v-if="!$route.meta.keepAlive" ></router-view>
   </transition> 
    <Tab></Tab>
  </div>
</template>

<script>
import Tab from "./base/tap.vue"
export default {
  name: 'App',
  data(){
    return {

    }
  },
  components:{
     Tab
  }
}
</script>

<style>
*{margin:0;padding:0;}
.clearfix:before,.clearfix:after {
  display: table;
  content: " "
}

.clearfix:after {
  clear: both
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a{text-decoration: none;}
*{margin:0;padding:0;}
ul,li,ol{
  list-style:none;
}
.fadeIn-enter{
  opacity:0
}
.fadeIn-enter-active,.fadeIn-leave-active{
  transition: all .3s linear
}
.fadeIn-leave-active{
   opacity:0;
}
</style>
