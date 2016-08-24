# webpack-react-ui
###制作微信网站模板

* **es6**
* **react-weui**
* **less**
* **本地动态生成代码块**

#get started
* **npm run dev** 在本地8080端口起测试服务
* **npm run online** 打包上线代码，会把链接替换为线上地址，直接发布dist包即可

#说明
	
关于[hmtl-yu-plugin](https://github.com/yursile/html-yu-plugin)

这个工具可以动态生成css,js甚至html代码块。在webpack plugin配置如下：
```javascript
new HtmlWebpackPlugin({           
    filename:'/view/index.html',  
    template:'./src/view/index.html', 
    inject:true,  //this value must be true
    heads:['response'],  //会把webpack chunks 中的response放到head标签里，  通常放自适应的代码
    blockFile:"./src/view/statistics.html", //把这个目录下的代码块放到body结束标签之前，  通常放统计代码
    headBlockFile:"./src/view/loading.html"  //把这个目录下的代码块放到body开始标签之后，通常放loading
})
```
