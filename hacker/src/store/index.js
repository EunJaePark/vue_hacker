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
    // api/index.js에 데이터 가져오는 행동대장들을 호출해서 받고, 뮤테이션에 넘김   
	// axios는 "promise 방식"을 기반으로 api를 제공한다.
	// : 어떤 작업이 성공했을 때(resolve), promise 객체의 then() 함수에 넘겨진 파라미터(함수)를 단 한번만 호출하겠다는 약속입니다. 또한 실패했을 경우(reject)에도 catch()함수를 통해서 실패 이후의 작업을 처리할 수 있습니다. 
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
