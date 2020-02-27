//axios를 불러와서 여기저기 모든 컴포넌트에 사용할 수 있도록 할것임.(스토어 기능)
// 여기(API)에서는 요청하는 일만 함. 받는일은 다른 곳(store)에서. 여기에는 then이 없으니까.

import axios from 'axios';

// 1.http request & respons 설정
const config = {
    baseUrl: "https://api.hnpwa.com/v0/" //공통된 부분(ask, news, jobs)의 url주소까지만 입력.
  };
  
// 2.api함수들을 정리 : 데이터를 가져오는 행동 대장들
function fetchListItem(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}
// 3. export : 행동대장들을 actions가 쓸 수 있도록 export해둠.
export { fetchListItem } //요청할게 한두개가 아닐것이기 때문에 default를 안붙여 준것.