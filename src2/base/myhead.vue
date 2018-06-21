<template>
    <div id="myhead">
       <i @click="goback" class="iconfont icon-fanhui" v-if="back"></i> <slot></slot>
    </div>
</template>
<script>
export default {
    props:{
         back:{
             type:Boolean,
             default:false
         }
     },
     data(){
         return {
             
         }
     },
     methods:{
         goback(){
             this.$router.go(-1)
         }
     }
}
</script>
<style scoped lang="less">
    #myhead{
        height:50px;
        color:#fff;
        position:fixed;
        left:0;
        right:0;
        top:0;
        height:50px;
        z-index:999;
        line-height:50px;
        background:rgba(0,0,0,.8);
        i{
            position:absolute;
            left:10px;
            top:0px;


        }
    }
</style>


