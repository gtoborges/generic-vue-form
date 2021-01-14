<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        {{ $store.state.form.title }} 
      </div>
    </v-app-bar>

    <v-main>
      <router-view :key="$route.path" />
    </v-main>
    <v-footer
      color="primary"
      padless
      style="position: fixed; width: 100%; left: 0; bottom: 0;"
    >
      <v-col>
        <v-row justify="space-around" no-gutters v-if="$route.name == 'Question'">
          <v-btn color="primary" :disabled="$route.params.index == 0" 
            @click="$router.push({name: 'Question', params: {index: Number($route.params.index-1)}})"
          >
            <v-icon>fas fa-angle-left</v-icon>
          </v-btn>
          <v-btn color="primary" v-if="!($store.state.form.questions.length-1 == $route.params.index)"
            @click="$router.push({name: 'Question', params: {index: Number($route.params.index+1)}})"
          >
            <v-icon>fas fa-angle-right</v-icon>
          </v-btn>
          <v-btn color="primary" v-else>
            Submit
          </v-btn>
        </v-row>
        <v-divider v-if="$route.name == 'Question'" style="margin-top: 10px"></v-divider>
        <v-row justify="space-around" no-gutters  v-if="$route.name == 'Question'">
          <div v-for="(question, i) in $store.state.form.questions" :key="i" >
            <div class="carousel">
              <v-icon :color="i == $route.params.index ? 'blue lighten-3' : 'white'"
                v-if="(i == $route.params.index) || test(i)"
              >
                fas fa-circle
              </v-icon>
              <v-icon color="white"
                v-else
              >
                far fa-circle
              </v-icon>
            </div>
          </div>
        </v-row>
        <v-row justify="space-around" no-gutters>
          <v-btn color="primary" class="py-6 my-3">
            <router-link :to="{name: 'question-list'}">
              <v-icon color="white">fas fa-list</v-icon>
            </router-link>
          </v-btn>
          <v-btn color="primary" class="py-6 my-3">
            <router-link :to="{name: 'Question', params: { index: $store.state.lastQuestionVisited}}">
              <v-icon color="white">fas fa-edit</v-icon>
            </router-link>
          </v-btn>
        </v-row>
      </v-col>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  },
  data: () => ({

  }),
  computed: {
    checkQuestionAnswer(index){
      let question = this.$store.state.form.questions[index]
      if(question.type == "objective" || question.type == "check") {
        if(question.options.find(el => el.checked)) return true
      }
      return false
    }
  },
  methods: {
    test(index) {
      console.log(index)
      let question = this.$store.state.form.questions[index]
      console.log(index, question)
      if(question.type == "objective" || question.type == "check") {
        if(question.options.find(el => el.checked)) return true
      }
      return false
    }
  }
};
</script>
<style scoped>
.carousel {
  margin-top: 5px;
  margin-bottom: 5px;
  color: white;
}
</style>
