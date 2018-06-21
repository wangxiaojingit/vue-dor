<template>
 <div>
     <MyHead>列表页</MyHead>
     <div class="main" ref="scroll" @scroll="loadMore">
         <List :hot="lists"  :carIcon="true" v-if="lists.length" @rem="changelists" >
         </List>
         <div v-if="loading">loading...</div>
         <div class="nomore" v-if="!hasMore">...no more ...</div>
         <!-- <div class="loading" @click="loadMore">下拉加载更多</div> -->
     </div>
 </div>
</template>
<script>
//滚动条加载更多
import MyHead from "../base/myhead.vue" ;
import {listAll,deldor,pagition} from "../api/index.js";
import List from "../base/bookList.vue";

export default {
    created(){
      this.getData();
    },
    computed:{
        
    },
    data(){
        return {
           lists:[],
           start:0,//默认请求的分页数据从第几条开始
           hasMore:true, //默认还有更多
           loading:false, //默认没有在加载中
           timer:null
           
        }
    },
    methods:{
       async  getData(){
        
           let aa=await pagition(this.start);
           console.log(aa);
              let {data:{hasMore,result:ary}}=await pagition(this.start);
              this.hasMore=hasMore;
              
              //把数据进行拼接
              this.lists = [...this.lists,...ary];
              this.loading=false;
        },
        changelists(id){
            deldor(id);
            this.lists=this.lists.filter(function(item){
               return item.id!=id
            })
        },
        loadMore(){
             
          
           // 当触发滚动条事件的时候,我们这里的代码可以执行好多次,我们在这里开启一个定时器,每次进来
           //先清除上一个定时器
           clearTimeout(this.timer);
        this.timer=window.setTimeout(()=>{
           //获取滚动盒子元素
           
            let {scrollTop,scrollHeight,clientHeight}=this.$refs.scroll;
            if(scrollTop+clientHeight+20>scrollHeight){
                //说明滚动到了底部
                //点击下拉加载更多
               
                if(this.hasMore&&!this.loading){
                    this.loading=true;
                    this.start=this.lists.length;
                    this.getData();
                    
                }else if(!this.hasMore){
                    console.log("没有更多")
                }else if(this.loading){
                    console.log("正在加载中....")
                }
            }
         },20)   
            
        }
        // loadMore(){

        //     //点击下拉加载更多
        //    if(this.hasMore){
        //      this.start=this.lists.length;
        //      this.listAllfn();
        //    }else{
        //        alert("没有更多")
        //    }
            
        // }
    },
    components:{
        MyHead,List
    }
}
</script>
<style scoped lang="less">
.nomore{
    color: #fff;
    background: yellowgreen;
}
   
   .main{
       position:absolute;
       top:50px;
       bottom:60px;
       left:0;
       right:0;
       overflow: auto;
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