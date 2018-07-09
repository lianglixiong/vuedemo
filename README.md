# 前言

在开始开发实例前，应首先了解一下vue-cli的项目结构。接着我们一起来实现一个小demo——人员管理，功能简单，通过这个实例让大家熟悉使用vue-cli开发项目的一些操作，加深对vue-cli项目结构的印象。
# 实例功能简述
人员管理项目，有两个页面，首页和管理页，管理页主要实现一个简单的增删改功能，各个功能如下所示（附<a href="https://github.com/lianglixiong/vuedemo">github地址</a>）

<img src="https://upload-images.jianshu.io/upload_images/5700710-6a465be80112dad3.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/509" alt="">

<img src="https://upload-images.jianshu.io/upload_images/5700710-fbe7f267b919dd67.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/354" alt="">

<img src="https://upload-images.jianshu.io/upload_images/5700710-933d96f19e4bb0ae.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/354" alt="">

<img src="https://upload-images.jianshu.io/upload_images/5700710-7a2b5bb8bbfd6161.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/354" alt="">

# 创建项目

首先第一步，就是创建我们的项目，打开cmd，进入到想要创建项目的目录下，我这里是到d盘的根目录下，然后输入vue init webpack manage，敲回车。
<img src="https://upload-images.jianshu.io/upload_images/5700710-73d678eb35c0257e.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/652" alt="">

<img src="https://upload-images.jianshu.io/upload_images/5700710-5f5f4dcf5675fffb.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/652https://upload-images.jianshu.io/upload_images/5700710-5f5f4dcf5675fffb.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/652" alt="">

<img src="https://upload-images.jianshu.io/upload_images/5700710-775193ed5b9b4fb5.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/652" alt="">

接着输入npm run dev 运行项目，可以看到浏览器自动打开，显示如下
<img src="https://upload-images.jianshu.io/upload_images/5700710-2deca770c11ce747.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/700" alt="">

# 项目开发

### 1.创建首页
因为我做的人员管理项目是wap端的，所以我们首先在主页index.html中加上meta标签
```
<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
```

### 1.1 新建目录

为方便管理，我们在src文件夹下新建一个views文件夹，用于存放所有的模块组件。

在views文件夹下新建index文件夹，再在index文件夹下新建index.vue作为项目的首页。
<img src="https://upload-images.jianshu.io/upload_images/5700710-6e6ceb39ffec342b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/204" alt="">

### 1.2 编辑首页index.vue

<img src="https://upload-images.jianshu.io/upload_images/5700710-a7ddaaeff7e88b8f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/357" alt="">
接着在路由配置中引入我们刚创建的首页，并更改一下路由配置

<img src="https://upload-images.jianshu.io/upload_images/5700710-56077a89652801c9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/417" alt="">
打开浏览器，看到更改的内容已经自动渲染

<img src="https://upload-images.jianshu.io/upload_images/5700710-6919fe47dc763e37.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/700" alt="">

### 2. 添加底部导航组件
因为底部导航组件是公共组件，在两个页面都有引用，所以我们把它建在components文件夹下，命名为footer.vue。

<img src="https://upload-images.jianshu.io/upload_images/5700710-415cd353a2b7dc52.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/700" alt="">
div的fixed样式写在了公共样式public.css里面，并在App.vue中引入，作用域设为全局

<img src="https://upload-images.jianshu.io/upload_images/5700710-6d202121f9cdcd17.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/650" alt="">

<img src="https://upload-images.jianshu.io/upload_images/5700710-439430cf08c62961.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/653" alt="">

对这个页面主要讲两点：
#### （1）<router-link>
可以看到footer.vue使用了<router-link>标签，该标签主要实现跳转链接功能，属性to='/'即是跳转到path为'/'的路径（即我们在路由配置中定义的Index路由）

#### （2）scoped

>在<style>标签上添加scoped，声明作用域，样式效果只在该页面内生效，不污染全局。

### 3. 在首页中引入底部导航组件

>我们刚刚创建了footer.vue，但还未引入，在首页模块views/index/index.
vue中引入该组件

<img src="https://upload-images.jianshu.io/upload_images/5700710-439430cf08c62961.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/653" alt="">



# vuedemo
a simple vue-cli demo about manage<br/>
vue-cli入门小demo，包含两个模块：首页以及管理页<br/>
管理页只有简单的增删改功能<br/>
下载后需安装依赖（npm install）再运行（npm run dev）
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

```


***

