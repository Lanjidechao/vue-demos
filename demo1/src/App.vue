<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <header>
      <navi></navi>
    </header>
    <main>
      <p>we are in main</p>
    </main>
    <footer>
      <p>now you see footer</p>
    </footer>
    <router-view/>
  </div>
</template>

<script>
import navi from './components/basic_components/navi.vue'

export default {
  name: 'App',
  components: { navi }
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
</style>
