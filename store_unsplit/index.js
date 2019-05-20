/**
 * actions和上面的Mutations功能基本一样，不同点是，actions是异步的改变state状态，而Mutations是同步改变状态。
 * ==============================================================================================================
 */

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    platInfo: {},
    user: {}
  },
  mutations: { // 包含了多个直接更新state函数的对象
    INCREMENT (state) {
      state.count = state.count + 1
    },
    DECREMENT (state) {
      state.count = state.count - 1
    },
    GETUSER (state, userInfo) {
      state.user = Object.assign({}, state.user, userInfo)
    },
    GETPLATINFO (state, platInfo) {
      var info = platInfo
      info.updateTime = new Date(info.updateTime)
      state.platInfo = Object.assign({}, platInfo, info)
    }
  },
  getters: { // 当读取属性值时自动调用并返回属性值
    evenOrOdd (state) {
      return state.count % 2 === 0 ? '偶数' : '奇数'
    }
  },
  actions: { // 包含了多个对应事件回调函数的对象
    incrementIfOdd ({ commit, state }) { // 带条件的action
      if (state.count % 2 === 1) {
        commit('INCREMENT')
      }
    },
    incrementAsync ({ commit }) { // 异步的action
      setTimeout(() => {
        commit('INCREMENT')
      }, 2000)
    },
    getUserInfo ({ commit }) {
      var data = {
        name: 'flutter',
        id: '001fa',
        role: 'normal'
      }
      commit('GETUSER', data)
    },
    getPlatInfo ({ commit }) {
      var data = {
        name: '微信',
        version: '10.0.4',
        updateTime: +new Date()
      }
      commit('GETPLATINFO', data)
    }
  }
})
export default store // 用export default 封装代码，让外部可以引用
