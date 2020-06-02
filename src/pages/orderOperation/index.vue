<template>
  <div class="operation">
    <HeaderTitle title="订单操作">
      <router-link class="header_back" slot="left" to="/me">
        <i class="iconfont icon-arrowLeft"></i>
      </router-link>
    </HeaderTitle>
    <cube-tab-bar
      v-model="selectedLabelDefault"
      show-slider
      :data="tabs"
      @click="clickHandler">
    </cube-tab-bar>
    <!--未完成订单页面-->
    <div class="wrap" v-if="orderType == '未完成'">
      <div class="operation-warp" >
        <div  class="order-content" v-for="(order, index) in orderInfoW"  :key="index" >
          <div class="order-container">
            <div class="orderCode">
              <span class="code">取餐号：<span>{{order.orderCode}}</span></span>
              <span class="statu"> {{order.orderStatus}}</span>
            </div>
            <ul class="goods-list">
              <li   v-for="(good, index) in order.goods"  :key="index">
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
                <span class="info-title">下单时间：</span>
                <span>{{order.orderTime}}</span>
              </li>
              <li>
                <span class="info-title">订餐手机：</span>
                <span>{{order.phone}}</span>
              </li>
            </ul>
            <div class="total">
              <span class="order-total">订单总价</span>
              <span class="price" >￥<span>{{order.total}}</span></span>

            </div>
            <div class="btn" >
              <cube-button class="btns" :inline="true" @click="delivery(index)">确定发货</cube-button>
              <cube-button class="btns cancel" :inline="true" :outline="true" @click="cancel(index)">取消订单</cube-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--已完成订单页面-->
    <div class="wrap" v-else-if="orderType == '已完成'">
      <div class="operation-warp" >
        <div  class="order-content" v-for="(order, index) in orderInfoY"  :key="index" >
          <div class="order-container">
            <div class="orderCode">
              <span class="code">取餐号：<span>{{order.orderCode}}</span></span>
              <span class="status"> {{order.orderStatus}}</span>
            </div>
            <ul class="goods-list">
              <li   v-for="(good, index) in order.goods"  :key="index">
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
                <span class="info-title">下单时间：</span>
                <span>{{order.orderTime}}</span>
              </li>
              <li>
                <span class="info-title">订餐手机：</span>
                <span>{{order.phone}}</span>
              </li>
            </ul>
            <div class="total">
              <span class="order-total">订单总价</span>
              <span class="price" >￥<span>{{order.total}}</span></span>

            </div>
          </div>
        </div>
      </div>
    </div>
    <!--已取消订单页面-->
    <div class="wrap" v-else>
      <div class="operation-warp"  >
        <div  class="order-content" v-for="(order, index) in orderInfoQ"  :key="index">
          <div class="order-container">
            <div class="orderCode">
              <span class="code">取餐号：<span>{{order.orderCode}}</span></span>
              <span class="stat"> {{order.orderStatus}}</span>
            </div>
            <ul class="goods-list">
              <li   v-for="(good, index) in order.goods"  :key="index">
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
                <span class="info-title">下单时间：</span>
                <span>{{order.orderTime}}</span>
              </li>
              <li>
                <span class="info-title">订餐手机：</span>
                <span>{{order.phone}}</span>
              </li>
            </ul>
            <div class="total">
              <span class="order-total">订单总价</span>
              <span class="price" >￥<span>{{order.total}}</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>



  </div>

</template>
<script>
  import HeaderTitle from '../../components/headerTitle'
  import BScroll from 'better-scroll'
  export default{
    data () {
      return {
        selectedLabelDefault: '未完成',
        tabs: [
            {
          label: '未完成',
          icon: 'cubeic-home'
        },
          {
          label: '已完成',
          icon: 'cubeic-like'
        },
          {
          label: '已取消',
          icon: 'cubeic-vip'
        },
        ],
        orderInfoW:[
          {
            orderCode:'11113',
            orderStatus:'未完成',
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
            total:'20',
          },
          {
            orderCode:'11112',
            orderStatus:'未完成',
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
          },
        ],
        orderInfoY:[
          {
            orderCode:'11113',
            orderStatus:'已完成',
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
            total:'20',
          },
          {
            orderCode:'11112',
            orderStatus:'已完成',
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
          },
          {
            orderCode:'11114',
            orderStatus:'已完成',
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
          },
        ],
        orderInfoQ:[
          {
            orderCode:'11113',
            orderStatus:'已取消',
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
            total:'20',
          },
        ],
        orderType:'未完成'
      }
    },
    components:{
      HeaderTitle
    },
    mounted(){
      new BScroll('.wrap', {
        click: true
      })

    },
    methods: {
      delivery(index){
        console.log(index)
        this.$createActionSheet({
          title: '请确认订单是否发货？',
          active: 0,
          data: [
            {content: '确认发货'}
          ],
          onSelect: () => {
            this.orderInfoW.splice(index, 1)
          }
        }).show()
      },
      cancel(index){
          console.log(index)
        this.$createActionSheet({
          title: '请确认是否取消订单？',
          active: 0,
          data: [
            {content: '取消订单'}
          ],
          onSelect: () => {
            this.orderInfoW.splice(index, 1)
          }
        }).show()
      },
      clickHandler (label) {
          this.orderType = label
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .operation
    height 100%
    background-color #f3f5f7
    .wrap
      overflow hidden
      height 100%
      .operation-warp
        padding-bottom 180px
        .order-content
          width 100%
          .order-container
            padding   10px 40px
            box-sizing border-box
            background-color #fff
            box-shadow 0px 5px 9px 0px rgba(228,228,228,0.36)
            border-radius 5px
            margin-bottom 20px
            .orderCode
              display flex
              justify-content space-between
              align-items center
              height 50px

              .code
                font-size 30px
                font-weight 700
              .status
                font-size 25px
                color #00a0dc
              .statu
                font-size 25px
                color #f01414
              .stat
                font-size 25px
                color gray
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

            .btn
              border-top   2px solid #f3f5f7
              padding 15px 0
              overflow hidden
              .btns
                float right
              .cancel
                margin-right  20px
</style>
