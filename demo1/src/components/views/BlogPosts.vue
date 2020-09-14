<template>
  <div id="blogPosts">
      <post main_tag="vue.js" post_title="Vue项目的第一个Hello world组件：Hello Vue，讨论一下Vue的核心特性以及webpack式开发的项目特点" post_brief="上一节把一个Vue的完整目录及其意义记录了一下，接下来就来写一个我们的第一个Vue组件，一个最简单的Hello Vue
我们在上回说的components文件夹下面新建一个HelloVue.vue文件。"
 post_date="2020-08-28 18:02:44"></post>
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
