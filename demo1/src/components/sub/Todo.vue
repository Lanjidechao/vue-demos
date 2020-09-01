<template>
    <li>{{todo.text}}</li>
</template>
<script>
export default {
  name: 'todo',
  props: [
    'todo'
  ]
}
</script>
<style>
  li {
    text-align: left;
  }
</style>
