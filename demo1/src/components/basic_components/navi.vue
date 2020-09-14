<template>
  <div id="navibar">
    <p class="title">f.alao.viara</p>
    <div v-for="item in items" :key="item.id">
      <span @click="navigation">{{item.section}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      items: [
        {id: 1, section: 'blogs'},
        {id: 2, section: 'articles'},
        {id: 3, section: 'photos'},
        {id: 4, section: 'about'}
      ]
    }
  },
  methods: {
    navigation: function (event) {
      console.log(event.target.textContent)
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
  span {
    transition: all .2s linear;
  }
  span:hover {
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
</style>
