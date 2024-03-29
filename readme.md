# 大作业前端开发规范

## 项目地址

[https://github.com/YuChenLiao/Posttest](https://github.com/YuChenLiao/Posttest)

## 测试链接

<http://101.37.80.152/#/>(已失效，现用于展示前端大作业)

## 技术栈

[react](https://react.docschina.org/tutorial/tutorial.html) + [dva](https://dvajs.com/) + [antd](https://ant.design/docs/react/getting-started-cn)

推荐使用 vscode 或者 webstorm 进行开发 ，缩进一律采用两格缩进，如下

~~~html
<div>
  <p></p>
</div>
~~~

项目本地启动方式如下

~~~cmd

//第一次运行
npm i
npm start

//非第一次运行
npm start

~~~

## 开发规范

对应功能文件要放在对应目录下，主要工作区为 src 目录；

页面级组件及对应样式表放在src/routes 目录下；

子组件及对应样式表放在 src/components 下；

引入的图片，音乐，视频等静态资源放在 src/assets 目录下；

使用 dva 编写的状态管理文件放在 src/models 目录下；

页面级组件路由统一挂载到 router.js 上，路由统一使用小写，写法自行参考文件内容；

http 请求一律使用 [axios](https://www.axios-http.cn/) 进行发送,使用方法自行参考文档；

antd 尽量不要用于前台页面（给用户展示的页面），尽量在商家专属页面和管理员页面使用；

不要随意改动其他目录下的文件；

不要随意添加新的依赖；

开发环境统一为 [Node.js](http://nodejs.cn/)，请自行安装并配置环境；

包管理统一使用 npm 进行，请自行参考文档或教程进行配置；

## 命名规范

文件，变量与函数一律采用驼峰命名法，如 one person 命名为onePerson；

组件名称一律采用双驼峰命名，如 search tab 命名为 SearchTab；

不同的函数之间请隔开一个空行；

样式表文件（css）中，不同的样式之间也要隔一个空行；

## 协作与提交规范

统一使用 git 进行协作，请安装好 git 并注册 github 账号；

禁止直接提交到 master 分支，提交前请在本地新建分支并 push 到对应分支上（谁直接 push 到 master 上我扬了谁）；

每次提交的 commit 依照简洁明了的原则，请不要随意编写 commit 信息；

在确认功能本地运行确保无误后，请提交 pr 申请合并分支到 master 上；

[git 教程](https://www.liaoxuefeng.com/wiki/896043488029600);
