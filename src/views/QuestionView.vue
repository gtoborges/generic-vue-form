<template>
  <div>
    <question :questionIndex="indexNumber"/>
  </div>
</template>
<script>
import Question from '@/components/Question'
export default {
  components: {
    'question': Question
  },
  props: {
    index: String
  },
  data: () => ({
    indexNumber: null
  }),
  created(){
    this.indexNumber = Number(this.index)
  }
}
</script>