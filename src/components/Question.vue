<template>
  <div class="question">

    <v-card outlined>
      <v-card-title>
        {{ `Question ${this.questionIndex+1}`}}
      </v-card-title>
      <v-card-subtitle>
        {{ $store.state.form.questions[questionIndex].statement }}
      </v-card-subtitle>
    </v-card>
    <br>
    <v-card outlined>
      <v-list-item-group>
        <v-list-item v-for="(option, index) in $store.state.form.questions[questionIndex].options" :key="index" @click="selectOption(index)">
          <v-list-item-action>
            <v-checkbox :input-value="option.checked"></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            {{ option.statement }}
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-card>
    <br>
    <div>

    </div>

    
  </div>
</template>
<script>
export default {
  name: 'Question',
  props: {
    questionIndex: Number,
  },
  created() {
    this.getQuestion()
    this.$store.commit('setLastQuestionVisited', this.questionIndex)
  },
  data: () => ({
    teste: false
  }),
  methods: {
    getQuestion(){
      let question = this.$store.state.form.questions[this.questionIndex]
      console.log(question, this.questionIndex)
    },
    selectOption(optionIndex){
      let questionIndex = this.questionIndex
      this.$store.commit('setOptionValue', {questionIndex, optionIndex})
    }
  }
}
</script>
<style scoped>
.question {
  max-height: calc(100vh - 202px);
  overflow: scroll;
  padding: 1rem;
}
</style>