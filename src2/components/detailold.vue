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
                <!-- <div class="changebut" @click="changedol">确认修改</div> -->
                <div class="changebut"> 添加购物车</div>
     </div>
 </div>
</template>
<script>
import MyHead from "../base/myhead.vue";
import {dolDel,changeDol} from "../api/index.js";
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