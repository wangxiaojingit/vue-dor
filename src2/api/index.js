
import axios from "axios";
//请求banner 图片接口
//let bathUrl="http://localhost:8090/api";
let bathUrl="/api";
//返回的是一个promise 对象
export let getBanner=function(){
    return axios.get(bathUrl+"/slider");
}


// 请求热门推荐
export let getDoor=function(){
    return axios.get(bathUrl+"/hot")
}

//首页合并请求
export let getHome=function(){
    return   axios.all([getBanner(),getDoor()])
}


//请求列表
export let listAll=function(){
    return axios.get(bathUrl+"/alllist")
}

//列表分页接口
export let pagition=function(start){
     return axios.post(bathUrl+"/page",{
         start:start
     })
}
//删除列表商品
export let deldor=function(id){
   return axios.get(bathUrl+"/alllist?id="+id)
}
//详情页数据
export let dolDel=function(id){
   //return axios.get(bathUrl+"/alllist?id="+id) 
   return axios.post(bathUrl+"/del",{
           id:id
   })
}

//修改数据
export let changeDol=function(id,data){
   return axios.put(`${bathUrl}/alllist?id=${id}`,data)
}
//添加数据
export let addDol=function(data){
  return axios.post(`${bathUrl}/alllist`,data)
}

