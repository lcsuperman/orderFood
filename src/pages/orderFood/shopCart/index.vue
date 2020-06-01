<template>
  <div>
    <div class="shopcart">
      <!--底部购物车-->
      <div class="goodCar">
        <div class="car">
          <div class="car-container" @click="toggleShow">
            <div class="car-content" :style="{background: totalCount != 0 ? '#00a0dc': '#333'}">
              <i class="iconfont icon-gouwuche" :style="{color: totalCount != 0 ? '#fff': '#999'}"></i>
              <div class="num" v-if="totalCount">{{totalCount}}</div>
            </div>
          </div>
          <div class="express">
            <span class="priceAll" :style="{color:totalCount != 0 ? '#fff': '#999'}">￥{{totalPrice}}</span>
            <div class="line"></div>
            <span class="free">免配送费</span>
          </div>
        </div>
        <div :class="totalCount != 0 ? 'pay' : 'submit'" >去结算</div>
      </div>
      <!--购物车列表-->
      <transition name="move">
        <div class="shopcart-list" v-show="listShow">
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty" @click="clearCart">清空</span>
          </div>
          <div class="list-content">
            <ul>
              <li class="food" v-for="(food, index) in cartFoods" :key="index">
                <span class="name">{{food.name}}</span>
                <div class="price"><span>￥{{food.price}}</span></div>
                <div class="cartcontrol-wrapper">
                  <AddGoods :food="food"/>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <!--蒙版-->
    <div class="list-mask" v-show="listShow" @click="toggleShow"></div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState, mapGetters} from 'vuex'
  import AddGoods from '../addGoods/index.vue'

  export default {
    data () {
      return {
        isShow: false
      }
    },
    computed: {
      ...mapState(['cartFoods', 'info']),
      ...mapGetters(['totalCount', 'totalPrice']),
      payClass () {
        const {totalPrice} = this
        const {minPrice} = this.info

        return totalPrice>=minPrice ? 'enough' : 'not-enough'
      },
      payText () {
        const {totalPrice} = this
        const {minPrice} = this.info
        if(totalPrice===0) {
          return `￥${minPrice}元起送`
        } else if(totalPrice<minPrice) {
          return `还差￥${minPrice-totalPrice}元起送`
        } else {
          return '结算'
        }
      },

      listShow () {
        // 如果总数量为0, 直接不显示
        if(this.totalCount===0) {
          this.isShow = false
          return false
        }

        if(this.isShow) {
          this.$nextTick(() => {
            // 实现BScroll的实例是一个单例
            if(!this.scroll) {
              this.scroll = new BScroll('.list-content', {
                click: true
              })
            } else {
              this.scroll.refresh() // 让滚动条刷新一下: 重新统计内容的高度
            }

          })
        }

        return this.isShow
      }
    },
    methods: {
      toggleShow () {
        // 只有当总数量大于0时切换
        if(this.totalCount>0) {
          this.isShow = !this.isShow
        }
      },

      clearCart() {//清空购物车
        this.$createDialog({
          type: 'confirm',
          content: '清空购物车？',
          confirmBtn: {
            text: '确定',
            active: true,
            disabled: false,
            href: 'javascript:;'
          },
          cancelBtn: {
            text: '取消',
            active: false,
            disabled: false,
            href: 'javascript:;'
          },
          onConfirm: () => {
            this.$store.dispatch('clearCart')
          },
          onCancel: () => {
            this.$createToast({
              type: 'warn',
              time: 1000,
              txt: '已取消'
            }).show()
          }
        }).show()
      }
    },
    components: {
      AddGoods
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../static/stylus/mixins.styl"

  .shopcart
    position fixed
    left 0
    bottom 0
    z-index 50
    width 100%
    height 80px
    .goodCar
      display flex
      height 90px
      width 100%
      background-color #07111b
      color #999
      position fixed
      left 0
      bottom 98px
      z-index 6
      justify-content space-between
      .car
        display flex
        width 100%
        .car-container
          width 120px
          height 120px
          border-radius 50%
          background-color #07111b
          position absolute
          left 40px
          top -20px
          .car-content
            width 85px
            height 85px
            border-radius 50%
            background-color #333
            position absolute
            top 43%
            left 50%
            transform translate(-50% ,-50%)
            .num
              min-width 22px
              padding 0 5px
              min-height 30px
              background linear-gradient(90deg,#fc9153,#f01414)
              border-radius 50px
              position absolute
              right -16px
              top -8px
              color #fff
              text-align center
              line-height 32px
              font-size 20px
            .icon-gouwuche
              font-size 50px
              margin-left 15px
              line-height 85px
        .express
          margin-left 180px
          display flex
          align-items center
          line-height 90px
          .priceAll
            font-size 30px
            font-weight 700
          .line
            width 1px
            height 50px
            background-color #7e8c8d
            margin  0 20px

      .submit
        width 220px
        background-color #333
        line-height 90px
        text-align center
      .pay
        background-color #00a0dc
        width 220px
        color #fff
        line-height 90px
        text-align center
    .ball-container
      .ball
        position fixed
        left 32px
        bottom 22px
        z-index 200
        transition all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)
        .inner
          width 16px
          height 16px
          border-radius 50%
          background $green
          transition all 0.4s linear
    .shopcart-list
      position absolute
      left 0
      top 0
      z-index -1
      width 100%
      transform translateY(-100%)
      &.move-enter-active, &.move-leave-active
        transition transform .3s
      &.move-enter, &.move-leave-to
        transform translateY(0)
      .list-header
        height 80px
        line-height 80px
        padding 0 30px
        background #f3f5f7
        border-bottom 1px solid rgba(7, 17, 27, 0.1)
        .title
          float left
          font-size 28px
          color rgb(7, 17, 27)
        .empty
          float right
          font-size 28px
          color rgb(0, 160, 220)

      .list-content
        padding 0 30px
        max-height 400px
        overflow hidden
        background #fff
        ul
         padding-bottom 120px
        .food
          position relative
          padding 24px 0
          box-sizing border-box
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          .name
            line-height 24px
            font-size 28px
            color rgb(7, 17, 27)
          .price
            position absolute
            right 180px
            bottom 24px
            line-height 24px
            font-size 28px
            font-weight 700
            color rgb(240, 20, 20)
          .cartcontrol-wrapper
            position absolute
            right 0
            bottom 12px

  .list-mask
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    z-index 40
    backdrop-filter blur(10px)
    opacity 1
    background rgba(7, 17, 27, 0.6)
    &.fade-enter-active, &.fade-leave-active
      transition all 0.5s
    &.fade-enter, &.fade-leave-to
      opacity 0
      background rgba(7, 17, 27, 0)
</style>
