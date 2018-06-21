'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)


//模拟数据
const express = require('express')
const app = express()
const router = express.Router()
//const slider = require('../mock/slider.json');
//const dor=require("../mock/doo.json");
//app.use('/api', router)

let pagenum=8;//请求分页的数据,每次10条

function parameter(url){
  
  //  var url="http://www.xiuktv.com/xcbb_web/h5Activity/getSharePageInfo?zid=10004125&uid=10004122&type=1&sex=1&page=1&pageSize=100&token=123&province=111&nice=小辣"
  var obj={};
  var tem=[];
  var ary=url.split("?")[1].split("&");
  for(var i=0;i<ary.length;i++){
      var cur=ary[i];
      tem= cur.split("=");
      obj[tem[0]]=tem[1];
  }
  return obj;
}


const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
    before(app) {
     
     
      //banner
      // app.get('/api/slider', (req, res, next) => {
      //   res.json(slider)
      // }),
      //推荐
      // app.get('/api/hot',(req,res,next)=>{
        
      //   res.json(dor)
      // }),
      // app.get('/api/page',(req,res,next)=>{
      //   var hasMore,result,start;
      //   if(req.url.indexOf("start")=="-1"){
      //     start=0
      //   }else{
          
      //     start=parameter(req.url).start
          
      //   }
        
      //   if(start<dor.length){
           
      //       hasMore=true;
      //      result=dor.slice(start,start+pagenum);
           
      //   }else{
      //     hasMore=false;
      //     result=[];
      //   }
      //   //let result=dor.splice(start,start+pagenum);
      //   res.json({hasMore,result})
      // }),
      //详情页的查询
      // app.get('/api/del',(req,res,next)=>{
      //     let id=req.query.id;
          
      //     if(typeof id =="undefined"){
      //       res.end("not fount")
      //     }else{
      //       let rl;
            
      //       for (var i=0;i<dor.length;i++){

      //       }
      //       rl= dor.find(function(item){
      //           return item.id==id
      //       })
           
      //       res.json(rl)
      //     }
          
         
      // })
       
      
      

    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
