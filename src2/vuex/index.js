import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import logger from "vuex/dist/logger.js";
import {mutations} from "./mutations.js";
import {listAll} from"../api/index.js";


 
let state={
    cartData:[],
    cartflag:false
    //total:0
   
}



// var ary=[{"num":1},{"num":2},{"num":3}];
// ary.reduce(function(pre,current,index){
//  return pre.num+current.num
//   // console.log(pre,current,index)
// })

//getters 就相当于组件中的computed,不同的是computed 指的的组件中的,这个只的是公用数据中的
let getters={
     //购物车的总数量
     total(state){
       return state.cartData.reduce(function(pre,current,index){return pre+current.num},0)
     },
     cartflag(state){
         let total=state.cartData.reduce(function(pre,current,index){return pre+current.num},0);
         return total?true:false;
         
     },
     //购物车中的商品总价格
     cartPriceTotal(state){
        return state.cartData.reduce((pre,cur,index)=>{
             return pre+cur.price*cur.num
         },0)
     }

}
 export default  new Vuex.Store({
        state,
        mutations,
        strict:true,//开启只能用mutations提交功能校验
        plugins:[logger()],
        getters 
  })