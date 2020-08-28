<template>
    <div>
    <span>Hello, Vue!</span>
    <span>
        {{msg}}
    </span>
    <confirm text="register" @message="getMessage"></confirm>
    <navigate></navigate>
    </div>
</template>
<script>
import Confirm from '../sub/Confirm'
import Navigate from '../sub/Navigate'
export default {
  name: 'First',
  components: {
    Confirm,
    Navigate
  },
  data () {
    return {
      msg: 'Fala oviara'
    }
  },
  methods: {
    getMessage (val) {
      alert(val)
    }
  }
}
</script>

<style>

</style>
