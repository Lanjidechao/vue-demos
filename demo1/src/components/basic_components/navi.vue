<template>
  <div id="navibar">
    <p class="title">f.alao.viara</p>
    <div v-for="item in items" :key="item.id">
      <router-link :to="item.path">{{item.section}}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      items: [
        {id: '0', section: 'home', path: '/'},
        {id: '1', section: 'blogs', path: '/views/posts'},
        {id: '2', section: 'articles', path: '/views/posts'},
        {id: '3', section: 'photos', path: '/views/posts'},
        {id: '4', section: 'about', path: '/views/posts'}
      ]
    }
  },
  methods: {
    navigation: function (event) {
      console.log(event.target.textContent)
      if (event.target.textContent === 'blogs') {

      }
    }
  }
}
</script>
<style>
  #navibar {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
  #navibar > div {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    transition: all .1s ease-out;
  }
  #navibar > div:hover {
    transform: translateY(-.3rem);
    box-shadow: 0 5px 0px rgba(0,0,0,0.2);
    color:#40a8c4;
  }
  router-link {
    transition: all .2s linear;
  }
  router-link:hover {
    cursor: pointer;
    /* background-color:aquamarine; */
    transition: all .2s ease-in;
  }
  .title {
    position: absolute;
    left: 4vw;
    top: 4vh;
    font-size: 1.5rem;
    font-weight: bold;
    user-select: none;
  }
  .router-link-active {
    text-decoration: none;
  }
  a {
    color: black;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
  }
  a:hover {
    color:#40a8c4;
  }
</style>
