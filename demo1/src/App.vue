<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <header>
      <navi></navi>
    </header>
    <main>
      <post main_tag="vue.js" post_title="Vue项目的第一个Hello world组件：Hello Vue，讨论一下Vue的核心特性以及webpack式开发的项目特点" post_brief="上一节把一个Vue的完整目录及其意义记录了一下，接下来就来写一个我们的第一个Vue组件，一个最简单的Hello Vue
我们在上回说的components文件夹下面新建一个HelloVue.vue文件。"
 post_date="2020-08-28 18:02:44"></post>
    </main>
    <footer>
    </footer>
    <router-view/>
  </div>
</template>

<script>
import navi from './components/basic_components/navi.vue'
import post from './components/basic_components/post.vue'
export default {
  name: 'App',
  components: { navi, post }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 1rem;
  /* display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center; */
  color: #2c3e50;
  /* padding: 2rem; */
}
header {
  height: 5rem;
  top: 0;
  border-bottom: 1px solid rgb(221, 219, 218);
  padding: .25rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}
main > * {
  margin-top: 1.5rem;
}
body {
  background-color: #f8f8f8;
}
</style>
