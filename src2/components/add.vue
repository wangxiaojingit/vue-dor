<template>
 <div>
     <MyHead>添加</MyHead>
      <div id="main">
                <div class="imgbox">
                   <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1528443957&di=c669b5889c6dab10318370044c620b68&src=http://m.360buyimg.com/n12/jfs/t2257/15/1128821094/98694/54d65594/564193d0Ne14493b0.jpg!q70.jpg" alt="">
                </div>
                <div class="name">
                    <label for="name">名字:</label>
                    <input type="text" v-model="dol.name" id="name">
                </div>
                <div class="price">
                    <label for="price" >价格:</label>
                    <input type="text" v-model.number="dol.price" id="price">
                </div>
                 <div class="cover">
                    <label for="price" >封面:</label>
                    <input type="text"  v-model="dol.cover" id="cover">
                </div>
                <div class="changebut" @click="adddol">添加</div>
     </div>
 </div>
</template>
<script>
import MyHead from "../base/myhead.vue"
import {addDol} from "../api/index.js"
export default {
    data(){
        return {
            dol:{
            }
        }
    },
    methods:{
     async adddol(){
          //添加
        await  addDol(this.dol);
        this.$router.push("/list");
      }
    },
    components:{
        MyHead
    }
}
</script>
<style scoped lang="less" >
 #main{
    position:absolute;
    top:50px;
    bottom:60px;
    right:0;
    left:0;
    color:#fff;
    background:#3ba776;
    padding-top: 30px;
    .imgbox{
        width:60%;
        margin: 20px auto;
        overflow:hidden;
        img{
            width:100%;

        }
    }
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