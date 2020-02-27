import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/', //이게 주소창에 직접 쳐야하는 이름.
    name: 'home', //얘는 그냥 식별하기 위한 이름. 주소창에 치는 이름이 아님.
    component: NewsView
  },
  {
    path: '/news', 
    name: 'news', 
    component: NewsView
  },
  {
    path: '/ask', 
    name: 'ask', 
    component: AskView
  },
  {
    path: '/jobs', 
    name: 'jobs', 
    component: JobsView
  }
];

//이렇게 export할 때에는 default를 안줬기 때문에, 받는 곳에서 {}안에 router이름을 넣어줘야한다.(받는곳은 main.js)
export const router = new VueRouter({routes});

// export default router;  //이렇게 쓰면 그냥 router로 받으면 됨.
