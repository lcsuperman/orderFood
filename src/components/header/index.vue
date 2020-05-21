<template>
   <div class="header">
     <div class="content-wrapper">
        <div class="avatar">
          <img src="../../../static/image/timg.jpg" alt="">
        </div>
        <ul class="shopInfo">
          <!--店铺名称-->
          <li class="name">蜜雪冰城（留庄一店）</li>
          <!--店铺地址和信息-->
          <li>留庄第二中学南100米对面</li>
          <!--优惠信息-->
          <li>优惠 | 满30元减5元</li>
        </ul>
     </div>
     <div class="bulletin-wrapper">
       <div class="bulletin-title">公告</div>
       <div class="bulletin-info">欢迎光临！今天奶茶满30元减5元，快来组团购买吧！</div>
     </div>
     <!--背景-->
     <div class="background">
       <img src="../../../static/image/timg1.jpg" alt="">
     </div>
   </div>
</template>
<script>

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .header
    width 100%
    background: rgba(7,17,27,.5)
    color #fff;
    overflow hidden
    position relative
    .content-wrapper
      -webkit-box-align center
      -moz-box-align:center;
      padding 40px 60px 20px 60px
      position: relative;
      display flex
      .avatar
         width 130px
         height 130px
         margin-right 30px
         img
           width 100%
           height 100%
       .shopInfo
         li
           margin-bottom 16px
         .name
           margin-top 10px
           font-size 30px
           font-weight bold

    .bulletin-wrapper
      -webkit-box-align: center;
      -moz-box-align:center;
      background  rgba(7,17,27,.4);
      height 56px
      padding  0 20px
      display flex
      flex 1
      align-items center
      .bulletin-title
        background rgba(255,255,255,.7)
        height 30px
        width 60px
        text-align center
        line-height 30px
        margin-right 10px
       .bulletin-info
         height 30px
         line-height 30px
         white-space nowrap
         text-overflow ellipsis
         overflow hidden
         word-break break-all
    .background
      filter blur(10px)
      height 100%
      left 0
      position absolute
      top 0
      width 100%
      z-index -1
      img
        width 100%
        height 100%
</style>
