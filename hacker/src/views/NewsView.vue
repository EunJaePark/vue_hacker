<!--views에 들어있는 컴포넌트가 화면에 보여지는 부분. 얘도 컴포넌트이지만, 일하는 사람들은 '뷰'화면 이라고 부른다고함..-->
<template>
    <!-- <div>News 화면</div> -->
    <ol class="list">
        <li v-for="item in list" v-bind:key="item.id"><!--item마다 고유 key값을 줘야함.-->
            <b>{{ item.time_ago }} </b>
            <span> by {{ item.user }}</span> <br/>
            <a v-bind:href="item.url">{{ item.title }}</a>
        </li>
    </ol>
</template>

<script>
// import axios from 'axios'; //data 가져오는데 사용. //axios는 기본설치가 아님.

export default {
    // data() {
    //     return {
    //         list: [],
    //     }
    // },
    computed: {
        list() {
            return this.$store.state.list;
        }
    },
    created() {
        // // axios.get().then()
        // axios.get('https://api.hnpwa.com/v0/news/1.json').
        // then(res => { //res는 reponse를 줄인말. //arrow함수를 써야지 this가 얘의 바로 위를 가리킨다.
        //     // console.log(res); 
        //     this.list = res.data;    
        // })

        this.$store.dispatch('FETCH_LIST', 'news');
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