<template>
  <div class="post">
    <div class="postTitle">
      {{post_title}}
    </div>
    <div class="postContent">
      {{post_content}}
    </div>
    <div class="postFooter">
      {{post_footer}}
    </div>
  </div>
</template>
<script>
export default {
  props: ['post_title', 'post_content', 'post_footer']
}
</script>
<style>

</style>
