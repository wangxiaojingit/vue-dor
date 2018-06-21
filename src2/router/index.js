import Vue from 'vue'
import Router from 'vue-router'
let helloWorld =()=>import('../components/HelloWorld');
let Home=()=>import("../components/home.vue"); 
let List=()=>import("../components/list.vue"); 
let Detail=()=>import("../components/detail.vue")  
let Add=()=>import("../components/add.vue")  
let Collet=()=>import("../components/collet.vue")  


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component:Home,
      meta:{title:"首页"}
    },{
      path:'/home',
      component:Home,
      meta:{  //单独设置路由上的页面是否被缓存
        keepAlive:true,
        title:"首页"
      }
    },
    {
      path:'/list',
      component:List,
      meta:{
        keepAlive:false,
        title:"列表页"
      }
    },
    {
      path:'/detail/:id',
      component:Detail,
      name:"detail",
      meta:{
        title:"详情页"
      }
    },
    {
      path:'/add',
      component:Add,
      meta:{
        title:"添加页"
      }
    },
    {
      path:'/collet',
      component:Collet,
      meta:{
        title:"收藏页"
      }
    },
    {
      path:'*',
      redirect:"/home"
     
    }
  ]
})
