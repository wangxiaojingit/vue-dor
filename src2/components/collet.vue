<template>
 <div>
     <MyHead>收藏页</MyHead>
        <div class="main" ref="scroll" >
            <div id="mainIn">
            <ul >
              <li v-for="(item,key) in cartDat" :key="key">
                  <div class="left">
                      <img :src="item.cover" alt="">
                  </div>
                  <div class="right">
                      <button class="btn" @click="addNum(item)">+</button>
                      <span class="num">{{item.num}}</span>
                      <button class="btn" @click="reduceNum(item)">-</button>
                      <span class="price">{{item.price |filterMoney}}</span>
                      <button class="btn" @click="remcart(item)">删除</button>
                     
                  </div>
              </li>
             
            </ul>
            </div>
            <div class="chekout">
             <span class="btn2">总数量: {{$store.getters.total}}</span>
             <span class="btn2">总价格:{{cartPriceTotal |filterMoney}}</span>
             <button class="btn3" @click="submit">提交订单</button>

            

            </div>
        </div> 
     </div>
</template>
<script>
import MyHead from "../base/myhead.vue";
import List from "../base/bookList.vue";
import * as Types from "../vuex/mutations_types.js"
import {mapGetters} from "vuex"
export default {
    filters:{
        filterMoney(val){
           return "¥ "+val;
        }
    },
    created(){
        debugger;
        console.log(this.$store.getters.total)
         if(!this.$store.state.cartData.length){
           this.$router.push({path:"/list"})
        }  

    },
    computed:{
        ...mapGetters(["total","cartPriceTotal"]),
        cartDat(){
          return  this.$store.state.cartData
        },
        
    },
    data(){
        return {
          hot:[]
        }
    },
    methods:{
        addNum(item){
            debugger;
           
            item.num++;
            this.$store.commit(Types.CHANGEDATA,item); //添加增加按钮的时候,需要改变当前数据的数量
           // this.$store.commit(Types.CHANGECARTTOTAL); //修改购物车总数量
            

        },
        reduceNum(item){
             item.num--;
            if(item.num<=0){
              item.num=1;
              return;
            }
            
            this.$store.commit(Types.CHANGEDATA,item);
        },
        remcart(item){
          //删除购物车中的某一项
            this.$store.commit(Types.DELETE,item);//删除购物车的某一项



        },
        submit(){
            alert("订单提交成功!");
            window.setTimeout(()=>{
                this.$router.push("/list")
            })
        }


    },
    watch:{
        
       total:function(newVal){
           debugger;
           if(newVal<=0){
            this.$router.push("/list");
           }
       }
    },
    components:{
        MyHead
       
        
    }
}
</script>
<style scoped lang="less">
.main{
    background:#3ba776;
    #mainIn{
       
        position:absolute;
        left:0;
        right:0;
        top:0;
        bottom:100px;
        overflow:auto;
    }
    .price{
        color:red;
        margin:0 10px;
        
    }
    .chekout{
     position: fixed;
    bottom: 60px;
    left: 0;
    width: 100%;
    background: #fff;
    }
    .btn2{
        height: 30px;
    line-height: 30px;
    /* background: red; */
    color: #333;
    }
    .btn3{
        width:80%;
        margin:10px auto;
        background:#93abcf;
        height:50px;
        line-height:50px;
    }
}
.btn{
    width: 50px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 16px;

}
.num{
    height:40px;
    line-height:40px;
    text-align:center;
    font-size:16px;
    color:#fff;
    margin:0 10px;
}
   .main{
       position:absolute;
       top:50px;
       bottom:60px;
       left:0;
       right:0;
       overflow: auto;
       ul{
               
               li{
                   border-bottom: 1px dashed #eeee;
                   padding:10px;
                   .left{
                       width:100%;
                       margin-bottom:10px; 
                       
                   }
                       
               }
       }
       .loading{
           width:100%;
           height:50px;
           line-height:50px;
           text-align:center;
           color:#fff;
           background:green;
       }
       
   }

</style>