import Cookies from 'js-cookie';

const state = {
  userName: 'wwd支持',
  isOpen:Cookies.get('PRODUCTION' + '_isOpen') || '',//判断来源  0-关注号进入 1-理事 2-客户
}
const mutations = {
  SET_USER_NAME(state, name) {
    state.userName = name
  },
  SET_IS_OPEN(state, name) {
    state.isOpen = name
    Cookies.set('PRODUCTION' + "_isOpen", name);
  }
}
const actions = {
  // 设置name
  setUserName({ commit }, name) {
    commit('SET_USER_NAME', name)
  },
  setIsOpen({ commit }, name) {
    commit('SET_IS_OPEN', name)
  }
}
export default {
  state,
  mutations,
  actions
}
