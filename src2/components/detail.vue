<template>
 <div >
     <MyHead :back="true">详情页</MyHead>
     <div id="main">
                <div class="imgbox">
                   <img :src="dol.cover" alt="">
                </div>
                <div class="name">
                    <label for="name">名字:</label>
                    <input type="text" v-model="dol.name" id="name">
                </div>
                <div class="price">
                    <label for="price" >价格:</label>
                    <input type="text" v-model.number="dol.price" id="price">
                </div>
               
                <div class="changebut" @click="addcart"> 添加购物车</div>
     </div>
 </div>
</template>
<script>
import MyHead from "../base/myhead.vue";
import {dolDel,changeDol} from "../api/index.js";
import * as types from "../vuex/mutations_types.js";
export default {
    created(){
        this.getdata();
    },
    watch:{
      $route(){
          //如果路由发生变化的时候我们需要重新请求一次数据
          this.getdata();
      }
    },
    filters:{
        pricefilter(val){
          return "¥ "+val;
        }
    },
    data(){
        return {
          dol:{}
        }
    },
    methods:{
       async getdata(){
         let {data:dol}=await dolDel(this.$route.params.id);
         
         //Object.keys(dol).length 判断一个对象是不是空对象
         if(!Object.keys(dol).length){
            this.$router.push("/list");
         }
         this.dol=dol
          
        },
      async changedol(){
            //点击确认修改的时候
          await changeDol(this.$route.params.id,this.dol);
          alert("修改成功")
        },
        addcart(){
           //let id= this.$route.params.id;
           //通过id 去找出那一项目的详细信息
           // console.log(this.$store.state)
           //添加到购物车,需要通知底部的购物按钮变红,并且需要把这个数据放到公用数据库store中
           this.$store.commit(types.ADDCART,this.dol);
          // this.$store.commit(types.CARTFLAG,true);
          // this.$store.commit(types.CHANGECARTTOTAL); //修改购物车总数量
           

        }
       
    },
    components:{
        MyHead
    }
}
</script>
<style scoped lang="less">
#main{
    position:absolute;
    top:50px;
    bottom:60px;
    right:0;
    left:0;
    color:#fff;
    background:#3ba776;
    padding-top: 30px;
    input{
       
        height:30px;
        line-height:30px;
        //background:rgba(0,0,0,.6);
        border:none;
        border-radius:5px;
        text-indent:15px;
    
    }
    .name,.price{
        font-size:14px;
        height:60px;
        line-height:60px;
        background:#3ba776;
    }
    .price{

    }
    .changebut{
        background:#9acd32;
        color:#fff;
        width:50%;
        height:40px;
        border-radius:10px;
        text-align:center;
        margin:30px auto;
        line-height: 40px;
    }
}
  
</style>