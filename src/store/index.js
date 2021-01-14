import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    form: require('../questionario/questionario.json'),
    lastQuestionVisited: 0
  },
  mutations: {
    setOptionValue(state, {questionIndex, optionIndex}) {
      console.log('mutation: ', questionIndex, optionIndex)
      if(state.form.questions[questionIndex].type == 'objective') {
        if(state.form.questions[questionIndex].options[optionIndex].checked) return state.form.questions[questionIndex].options[optionIndex].checked = false
        for(let option of state.form.questions[questionIndex].options) option.checked = false
        state.form.questions[questionIndex].options[optionIndex].checked = !state.form.questions[questionIndex].options[optionIndex].checked
      } else {
        state.form.questions[questionIndex].options[optionIndex].checked = !state.form.questions[questionIndex].options[optionIndex].checked
      }
    },
    setLastQuestionVisited(state, index) {
      state.lastQuestionVisited = index
    }
  }
})
