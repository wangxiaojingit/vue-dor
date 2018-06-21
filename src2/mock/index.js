
import Mock from 'mockjs';
let banner=[
        "https://img1.360buyimg.com/da/jfs/t21523/257/757477328/96605/a8adab/5b1683ecN7445ef02.jpg!cr_1125x549_0_72",
        "https://img1.360buyimg.com/da/s750x366_jfs/t19951/244/780933788/113996/38f384f9/5b0b94b3N3d21e75d.jpg!cr_1125x549_0_72.dpg",
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t21754/103/722171977/127386/35cf0258/5b169e21Ncb6f2a15.jpg!cr_1125x549_0_72!q70.jpg.dpg",
        "https://img1.360buyimg.com/da/s750x366_jfs/t20350/83/653587589/98082/86d73ab6/5b14d7d5Nda8d8546.jpg!cr_1125x549_0_72.dpg"
     ]

let dor=[
    {"cover":"https://img10.360buyimg.com/n7/jfs/t17689/205/1028508397/120319/3a40cf57/5ab66792N82e3f09f.jpg","name":"蜡笔小新","price":888,"id":1},
    {"cover":"https://img12.360buyimg.com/n7/jfs/t14227/273/2605430838/174861/4afad619/5ab21bcbNfb5844c8.jpg","name":"小菜熊","price":78,"id":2},
    {"cover":"https://img12.360buyimg.com/n7/jfs/t14695/302/2341925155/113034/b9a07105/5a96296aNfcae89fd.jpg","name":"HELLOKITY","price":78,"id":3},
    {"cover":"//img11.360buyimg.com/n2/s240x240_jfs/t17815/273/1038523636/175613/934a2e39/5ab785dcNac4937d8.jpg!q70.jpg.webp","name":"雪妃尔","price":88,"id":4},
    {"cover":"//img13.360buyimg.com/n2/s240x240_jfs/t17056/19/1150802628/169586/fd252bed/5abe25deNcef1c8fa.jpg!q70.jpg","name":"雪妃尔","price":88,"id":5},
    {"cover":"https://img12.360buyimg.com/n7/jfs/t20632/13/353656310/220589/d75d2188/5b0b9bedN47a1f4fb.jpg","name":"大狗趴","price":78,"id":6},
    {"cover":"//img13.360buyimg.com/n2/s240x240_jfs/t19036/331/1660761700/128923/883b4713/5ad34e99N80da0bcf.jpg!q70.jpg.webp","name":"樱桃小丸子","price":88,"id":7},
    {"cover":"https://img10.360buyimg.com/n7/jfs/t17689/205/1028508397/120319/3a40cf57/5ab66792N82e3f09f.jpg","name":"蜡笔小新","price":78,"id":8},
    {"cover":"https://img12.360buyimg.com/n7/jfs/t14227/273/2605430838/174861/4afad619/5ab21bcbNfb5844c8.jpg","name":"小菜熊","price":78,"id":9},
    {"cover":"https://img12.360buyimg.com/n7/jfs/t14695/302/2341925155/113034/b9a07105/5a96296aNfcae89fd.jpg","name":"HELLOKITY","price":78,"id":10},
    {"cover":"//img11.360buyimg.com/n2/s240x240_jfs/t17815/273/1038523636/175613/934a2e39/5ab785dcNac4937d8.jpg!q70.jpg.webp","name":"雪妃尔","price":88,"id":11},
    {"cover":"https://img12.360buyimg.com/n7/jfs/t20632/13/353656310/220589/d75d2188/5b0b9bedN47a1f4fb.jpg","name":"大狗趴","price":78,"id":12},
    {"cover":"//img13.360buyimg.com/n2/s240x240_jfs/t17056/19/1150802628/169586/fd252bed/5abe25deNcef1c8fa.jpg!q70.jpg","name":"雪妃尔","price":88,"id":13},
    {"cover":"//img13.360buyimg.com/n2/s240x240_jfs/t19036/331/1660761700/128923/883b4713/5ad34e99N80da0bcf.jpg!q70.jpg.webp","name":"樱桃小丸子","price":88,"id":14},
    {"name":"小布偶","price":8888,"cover":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3805114248,1438323797&fm=27&gp=0.jpg","id":15},
    {"name":"小靓妞","price":88,"cover":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4057371658,3559067873&fm=27&gp=0.jpg","id":16},
    {"name":"阿呆","price":888,"cover":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1648271938,2404312439&fm=27&gp=0.jpg","id":17},
    {"name":"小黄尼","price":88,"cover":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3157326163,595535386&fm=200&gp=0.jpg","id":18},
    {"name":"小可爱","price":888888,"cover":"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1528443957&di=c669b5889c6dab10318370044c620b68&src=http://m.360buyimg.com/n12/jfs/t2257/15/1128821094/98694/54d65594/564193d0Ne14493b0.jpg!q70.jpg","id":19},
    {"cover":"https://img10.360buyimg.com/n7/jfs/t17689/205/1028508397/120319/3a40cf57/5ab66792N82e3f09f.jpg","name":"蜡笔小新","price":888,"id":20},
    {"cover":"https://img12.360buyimg.com/n7/jfs/t14227/273/2605430838/174861/4afad619/5ab21bcbNfb5844c8.jpg","name":"小菜熊","price":78,"id":21},
    {"cover":"https://img12.360buyimg.com/n7/jfs/t14695/302/2341925155/113034/b9a07105/5a96296aNfcae89fd.jpg","name":"HELLOKITY","price":78,"id":22},
    {"cover":"https://img12.360buyimg.com/n7/jfs/t14695/302/2341925155/113034/b9a07105/5a96296aNfcae89fd.jpg","name":"HELLOKITY","price":78,"id":23},
    {"cover":"//img11.360buyimg.com/n2/s240x240_jfs/t17815/273/1038523636/175613/934a2e39/5ab785dcNac4937d8.jpg!q70.jpg.webp","name":"雪妃尔","price":88,"id":24},
    {"cover":"//img13.360buyimg.com/n2/s240x240_jfs/t17056/19/1150802628/169586/fd252bed/5abe25deNcef1c8fa.jpg!q70.jpg","name":"雪妃尔","price":88,"id":25},
    {"cover":"https://img12.360buyimg.com/n7/jfs/t20632/13/353656310/220589/d75d2188/5b0b9bedN47a1f4fb.jpg","name":"大狗趴","price":78,"id":26},
    {"cover":"//img13.360buyimg.com/n2/s240x240_jfs/t19036/331/1660761700/128923/883b4713/5ad34e99N80da0bcf.jpg!q70.jpg.webp","name":"樱桃小丸子","price":88,"id":27},
    {"cover":"https://img10.360buyimg.com/n7/jfs/t17689/205/1028508397/120319/3a40cf57/5ab66792N82e3f09f.jpg","name":"蜡笔小新","price":78,"id":28},
    {"cover":"https://img12.360buyimg.com/n7/jfs/t14227/273/2605430838/174861/4afad619/5ab21bcbNfb5844c8.jpg","name":"小菜熊","price":78,"id":29},
    {"cover":"https://img12.360buyimg.com/n7/jfs/t14695/302/2341925155/113034/b9a07105/5a96296aNfcae89fd.jpg","name":"HELLOKITY","price":78,"id":30},
    {"cover":"//img11.360buyimg.com/n2/s240x240_jfs/t17815/273/1038523636/175613/934a2e39/5ab785dcNac4937d8.jpg!q70.jpg.webp","name":"雪妃尔","price":88,"id":31},
    {"cover":"https://img12.360buyimg.com/n7/jfs/t20632/13/353656310/220589/d75d2188/5b0b9bedN47a1f4fb.jpg","name":"大狗趴","price":78,"id":32},
    {"cover":"//img13.360buyimg.com/n2/s240x240_jfs/t17056/19/1150802628/169586/fd252bed/5abe25deNcef1c8fa.jpg!q70.jpg","name":"雪妃尔","price":88,"id":33},
    {"cover":"//img13.360buyimg.com/n2/s240x240_jfs/t19036/331/1660761700/128923/883b4713/5ad34e99N80da0bcf.jpg!q70.jpg.webp","name":"樱桃小丸子","price":88,"id":34},
    {"name":"小布偶","price":8888,"cover":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3805114248,1438323797&fm=27&gp=0.jpg","id":35},
    {"name":"小靓妞","price":88,"cover":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4057371658,3559067873&fm=27&gp=0.jpg","id":36},
    {"name":"阿呆","price":888,"cover":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1648271938,2404312439&fm=27&gp=0.jpg","id":37},
    {"name":"小黄尼","price":88,"cover":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3157326163,595535386&fm=200&gp=0.jpg","id":38},
    {"name":"小可爱","price":888888,"cover":"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1528443957&di=c669b5889c6dab10318370044c620b68&src=http://m.360buyimg.com/n12/jfs/t2257/15/1128821094/98694/54d65594/564193d0Ne14493b0.jpg!q70.jpg","id":39}]

let hot=dor.slice(0,8);
let pageNum=8;//默认分页每次请求8条数据

function params(query){
   let obj={}; 
  // let ary= url.split("?")[1].split("&");
  let ary=query.split("&");
   for(var i=0;i<ary.length;i++){
       let cur=ary[i];
       let key=cur.split("=")[0];
       let val=cur.split("=")[1];
       obj[key]=val;
   }
   return obj;
   
}

 Mock.mock("/api/hot","get",hot);  
 Mock.mock("/api/slider","get",banner);
 

//列表页的 分页
 Mock.mock("/api/page","post",function(options){
    
     let start=JSON.parse(options.body).start;
     let hasMore=true;//默认还有更多;
     let result;
     if(start>dor.length-1){
        hasMore=false;
        result=[]
     }else{
         result=dor.slice(start,start+pageNum);
        
     }
    
     return {
        hasMore,
        result
     };

    
 })
 //详情页
 Mock.mock("/api/del","post",function(options){
   // let start=JSON.parse(options.body).start;
    
     let id=JSON.parse(options.body).id;
     if(typeof id=="undefined"){
        return []
     }else{
       return  dor.find((item)=>{
           return  item.id==id
         })
     }
 });
//  Mock.mock("/api/page", function(options) {
//     return {
//         name:"lili"
//     }
// })



    
    



