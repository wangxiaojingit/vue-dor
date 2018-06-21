<template>
 <div>
     <MyHead>列表页</MyHead>
     <div class="main">
         <List :hot="lists" :rem="true" v-if="lists.length" @rem="changelists" >
         </List>
         <div class="loading" @click="loadMore">下拉加载更多</div>
     </div>
 </div>
</template>
<script>
//点击加载更多
import MyHead from "../base/myhead.vue" ;
import {listAll,deldor,pagition} from "../api/index.js";
import List from "../base/bookList.vue";

export default {
    created(){
      this.listAllfn();
    },
    computed:{
        
    },
    data(){
        return {
           lists:[],
           start:0,//默认请求的分页数据从第几条开始
           hasMore:true //默认还有更多
           
        }
    },
    methods:{
       async  listAllfn(){
          let {data:{hasMore,dol:ary}}=await pagition(this.start);
          this.hasMore=hasMore;
          this.lists = [...this.lists,...ary];
        },
        changelists(id){
            deldor(id);
            this.lists=this.lists.filter(function(item){
               return item.id!=id
            })
        },
        loadMore(){
            //点击下拉加载更多
           if(this.hasMore){
             this.start=this.lists.length;
             this.listAllfn();
           }else{
               alert("没有更多")
           }
            
        }
    },
    components:{
        MyHead,List
    }
}
</script>
<style scoped lang="less">
   .main{
       position:absolute;
       top:50px;
       bottom:60px;
       left:0;
       right:0;
       overflow: auto;
       .loading{
           width:100%;
           height:30px;
           line-height:30px;
           text-align:center;
           color:#fff;
           background:green;
       }
       
   }
</style>