<template>
  <div class="stories-view" append="tree">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import AppHeader from '../components/app-header.vue'

  export default { components: { AppHeader } }
</script>

<style scoped>
  .stories-view {
    height: 100%;
  }
</style>
