import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 2
}
const mutations ={
  add(state){
    state.count++;
  },
  reduce(state){
    state.count--;
  },
  testadd(state,n){
    state.count+=n;
  },
  mapMutations(){
    alert('mapMutations实现函数调用')
  }
}
const getters = {
  count: function(state){
   return  state.count +=100;
  }
}
const actions = {
  // context是上下文对象
  addAction(context){
    context.commit('testadd',10);
    setTimeout(() => {
      context.commit('reduce');
    }, 1000);
  },
  reduceAction({commit}){
    commit('reduce');
  }
}

//模块化使用
// const moduleA ={
//   state,mutations,getters,actions
// }
// export default new Vuex.Store({
//   modules: {
//     a: moduleA
//   }
// })
export default  new Vuex.Store({
    state,
    mutations,
    getters,
    actions
    
  })
