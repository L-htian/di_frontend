<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import login from "./views/login.vue"

export default {
  name: 'app',
  components: {login}

}

</script>

<style>
</style>