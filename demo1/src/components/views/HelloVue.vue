<template>
  <div>
    <p>Hello, Vue!</p>
    <!-- <p>{{msg}}</p> -->
    <div id="test">
      <p>{{msg2}}</p>
    </div>
    <div id="v-bind">
      <span v-bind:title="hover_message">
        hover to see the message.
      </span>
    </div>
    <div id="v-if">
      <span v-if="seen">Now you see me</span>
    </div>
    <div style="text-align: left" id="v-for">
      <ol>
        <li v-for="todo in todos" v-bind:key="todo.id">
          {{ todo.text }}
        </li>
      </ol>
    </div>
    <div id="double">
      <p>{{ msg }}</p>
      <input v-model="msg">
    </div>
    <div id="input">
      <p>{{ userInput }}</p>
      <button v-on:click="reverseMessage">reverse the message</button>
    </div>
    <div style="margin-top: 1rem;text-align:left;" id="component">
      <todo-item
        v-for="item in groceryList"
        v-bind:todo="item"
        v-bind:key="item.id"
        ></todo-item>
    </div>
    <div style="margin-top: 1rem">
    <todo
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id"
      ></todo>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import Todo from '../sub/Todo'

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
})
export default ({
  name: 'HelloVue',
  components: {
    Todo
  },
  data () {
    return {
      msg2: 'Fala oviara',
      inputStr: 'Fala oviara',
      hover_message: 'page is loaded at: ' + new Date().toLocaleString(),
      seen: false,
      msg: 'Fala oviara',
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ],
      userInput: 'Fala oviara',
      groceryList: [
        { id: 0, text: '蔬菜' },
        { id: 1, text: '奶酪' },
        { id: 2, text: '随便其它什么人吃的东西' }
      ]
    }
  },
  methods: {
    reverseMessage () {
      this.userInput = this.userInput.split('').reverse().join('')
    }
  }
})

</script>
<style>
  div {
    margin-top: 3em;
  }
</style>
