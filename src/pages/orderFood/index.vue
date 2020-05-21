<template>
     <div class="orderFood">
       <Header></Header>
       <div class="orderFood-container">
          <div class="orderFood-content">
             <span>1111111111111111111</span>
          </div>
       </div>
     </div>
</template>
<script>
  import Header from '../../components/header/index.vue'
  import BScroll from 'better-scroll'
  export default{
    components:{
      Header
    },
    mounted(){
      new BScroll('.orderFood-container', {
        click: true,
        bounce: {
          top: true,
          bottom: false,
        }
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .orderFood
     width 100%
     height 100%
     background-color #fff
     .orderFood-container
       height 100%
       .orderFood-content
         background-color #7e8c8d
         height 100%
         padding-bottom 1px
</style>
