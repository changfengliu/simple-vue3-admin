import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  getters: {
    count(state) {
      return state.count
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

export default (app) => {
  app.use(store)
}

// 参考：https://next.vuex.vuejs.org/