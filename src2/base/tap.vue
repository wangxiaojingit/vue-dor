<template>
    <div id="footer">
        <router-link to="/home">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
        
        </router-link>
        <router-link to="/list">
        <i class="iconfont icon-liebiao"></i>
        <span>列表页</span>
        
        </router-link>
        <!-- <router-link to="/add">
        <i class="iconfont icon-tianjia">
           
        </i>
        <span>添加</span>
        
        </router-link> -->
        <router-link to="/collet">
        <i class="iconfont icon-gouwuche cart" >
            <!-- 购物车小红点 -->
            <span class="redcirle" :class="{'show':$store.getters.cartflag}"></span> 
            <!-- 购物车的数量 -->
            <i class="shoopingNum" :class="{'show':$store.getters.cartflag}">{{$store.getters.total|filternum}}</i>
        </i>
        <span>购物车</span>
        </router-link>
    </div>
</template>
<script>
export default {
    
     created(){
         //console.dir(this.$store.getters)
     },
     filters:{
         filternum(val){
            return "+"+val;
         }
     },
     data(){
         return {

         }
     }
}
</script>
<style scoped lang="less">
.cart{font-size:18px;position:relative}
.shoopingNum{
    font-size: 12px;
    position: absolute;
    left: 21px;
    top: -28px;
    color: red;
    display: none;
    height: 20px;
}
.show{display:block};
.redcirle{
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: red;
    position: absolute;
    top: -3px;
    right: 8px;
    display:none;
    &.show{display:block;}
}
   #footer{
       width:100%;
       height:60px;
       line-height:60px;
       border-top:1px solid yellowgreen;
       display: flex;
       flex-direction: row;
       position:fixed;
       left:0;
       bottom:0px;

       a{
           flex:1;
           color:yellowgreen;
           flex-direction: column;
           align-items:center;
           justify-content: center;

       }
       a.router-link-active{
           color:darkcyan;
       }
   }
</style>


