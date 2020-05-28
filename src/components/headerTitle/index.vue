<template>
  <div class="title">
    <slot name="left"></slot>
    <span>{{title}}</span>
    <slot name="right"></slot>
  </div>
</template>
<script>
  export default{
      props:{
          title:String
      }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .title
    height 90px
    text-align center
    line-height 90px
    font-size 30px
    background rgba(246,246,246,1 )
    box-shadow 0px 2px 2px 0px rgba(228,228,228,0.36)
    position relative
    .header_back
      position absolute
      top 0
      left 20px
      .icon-arrowLeft
        font-weight 700
        font-size 40px

</style>
