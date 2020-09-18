<template>
  <div class="post">
    <div class="postTitle">
      {{this.$route.params.post_title}}
    </div>
    <div class="postContent">
      {{this.$route.params.post_content}}
    </div>
    <div class="postFooter">
      {{this.$route.params.post_footer}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'postDetailPage',
  props: ['post_title', 'post_content', 'post_footer']
}
</script>
<style>
  .post {
    width: 100%;
    padding: 1rem;
  }
</style>
