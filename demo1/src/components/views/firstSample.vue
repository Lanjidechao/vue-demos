<template>
  <div>
    {{foo}}
    <button v-on:click="click">change it</button>
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
    <div>
      <p>{{msg}}</p>
      <input v-model="msg">
    </div>
    <div>
      <p>{{msg2}}</p>
      <input v-model="msg2">
    </div>
    <div>
      <p>{{msg3.attr1}}</p>
      <input v-model="msg3.attr1">
    </div>
    <div>
      <p>{{msg4}}</p>
      <input v-model="msg4">
    </div>
    <div>
      <p>{{msg5}}</p>
      <input v-model="msg5">
    </div>
  </div>
</template>
<script>
var obj = {foo:'bar',msg:'init',msg2:'init2',msg3:{attr1:'1',attr2:'2'},msg4:'immediate',msg5:'method chain'};
export default {
  data() {
    return obj;
  },
  watch: {
    msg(newVal, oldVal) {
      console.log("oldVal is: " + oldVal + " newVal is: " + newVal);
    },
    msg2:"methodway",
    msg3: {
      handler(newVal, oldVal) {
      console.log("oldVal is: " + JSON.stringify(oldVal) + " newVal is: " + JSON.stringify(newVal));
      },deep:true
    },
    msg3attr: {
      handler(newVal, oldVal) {
      console.log("oldVal is: " + JSON.stringify(oldVal) + " newVal is: " + JSON.stringify(newVal));
      },deep:true
    },
    msg4: {
      handler(newVal, oldVal) {
      console.log("this should be called immediately.");
      },immediate:true
    },
    msg5: [
      "methodchain1",
      function methodchain2(oldVal,newVal) {
        console.log("second method");
      },
      {
        handler(newVal, oldVal) {
          console.log("third method")
        },deep:true
      }
    ]
  },

  methods: {
    click() {
      obj.foo = 'baz';
    },
    methodway(newVal, oldVal) {
      console.log("oldVal is: " + oldVal + " newVal is: " + newVal);
    },
    methodchain1(newVal, oldVal) {
      console.log("first method");
    }
  },

  computed: {
    msg3attr() {
      return this.msg3.attr1;
    }
  }
}
</script>