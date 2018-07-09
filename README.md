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

>使用组件步骤：
（1）引入组件     import FooterNav from '../../components/footer.vue'

（2）局部注册     注意写在export default内部，components:{FooterNav}

（3）使用组件    <footer-nav></footer-nav> 注意命名，驼峰法定义的组件FooterNav需在使用时用短横线连接<footer-nav>

再回到浏览器，可以看到首页已经有底部导航了

<img src="https://upload-images.jianshu.io/upload_images/5700710-2a231bc36c3c50ea.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/345" alt="">

### 4.创建人员管理页面

#### 4.1 创建页面

同样的，因为人员管理可以算另外一个模块，所以我们在src/views/新建一个文件夹manage，再在manage文件夹下新建index.vue


<img src="https://upload-images.jianshu.io/upload_images/5700710-df88d8c1ac275a4a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/533" alt="">

同样在管理页面引入了底部导航组件footer.vue

现在管理页面创建完成，但还需在路由配置中引入才可以通过路由/manage去访问

<img src="https://upload-images.jianshu.io/upload_images/5700710-0ca54081bea6a1a1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/676" alt="">

接下来就去浏览器检验，我们定义的两个路由之间的跳转

<img src="https://upload-images.jianshu.io/upload_images/5700710-0f0fe5654a30f4fc.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/456" alt="">

#### 4.2 为底部导航绑定class

可以看到由于没有给底部导航设置active状态的样式，切换起来不是很明显，所以我们可以给底部导航绑定class值

在首页使用<foot-nav>时绑定class类名isIndex
<img src="https://upload-images.jianshu.io/upload_images/5700710-a262e4ad97a126d5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/664" alt="">

这里使用v-bind指令来绑定class，第一个属性为class名字，第二个属性为布尔值，为true，则表示该组件有这个class，为false则没有。所以，当访问首页模块时，底部导航有一个类名isIndex，我们可以在底部导航内部为isIndex设置样式。

同样的，也在管理页面manage.vue为底部导航绑定class isManage。

>另外还需注意一点，data在组件内部得写为一个函数，通过return返回数据值，这是因为组件之间是共享的，但是要保证它们各自的数据是私有，互不影响的，所以要给每个组件返回新的data对象。这一点官网也有说明vuejs官网——data必须是函数。

返回浏览器查看，绑定的class已经生效
<img src="https://upload-images.jianshu.io/upload_images/5700710-3eac535e83801e05.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/548" alt="">

#### 4.3 编写功能
前面管理页面把姓名列表写死了，为方便实现增删改功能，接下来我们得通过数据模拟来实现列表渲染。

##### 定义数据

（1）在data函数下新增peoples数组

<img src="https://upload-images.jianshu.io/upload_images/5700710-2eaa15cffd555a58.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/424" alt="">

（2）列表渲染

<img src="https://upload-images.jianshu.io/upload_images/5700710-62c065d2a92004de.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/470" alt="">

>列表渲染用v-for指令，item为自定义的名字，指向数组中的每一个个体，peoples为我们在data函数中定义的数组名字，模板渲染采用{{ }}

返回浏览器查看效果

<img src="https://upload-images.jianshu.io/upload_images/5700710-0cbd00105cdffa2b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/329" alt="">

#### 4.3.1 新增功能

##### 控制输入框显示与隐藏

我们先将新增人员输入框隐藏，当点击“新增”按钮时再显示，要实现这个功能我们需要用到条件渲染。

<img src="https://upload-images.jianshu.io/upload_images/5700710-d8c07a483115af77.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/473" alt="">
<img src="https://upload-images.jianshu.io/upload_images/5700710-f2e1b8762f923888.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/510" alt="">

>首先用到了v-show指令，showAdd是一个布尔值，为true则渲染，为false则隐藏

>v-show指令与v-if指令的区别就在于，前者一开始就加载，更适用于频繁的切换，后者需首先判断布尔值，为true才加载渲染

>同时我们给按钮增加一个点击事件（v-on是绑定事件指令），用于控制showAdd的值从而控制输入框div的隐藏与显示

>vue中方法用methods:{}包裹，里面的add(){}也等同于add:function(){}

###### 查看效果
<img src="https://upload-images.jianshu.io/upload_images/5700710-9a846cb874cdaa0d.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/331" alt="">

##### 新增事件
给输入框双向绑定其输入的数据，给输入区域的“确定”按钮绑定一个事件去获取输入框输入的数据并保存进数组。

<img src="https://upload-images.jianshu.io/upload_images/5700710-eca1a99deaa108c8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/588" alt="">
<img src="https://upload-images.jianshu.io/upload_images/5700710-0eabc0ccd61a7e9a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/530" alt="">

>v-model指令是双向绑定，一般用于表单组件

>当输入框的值改变，其绑定的nameValue跟着改变

>同理，当绑定的nameValue值改变，输入框的值也跟着改变

我们这里还做了判断，如果什么都不输，或输入空格就弹出提示，只有当输入的值不为空时再保存

###### 查看效果

<img src="https://upload-images.jianshu.io/upload_images/5700710-08d6646e3c0be3fa.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/647" alt="">

#### 4.3.2 删除功能
删除功能有一个重点，我们得获取列表的index索引值，来判断到底删除哪一个值

更改一下列表循环，加入索引，并将索引值绑定到td标签上，通过event点击事件去获取td标签上的id，从而去删除索引值为id的值

<img src="https://upload-images.jianshu.io/upload_images/5700710-068a57172f3b5093.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/672" alt="">
<img src="https://upload-images.jianshu.io/upload_images/5700710-685c788aa2cdbfb2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/316" alt="">

###### 查看效果
<img src="https://upload-images.jianshu.io/upload_images/5700710-839adf061d19ff7c.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/354" alt="">

#### 4.3.3 编辑功能

首先新建编辑输入区域，通过点击“编辑”控制其渲染。

<img src="https://upload-images.jianshu.io/upload_images/5700710-06ce559b8fc3e74d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/700" alt="">

>当点击“编辑”字样时，触发edit事件，edit事件主要控制showEdit为true，让编辑输入区域渲染出来，同时还获取td标签上的id值，保存到一个变量editId中。

>同样也给编辑输入框双向绑定一个值newName。

>当点击“确定”按钮时，触发editName事件，editName事件首先获取editId的值以及input绑定的newName值，再更改索引值为editId的name属性


<img src="https://upload-images.jianshu.io/upload_images/5700710-bd5e3b9242f9ceb8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/473" alt="">
<img src="https://upload-images.jianshu.io/upload_images/5700710-9e57bb84bac37ba7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/508" alt="">

###### 查看效果
<img src="https://upload-images.jianshu.io/upload_images/5700710-9bd80bd83a4fec95.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/354" alt="">

到这里，我们也就实现了一个具有增删改功能的小demo。

我再把本例中用到的重要的知识点简单梳理一遍

>1.每一个单文件组件.vue通常都是由三部分构成template、style、script（为什么说通常，因为也可以只有模板template，不写任何样式和功能，但大多数组件都会有自己的样式和功能）。其中style有2个点，第一，可以引用外部样式，第二，作用域scoped。

>2.单文件组件的引用，需要先在script中用import引用（同时命名）格式为
>import [命名] from [相对路径]
>再用components:{ [命名] }局部注册
>最后在模板中使用，注意命名格式。如果是驼峰HeadNav或headNav，使用时就是<head-nav>

>3.多使用vue指令，常用的有v-show，v-if，v-on，v-bind，v-model





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

