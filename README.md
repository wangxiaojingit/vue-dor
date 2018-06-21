
### vue-book
_______________

### 项目简介:
  属于一个电商网站,首页展示页面,列表页也是展示页面,但用到了下拉刷新,点击列表页中的每个小商品跳转到详情页,通过详情页
的添加功能,从而把数据添加到购物车,点击底部购物车,跳转到购物车页面.在购物车页面简单实现加减功能.

### 功能

 主要采用vue-cli框架,结合vuex +vue router +es6 ,这个项目虽然很小,但是五脏俱全,很适合掌握了vue基础知识点之后,练习的小项目,新手学习起来比较简单.


![avatar](/1.png)

![avatar](/2.png)

![avatar](/3.png)

![avatar](/4.png)






### 全局组件

   懒加载:"vue-lazyload": "^1.2.4",

### 首页
   1 轮播图用的插件 "vue-awesome-swiper": "^3.1.3",具体api 跟swiper的api一样
   2 在banner 数据和推荐数据没用请求到的时候用了loading组件,纯css3编写
   3 步骤2中的数据请求都是异步,为了判断两者是否都拿到数据,我们用了axios.all();

### 列表页
 分页加载

### 缓存 <keep-alive>

有时候我们有的路由页面需要缓存,有的不需要,怎么实现需求?

1\ 在router下面的index.js 中,我们可以多一个选项进行设置

```
 {
      path:'/home',
      component:Home,
      meta:{  //单独设置路由上的页面是否被缓存
        keepAlive:true
      }    
 }

```
2 在App.vue 中我们需要根据路由中设置的缓存的参数进行判断

```
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" ></router-view>

```

3 我们启动服务在访问页面的时候,查看network 的时候只有一个app.js,把所有的请求都打包成一个
无论我们访问哪个页面,都是全部加载,为了优化,实现按需加载,我们看vue-router文档中的路由懒加载
中有一个按组件分块.在router下面的index.js
```
let helloWorld =()=>import('../components/HelloWorld');
let Home=()=>import("../components/home.vue"); 
let List=()=>import("../components/list.vue"); 
let Detail=()=>import("../components/detail.vue")  
let Add=()=>import("../components/add.vue")  
let Collet=()=>import("../components/collet.vue")  

```
这样我们在访问首页的时候,就只加载首页的,访问列表页的时候就加载列表页的请求


### 路由的钩子函数
如果我们想要给每个view 添加title
我们可以在router下面的index里面添加meta:{title:"首页"},给每个路由添加信息,我们再在每个组件页面的created钩子函数中写逻辑
```
   document.title=this.$route.meta.title

```
上面的方法,比较麻烦,每个页面都需要添加,我们有更好的方法,就是在main.js 中添加共有方法
 router.beforeEach:遍历每一个路由,在跳转前

```
 router.beforeEach(function(to,from,next){
     document.title=to.meta.title;
     next() //必须写next(),不然路由不往下面走
 })

```

还可以做其它逻辑,如果跳转路径是"/list",就让其跳到添加页面,一般用来做权限跳转
```
  router.beforeEach(function(to,from,next){
  debugger;
   if(to.path=="/list"){
     next({path:'/home'})
   }else{
    console.log(to.meta.title)
    document.title=to.meta.title;
    next();
 
   }
})
```

### 更改打包路径,在bulid 下面的webpack.base.conf.js,更改打包路径为src1下面的main.js
```
    entry: {
      app:"./src1/main.js"
  },
```

### 如果想要在github 上发布预览,需要用到mock.js 因为github 只支持静态服务

### 最后在打包上线的时候需要更改下 

![](/5.png)
