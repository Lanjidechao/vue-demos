<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <header>
      <navi></navi>
    </header>
    <main>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
    </main>
    <footer>
    </footer>
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
  width: 70vw;
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
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
