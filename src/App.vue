<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <NumberKeyboard :show="true"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NumberKeyboard from './components/NumberKeyboard'

export default {
  name: 'app',
  components: {
    HelloWorld,
    NumberKeyboard
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
