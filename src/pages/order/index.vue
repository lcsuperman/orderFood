<template>
  <div class="order">
    <!--头部信息-->
    <div class="order-title">
      <span>取餐信息</span>
    </div>
    <div class="order-wrap">
      <!--有订单页面-->
      <div v-if="isOrder" class="order-content">
        <div class="order-container" v-for="(order , index) in orderInfo" :key="index">
          <div class="orderCode">
            <span class="code">取餐号：<span>{{order.orderCode}}</span></span>
            <span class="status" v-if="order.orderStatus == '已取餐'"> {{order.orderStatus}}</span>
            <span class="statu" v-else> {{order.orderStatus}}</span>
          </div>
          <ul class="goods-list">
            <li  v-for="(good , index) in order.goods" :key="index">
              <img :src="good.img" alt="">
              <div class="list-right">
                <div class="right-content">
                  <span class="good-name">{{good.name}}</span>
                  <span class="good-price">￥<span>{{good.price}}</span></span>
                </div>
                <div class="good-num">
                  <span>x</span>
                  <span class="purchase-num">{{good.num}}</span>
                </div>
              </div>
            </li>
          </ul>
          <ul class="order-info">
            <li>
              <span class="info-title">配送方式：</span>
              <span>前台自取</span>
            </li>
            <li>
              <span class="info-title">下单时间：</span>
              <span>{{order.orderTime}}</span>
            </li>
            <li>
              <span class="info-title">订餐手机：</span>
              <span>{{order.phone}}</span>
            </li>
            <li>
              <span class="info-title">温馨提示：</span>
              <span style="color:#00a0dc" v-if="order.orderStatus == '已取餐'">{{order.remark}}</span>
              <span style="color:#f01414" v-else>{{order.mem}}</span>
            </li>
          </ul>
          <div class="total">
            <span class="order-total">订单总价</span>
            <span class="price" >￥<span>{{order.total}}</span></span>

          </div>
        </div>
      </div>
      <!--无订单页面-->
      <div v-else class="noOrder">
        <div class="img-container">
          <img src="../../../static/image/kong.png" alt="">
        </div >
        <div class="words">暂时没有待取餐的订单，快去点一杯吧！</div>
        <div class="btn">
          <cube-button @click="$router.replace('/orderFood')">点杯奶茶</cube-button>
        </div>
      </div>
    </div>

  </div>

</template>
<script>
  import BScroll from 'better-scroll'
   export default{

     data(){
           return{
             isOrder:false,
             orderInfo:[
               {
                 orderCode:'11113',
                 orderStatus:'未取餐',
                 goods:[
                   {
                     name:'想你奶茶',
                     num:'2',
                     price:'10',
                     img:'./static/image/food3.jpg',
                   },

                 ],
                 orderTime:'2020年5月6日 16:37:06',
                 phone:'13765438987',
                 total:'29',
                 remark:'很高心在茫茫人海与您相遇，期待下次的邂逅！',
                 mem:'请到前台出示取餐号领取订单，祝您用餐快乐！'
               },
               {
                 orderCode:'11112',
                 orderStatus:'已取餐',
                 goods:[
                   {
                     name:'一杯奶茶',
                     num:'2',
                     price:'10',
                     img:'./static/image/food1.jpg',
                   },
                   {
                     name:'mini奶茶',
                     num:'1',
                     price:'9',
                     img:'./static/image/food2.jpg',
                   },

                 ],
                 orderTime:'2020年5月6日 16:37:06',
                 phone:'13765438987',
                 total:'29',
                 remark:'很高心在茫茫人海与您相遇，期待下次的邂逅！',
                 mem:'请到前台出示取餐号领取订单，祝您用餐快乐！'
               },
             ]
           }
       },
     mounted(){
       new BScroll('.order-wrap', {
         click: true
       })
     },
   }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import'../../../static/stylus/mixins.styl'
   .order
     width 100%
     height 100%
     position relative
     background-color #f3f5f7
     .order-title
       height 90px
       text-align center
       font-size 30px
       line-height 90px
       background rgba(240,240,240,.9 )
       box-shadow 0px 2px 2px 0px rgba(228,228,228,0.36)
      .order-wrap
        height 100%
        overflow hidden
       .noOrder
         display flex
         position absolute
         left 50%
         top 53%
         transform  translate(-50% , -50%)
         flex-direction column
         align-items center
         width 100%
         height 60%
         margin 0 auto
         justify-content space-between
         .img-container
           width 500px
           height 400px
           img
             width 100%
             height 100%

         .words
           font-size 28px
           margin-top  20%
           color #999
         .btn
           width 450px
       .order-content
         width 100%
         padding-bottom 200px
         .order-container
           padding   10px 40px
           box-sizing border-box
           background-color #fff
           box-shadow 0px 5px 9px 0px rgba(228,228,228,0.36)
           border-radius 5px
           margin 20px 0
           .orderCode
             display flex
             justify-content space-between
             align-items center
             height 50px

             .code
               font-size 30px
               font-weight 700
             .status
               font-size 20px
               color #00a0dc
              .statu
               font-size 20px
               color #f01414
           .goods-list
             border-bottom  2px solid #f3f5f7
             li
               display  flex
               padding 15px 0
               img
                 width 115px
                 height 115px
                 margin-right  20px
               .list-right
                 width 100%
                 display flex
                 flex-direction column
                 justify-content space-between
                 padding 10px 0
                 .right-content
                   display flex
                   justify-content space-between
                   .good-price
                     margin-right 5px
                 .good-num
                   .purchase-num
                      font-size 25px


           .order-info
              padding 10px 0
              border-bottom  2px solid #f3f5f7
              li
                padding 6px 0
                .info-title
                  font-size 25px
           .total
             margin-top 10px
             display flex
             padding 10px 0
             justify-content space-between
             .order-total
               font-size 28px
               font-weight 700
             .price
               font-size  30px
               font-weight 700
               color #000

</style>
