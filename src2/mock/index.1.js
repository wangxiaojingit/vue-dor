

var Mock = require('mockjs');

//import $ from 'jquery';
var template={
    "name|3":"li",
    "age|10-18":10
}
var data = Mock.mock("http://www.wxj.com/api/list",template)
    
    

// 输出结果
console.log(JSON.stringify(data))




    
    



