<template>
  <div id="blogPosts">
    <post post_id='1' main_tag="vue.js" post_title="Vue项目的第一个Hello world组件：Hello Vue，讨论一下Vue的核心特性以及webpack式开发的项目特点" post_brief="上一节把一个Vue的完整目录及其意义记录了一下，接下来就来写一个我们的第一个Vue组件，一个最简单的Hello Vue
我们在上回说的components文件夹下面新建一个HelloVue.vue文件。"
 post_date="2020-08-28 18:02:44"></post>
    <post post_id='2' main_tag="vue.js" post_title="一个Vue项目 目录里的每一个 文件夹 都是干什么的？" post_brief="因为觉得react的设计哲学不太对我的口味，转到vue玩玩，初始化一个vue项目之后（用vue create/ vue init 都可以）
我们得到的项目目录是这样的："
 post_date="2020-08-26 11:27:20"></post>
    <post post_id='3' main_tag="vue.js" post_title="Vue 组件中5种Watch方式的使用" post_brief="watch是一个对象，这个对象的键是需要观察的表达式，值可以是直接方法、方法名、包含选项的对象等等，Vue实例会在实例化时调用$watch(), 遍历watch对象的每一个属性，并且观察。"
      post_date="2020-09-10 18:02:44"></post>
  </div>
</template>
<script>
import post from '@/components/basic_components/post.vue'
export default {
  name: 'BlogPosts',
  components: { post }
}
</script>

<style>
</style>
