<template>
  <div>
    <p>Hello, Vue!</p>
    <p>{{msg}}</p>
    <div id="test">
      <p>{{msg2}}</p>
    </div>
  </div>
</template>
<script>
export default ({
  name: 'HelloVue',
  data () {
    return {
      msg: 'Fala oviara'
    }
  }
})

</script>
