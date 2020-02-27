import Vue from 'vue'
import Vuex from 'vuex'
import { fetchListItem } from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({  //actions이 mutations을 실행해주고, mutations가 state에 값을 주는 것.
  state: {
    list: []  // 데이터 저장하는 일
  },
  mutations: {
    SET_LIST(state, list) {   // state에 저장
      state.list = list;
    }
  },
  actions: {
    // api/index.js에 데이터 가져오는 행동대장들을 호출해서 받고, 뮤테이션에 넘김   // promise 방식
    FETCH_LIST(context, pageName) {  //두개의 인자를 받아야함. context는 정해져 있는 것(자동으로 생겨서 받아오게 되는 것). 
      return fetchListItem(pageName)
      .then(res => {
        context.commit('SET_LIST', res.data);  //받아온 데이터를 res.data에 주는 것.
        return res;
      })
      .catch(err => { //catch는 에러가 생긴 것을 넣는 것. 에러는 적어도 되고, 안적어도 됨.
        console.log(err);
        
      })
    }
  },
  modules: {
  }
})
