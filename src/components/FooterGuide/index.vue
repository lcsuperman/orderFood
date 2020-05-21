<template>
  <footer class="foot-guide">
      <span class="guide_item " :class="{on:$route.path == '/orderFood'}" @click="goto('/orderFood')">
         <span class="item_icon">
            <i class="iconfont icon-cup"></i>
         </span>
         <span>点餐</span>
      </span>
      <span class="guide_item " :class="$route.path === '/order'? 'on' : ''" @click="goto('/order')">
         <span class="item_icon">
            <i class="iconfont icon-dingdanguanli-"></i>
         </span>
         <span>取餐</span>
      </span>
      <span class="guide_item " :class="$route.path === '/me'? 'on' : ''" @click="goto('/me')">
         <span class="item_icon">
            <i class="iconfont icon-wode"></i>
         </span>
         <span>我的</span>
      </span>
    </footer>
</template>
<script>
  export default{
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>
<style  lang="stylus" rel="stylesheet/stylus">
  @import "../../../static/stylus/mixins.styl"
    .foot-guide
      border-top 1px solid #eee
      position fixed
      left 0
      bottom 0
      width 100%
      height 98px
      display flex
      justify-content space-around
      align-items center
      background-color white
      .guide_item
        display flex
        flex-direction column
        align-items center
        font-size 24px
        &.on
          color #C71423
        .item_icon
          margin-bottom 10px
          .iconfont
            font-size 40px
</style>

