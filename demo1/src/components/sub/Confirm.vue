<template>
    <div class="confirm-button">
        <button @click="getButtonClick"> {{text || 'Confirm'}}</button>
    </div>
</template>

<script>
export default {
  name: 'confirm-button',
  props: ['text'], // parent component to child component
  data () {
    return {
      msg: true
    }
  },
  methods: {
    getButtonClick () {
      this.$emit('message', this.msg)
    }
  }
}
</script>
