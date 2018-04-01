<template>
  <div class="hi1">
    <h1>{{ msg }} -- {{$route.params.id}} -- {{$route.params.name}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Hi1',
  data () {
    return {
      msg: 'Hi1 page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
