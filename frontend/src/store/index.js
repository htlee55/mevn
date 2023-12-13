import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        username: '',
    },
    getters:{
        isLogin(state) {
            return state.username !== '';
        }
    },
    // mutations은 state의 값을 바꿀수 있는 유일한 방법이다.
    // mutations의 첫번째 인자는 state고, 두번째 인자는 호출할때 넘기는 값을 의미한다.
    // username을 받아서 state가 호출될때 username을 넘기겠단 뜻
    mutations: {
        setUsername(state, username) {
            state.username = username;
        },
    },
});