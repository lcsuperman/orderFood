<template>
     <div class="orderFood" >
       <div class="orderFood-container">
         <!--头部商家信息-->
         <Header></Header>
         <!--分类菜单和商品-->
         <div class="orderFood-content">
            <!--左侧分类-->
            <div class="classification">
               <ul class="classList">
                 <li :class="{current: index===currentIndex}" v-for="(good , index ) in  goods" :key="index" @click="clickMenuItem(index)">{{good.name}}</li>
               </ul>
            </div>
            <!--右侧商品-->
            <div class="foods">
               <div class="foods-container">
                 <div class="foos-content" v-for="(good , index) in goods">
                   <div class="foods-class">
                     <span class="class-name">{{good.name}}</span>
                   </div>
                   <ul class="foodsList">
                      <li class="foodsInfo" v-for="(food , index) in good.foods" :key="index">
                        <div class="food-image">
                          <img :src="food.icon" alt="">
                        </div>
                        <div class="food-info">
                           <p class="food-name">{{food.name}}</p>
                           <p class="food-num">月销售 <span>{{food.sellCount}}</span></p>
                           <div class="food-price">
                             <div class="price">￥{{food.price}}</div>
                             <!--添加商品和减少商品-->
                             <AddGoods :food="food"></AddGoods>
                           </div>
                        </div>
                      </li>
                   </ul>
                 </div>
               </div>
             </div>
          </div>
         <!--购物车-->
         <ShopCart></ShopCart>
       </div>
     </div>
</template>
<script>
  import Header from '../../components/header/index.vue'
  import AddGoods from './addGoods/index.vue'
  import ShopCart from './shopCart/index.vue'
  import BScroll from 'better-scroll'
  import {mapState, mapGetters} from 'vuex'
  export default{
    data(){
       return{
         scrollY: 0, // 右侧滑动的Y轴坐标 (滑动过程时实时变化)
         tops: [], // 所有右侧分类li的top组成的数组  (列表第一次显示后就不再变化)
         listShow:false,
       }
    },
    components:{
      Header,
      AddGoods,
      ShopCart
    },
    computed: {
      ...mapState(['goods']),

      // 计算得到当前分类的下标
      currentIndex() {// 初始和相关数据发生了变化
        // 得到条件数据
        const {scrollY, tops} = this
        // 根据条件计算产生一个结果
        const index = tops.findIndex((top, index) => {
          // scrollY>=当前top && scrollY<下一个top
          return scrollY >= top && scrollY < tops[index + 1]
        })
        // 返回结果
        return index
      }
    },

    mounted(){
      this.$store.dispatch('getShopGoods', () => {// 数据更新后执行
        this.$nextTick(() => { // 列表数据更新显示后执行

          this._initScroll()
          this._initTops()
        })
      })
    },
    methods:{

      // 初始化滚动
      _initScroll() {
        this.foodsScroll = new BScroll('.foods', {
          probeType: 2,  // 因为惯性滑动不会触发
          click: true
        })
        new BScroll('.classification', {
          click: true
        })
        new BScroll('.list-content', {
          click: true
        })
        // 给右侧列表绑定scroll监听
        this.foodsScroll.on('scroll', ({x, y}) => {
          this.scrollY = Math.abs(y)
        })
        // 给右侧列表绑定scroll结束的监听
        this.foodsScroll.on('scrollEnd', ({x, y}) => {
          this.scrollY = Math.abs(y)
        })

      },
      // 初始化tops
      _initTops() {
        // 1. 初始化tops
        const tops = []
        let top = 0
        tops.push(top)
        // 2. 收集
        // 找到所有分类的li
        const lis = document.getElementsByClassName('foos-content')
        Array.prototype.slice.call(lis).forEach(li => {
          top += li.clientHeight
          tops.push(top)
        })
        // 3. 更新数据
        this.tops = tops
      },
      clickMenuItem(index) {
        // 使用右侧列表滑动到对应的位置
        // 得到目标位置的scrollY
        const scrollY = this.tops[index]
        // 立即更新scrollY(让点击的分类项成为当前分类)
        this.scrollY = scrollY
        // 平滑滑动右侧列表
        this.foodsScroll.scrollTo(0, -scrollY, 300)
      },

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import'../../../static/stylus/mixins.styl'
  .orderFood
     width 100%
     height 100%
     background-color #fff
     position relative
     .orderFood-container
        height 100%
        position relative
        .orderFood-content
         background-color #fff
         display flex
         height 100%
         .classification
           height 100%
           background-color #F3F5F7
           .classList
              padding-bottom 200px
              li
                height 100px
                width 120px
                line-height 100px
                padding 0 20px
                white-space normal
                word-break break-all
                overflow  hidden
                text-align center
                &.current
                  position relative
                  z-index 5
                  margin-top -1px
                  background #fff
                  font-weight 700
         .foods
            width 100%
            height 100%
            .foods-container
              padding-bottom 1130px
             .foos-content
               .foods-class
                 height 48px
                 width 100%
                 line-height 48px
                 background-color #F3F5F7
                 border-left 4px solid #D9DDE1
                 .class-name
                    margin-left 20px

               .foodsList
                  li
                    display flex
                    padding 20px 40px
                    background-color #fff
                    .food-image
                       width 120px
                       height 100px
                       margin-right 20px
                       img
                         width 100%
                         height 100%
                     .food-info
                        width 100%
                       p
                         padding 5px 0
                       .food-name
                         font-size 28px
                       .food-num
                         color #999
                         font-size 20px
                       .food-price
                         margin-top 4px
                         display flex
                         width 100%
                         justify-content space-between
                         .price
                           font-size 28px
                           color #f01414
                         .addGood
                           display flex
                           .addNum
                             line-height 40px
                            .icon-jianqu
                              color #00a0dc
                              &.move-enter-active, &.move-leave-active
                                transition all .3s
                              &.move-enter, &.move-leave-to
                                opacity 0
                                transform translateX(15px) rotate(180deg)
                           .iconfont
                             display block
                             font-size 40px
                             color #00a0dc
                             padding 0 10px


        .shopcart-list
          position absolute
          left 0
          z-index 10
          width 100%
          background-color #fff
          transform translateY(-100%)
          &.move-enter-active, &.move-leave-active
           transition transform .3s
          &.move-enter, &.move-leave-to
            transform translateY(0)
          .list-header
            height 60px
            line-height 60px
            padding 0 20px
            background #f3f5f7
            border-bottom 1px solid rgba(7, 17, 27, 0.1)
            .title
              float left
              font-size 25px
              color rgb(7, 17, 27)
            .empty
              float right
              font-size 25px
              color rgb(0, 160, 220)
          .list-content
            padding 0 40px
            max-height 400px
            background #fff
            overflow hidden
            .foodlist
              padding-bottom 450px
              .food
                height 80px
                display flex
                align-items center
                justify-content space-between
                .name
                  font-size 28px
                .price
                  display flex
                  align-items center
                  .food-price
                    font-size 28px
                    margin-right 30px




     .list-mask
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      z-index 8
      backdrop-filter blur(10px)
      opacity 1
      background rgba(7, 17, 27, 0.6)
      &.fade-enter-active, &.fade-leave-active
        transition all 0.5s
      &.fade-enter, &.fade-leave-to
        opacity 0
        background rgba(7, 17, 27, 0)
     .goodCar
       display flex
       height 90px
       width 100%
       background-color #07111b
       color #999
       position fixed
       left 0
       bottom 98px
       z-index 15
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
</style>
