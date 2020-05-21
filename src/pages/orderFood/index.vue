<template>
     <div class="orderFood">
       <Header></Header>
       <div class="orderFood-container">

       </div>
     </div>
</template>
<script>
  import Header from '../../components/header/index.vue'
  export default{
    components:{
      Header
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .orderFood
     width 100%
     height 100%
     .orderFood-container
       height 100%
       background-color #7e8c8d
</style>
