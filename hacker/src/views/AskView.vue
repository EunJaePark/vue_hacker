<template>
  <ol class="list">
      <li v-for="item in list" v-bind:key="item.id">
          <b>{{ item.time_ago }} </b>
          <span>by {{ item.user }}</span> <br/>
          <a v-bind:href="item.url">{{ item.title }}</a>
      </li>
  </ol>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            list: [],
        }
    },
    created() {
        axios.get('https://api.hnpwa.com/v0/ask/1.json').
        then( res => {
            this.list = res.data;
        })
    }
}
</script>

<style>
.list li {padding-left:10px; list-style-type: none}
.list li + li {margin-top:20px}
.list li > a {text-decoration: none; font-size:22px}
.list li > b {font-style: normal; font-size:12px; color:#999}
.list li span {font-style: normal; font-weight:700; font-size:12px; color:#999;}
.list li i {font-style: normal; font-size:12px; color:cornflowerblue}
</style>