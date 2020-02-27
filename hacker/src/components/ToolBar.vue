<!--def를 치고 엔터누르면 자동으로 틀 완성해줌.-->
<template>
    <!--template안에는 하나로 감싸져야한다. 두개 들어갈 수 없음.-->
    <header>
        <!--a href와 같은 기능-->
        <!--a href를 쓰면 파일을 배포하면 또다시 파일경로를 바꿔줘야하지만, router-link를 쓰면 자동으로 vue파일 속의 컴포넌트로 연결시켜줌.-->
        <router-link to="/news">News</router-link>
        <router-link to="/Ask">Ask</router-link>
        <router-link to="/Jobs">Jobs</router-link>
    </header>
</template>

<script>
export default {

}
</script>

<style>
header {
    position: relative;
    padding:20px 30px;
    background:black;
    font-size:24px;
    border-bottom:8px solid lime;
}
header h1 {position: absolute; color:white; top:21px; right:30px; font-size:18px;}
header a {color:white; text-decoration: none; padding-bottom:3px; }
header a + a {margin-left:20px}
header .active {
    color:coral;
    border-bottom:3px solid coral
}
</style>