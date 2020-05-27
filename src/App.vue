<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.isShow"></FooterGuide>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/index.vue'
export default {
  name: 'App',
  components:{
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  html,body
    height 100%
    width 100%
    overflow hidden
  #app
    width 100%
    height 100%
</style>
