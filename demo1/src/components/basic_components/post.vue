<template>
  <div @mouseover="linkclasschange" @mouseout="linkclassresume" id="post">
    <div id="post_titlle">
      <div class="tag">{{main_tag}}</div>
      <div id="title" :class="linkclassname" @click="goToPost">
      {{post_title}}
      </div>
    </div>
    <div id="post_brief">
      {{post_brief}}
    </div>
    <div id="post_date">
        {{post_date}}
    </div>
  </div>
</template>
<script>
export default {
  props: ['post_id', 'post_title', 'post_date', 'post_brief', 'main_tag'],
  mounted: function () {
    // document.getElementById('post').addEventListener('mouseover', function () {
    //   document.getElementById('title').style.color = '#4e89ae'
    // })
    // document.getElementById('post').addEventListener('mouseout', function () {
    //   document.getElementById('title').style.color = 'black'
    // })
  },
  methods: {
    goToPost: function () {
      alert('going to post ' + this.post_id + '...')
    },
    linkclasschange: function () {
      this.linkclassname = 'linkactive'
    },
    linkclassresume: function () {
      this.linkclassname = 'link'
    }
  },
  data () {
    return {
      linkclassname: 'link',
      postId: ''
    }
  }
  // in case of dynamic getting post id
  // watch: {
  //   post_id: function (n, o) {
  //     this.postId = n
  //   }
  // }
}
</script>
<style>
#post_titlle {
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 550;
}
.tag {
  user-select: none;
  font-weight: normal;
  font-size: .7rem;
  margin-right: .2rem;
  /* padding: .3rem; */
  padding-right: .3rem;
  padding-left: .3rem;
  padding-top: .2rem;
  padding-bottom: .2rem;
  color: #382933;
  background-color:#99f3bd;
  border-radius: 4px;
}
.tag:hover {
  cursor: pointer;
}
#post_brief {
  margin-top: .3rem;
  color: #8d93ab;
  font-size:.9rem;
}
#post_date {
  margin-top: .3rem;
  color: #767c77;
}
#post {
  padding: 1rem;
}
#post:hover {
  background-color: #e9e9e9;
}
#title {
  user-select: none;
}
#title:hover {
  cursor: pointer;
}
.linkactive {
  color: #4e89ae;
}
.link {
  color:black
}
</style>
