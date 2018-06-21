import * as Types from"./mutations_types";
import Router from 'vue-router'
export const mutations={
      //添加购物车功能
      [Types.ADDCART](state,item){
           
         //添加的时候先要判断是不是已经存在,如果没有则直接push,如果有则只需改变数量即可
         let dol= state.cartData.find(function(val){
             return val.id==item.id
         });
         console.log(dol);
         if(dol){
            //如果存在
            dol.num++;
            state.cartData=[...state.cartData];
         }else{
           //如果不存在
           item.num=1;
           state.cartData.push(item)
         }
         

         
      },
     
      //删除购物车功能
      [Types.DELETE](state,val){
          state.cartData=   state.cartData.filter((item)=>{
             return   item.id!==val.id
          })
          console.log(this);
      //   if( !state.cartData.length){
      //      .push({path:"/list"})
      //   }  
      },
      //清空购物车功能
      [Types.CLEARCART](){

      },
     
     
      //修改购物车中单个商品的数量
      [Types.CHANGEDATA](state,item){
      state.cartData= state.cartData.map(val => {
                if(val.id==item.id){
                    return item;
                }else{
                      return val
                }
          });
      }

}


