<template>
  <div class="QuestionList">
    <!-- <v-card class="fixed-heigth"> -->
      <v-list>
        <v-list-item-group
          v-model="selected"
          active-class="blue--text"
          multiple
        >
          <template v-for="(question, index) in $store.state.form.questions">
            <v-list-item :key="question.index" @click="$router.push({name: 'Question', params: {index: index}})">
              <template v-slot:default="{ active }">
                <v-list-item-content>
                  <v-list-item-title v-text="questionNumber(index)"></v-list-item-title>
                  <v-list-item-subtitle v-text="question.statement"></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-icon
                    v-if="active"
                    color="grey lighten-1"
                  >
                    fas fa-check
                  </v-icon>
                </v-list-item-action>
              </template>
            </v-list-item>

            <v-divider
              v-if="index < $store.state.form.questions.length - 1"
              :key="index"
            ></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    <!-- </v-card> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'QuestionList',
  components: {
  },
  created() {
    this.verifyAsweredQuestions()
  },
  data: () => ({
    selected: [],
  }),
  methods: {
    questionNumber(index) {
      return `Question ${index+1}`
    },
    verifyAsweredQuestions() {
      this.selected = []
      for(let i=0; i<this.$store.state.form.questions.length; i++){
        let question = this.$store.state.form.questions[i]
        if(question.type == "objective" || question.type == "check") {
          if(question.options.find(el => el.checked)) this.selected.push(i)
        } else {
          if(question.answer.length) this.selected.push(i)
        }
      }
    },
    handleClickQuestion(index){
      console.log(index)
    }
  }
}
</script>
<style scoped>
.QuestionList {
  max-height: calc(100vh - 142px);
  overflow: scroll;
}
</style>
