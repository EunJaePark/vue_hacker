<!--html에서 .wrap를 만들듯이 App.vue가 그 역할을 하는 것이라고 생각하면 됨.-->
<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
export default {
  components: {ToolBar}
}
</script>

<style>
body {font-family: 'Playfair Display', serif; font-size:18px; padding:0; margin:0;}
a {color: black;}
* {margin:0; padding:0}
li {list-style-type: none;}
p + p {margin-top:20px}
#app {padding:0 20px}
.content {padding:30px 20px}
</style>
