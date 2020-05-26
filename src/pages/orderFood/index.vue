<template>
     <div class="orderFood">
       <div class="orderFood-container">
         <!--头部商家信息-->
         <Header></Header>
         <!--分类菜单和商品-->
         <div class="orderFood-content">
            <!--左侧分类-->
            <div class="classification">
               <ul class="classList">
                 <li :class="{current: index===currentIndex}" v-for="(item , index ) in  goodsInfo" :key="index" @click="clickMenuItem(index)">{{item.type}}</li>
               </ul>
            </div>
            <!--右侧商品-->
            <div class="foods">
               <div class="foods-container">
                 <div class="foos-content" v-for="(item , index) in goodsInfo">
                   <div class="foods-class">
                     <span class="class-name">{{item.type}}</span>
                   </div>
                   <ul class="foodsList">
                      <li class="foodsInfo" v-for="(good , index) in item.goods">
                        <div class="food-image">
                          <img :src="good.image" alt="">
                        </div>
                        <div class="food-info">
                           <p class="food-name">{{good.name}}</p>
                           <p class="food-num">月销售 <span>{{good.sale}}</span></p>
                           <div class="food-price">
                             <div class="price">￥{{good.price}}</div>
                             <!--添加商品和减少商品-->
                             <AddGoods :goodsInfo="goodsInfo"></AddGoods>
                           </div>
                        </div>
                      </li>
                   </ul>
                 </div>
               </div>
             </div>
          </div>
         <!--购物车列表-->
         <transition name="move">
           <div class="shopcart-list" v-show="listShow">
             <div class="list-header">
               <h1 class="title">购物车</h1>
               <span class="empty" @click="clearCart">清空</span>
             </div>
             <div class="list-content">
               <ul class="foodlist">
                 <li class="food" v-for="(food, index) in cartFoods" :key="index">
                   <span class="name">{{food.name}}</span>
                   <div class="price"><span>￥{{food.price}}</span></div>
                   <div class="cartcontrol-wrapper">
                     <AddGoods />
                   </div>
                 </li>
               </ul>
             </div>
           </div>
         </transition>

       </div>
       <!--蒙版-->
       <div class="list-mask" v-show="listShow" @click="toggleShow"></div>
       <!--底部购物车-->
       <div class="goodCar">
          <div class="car">
            <div class="car-container" @click="showPopup">
              <div class="car-content" :style="{background: num != 0 ? '#00a0dc': '#333'}">
                <i class="iconfont icon-gouwuche" :style="{color: num != 0 ? '#fff': '#999'}"></i>
                <div class="num" v-show="num != 0">{{num}}</div>
              </div>
              </div>
            <div class="express">
              <span class="priceAll" :style="{color:num != 0 ? '#fff': '#999'}">￥{{price}}</span>
              <div class="line"></div>
              <span class="free">免配送费</span>
            </div>
          </div>
          <div :class="num != 0 ? 'pay' : 'submit'" >去结算</div>
       </div>

     </div>
</template>
<script>
  import Header from '../../components/header/index.vue'
  import AddGoods from './addGoods/index.vue'
  import BScroll from 'better-scroll'
  export default{
    data(){
       return{
         scrollY: 0, // 右侧滑动的Y轴坐标 (滑动过程时实时变化)
         tops: [], // 所有右侧分类li的top组成的数组  (列表第一次显示后就不再变化)
         listShow:false,
         num:6,
         price:213,
         goodsInfo:[
             {
                 type:'热销榜',
                 goods:[
                   {
                       name:'想你奶茶',
                       sale:'200',
                       price:'10',
                       image:'./static/image/food1.jpg',
                   },
                   {
                     name:'冰镇奶茶',
                     sale:'100',
                     price:'8',
                     image:'./static/image/food2.jpg',
                   },
                   {
                     name:'遇见奶茶',
                     sale:'220',
                     price:'6',
                     image:'./static/image/food3.jpg',
                   },
                   {
                     name:'想你奶茶',
                     sale:'240',
                     price:'9',
                     image:'./static/image/food1.jpg',
                   },
                 ]
             },
             {
               type:'特价奶茶',
               goods:[
                 {
                   name:'爱你奶茶',
                   sale:'280',
                   price:'10',
                   image:'./static/image/food3.jpg',
                 },
                 {
                   name:'珍珠奶茶',
                   sale:'300',
                   price:'10',
                   image:'./static/image/food2.jpg',
                 },
                 {
                   name:'可口奶茶',
                   sale:'200',
                   price:'10',
                   image:'./static/image/food1.jpg',
                 },
                 {
                   name:'想你奶茶',
                   sale:'200',
                   price:'10',
                   image:'./static/image/food2.jpg',
                 },
               ]
             },
             {
               type:'新品上架',
               goods:[
                 {
                   name:'爱你奶茶',
                   sale:'280',
                   price:'10',
                   image:'./static/image/food3.jpg',
                 },
                 {
                   name:'珍珠奶茶',
                   sale:'300',
                   price:'10',
                   image:'./static/image/food2.jpg',
                 },
                 {
                   name:'可口奶茶',
                   sale:'200',
                   price:'10',
                   image:'./static/image/food1.jpg',
                 },
                 {
                   name:'想你奶茶',
                   sale:'200',
                   price:'10',
                   image:'./static/image/food2.jpg',
                 },
               ]
             },
             {
               type:'夏季凉饮',
               goods:[
                 {
                   name:'爱你奶茶',
                   sale:'280',
                   price:'10',
                   image:'./static/image/food3.jpg',
                 },
                 {
                   name:'珍珠奶茶',
                   sale:'300',
                   price:'10',
                   image:'./static/image/food2.jpg',
                 },
                 {
                   name:'可口奶茶',
                   sale:'200',
                   price:'10',
                   image:'./static/image/food1.jpg',
                 },
                 {
                   name:'想你奶茶',
                   sale:'200',
                   price:'10',
                   image:'./static/image/food2.jpg',
                 },
               ]
             },
             {
               type:'店家推荐',
               goods:[
                 {
                   name:'爱你奶茶',
                   sale:'280',
                   price:'10',
                   image:'./static/image/food3.jpg',
                 },
                 {
                   name:'珍珠奶茶',
                   sale:'300',
                   price:'10',
                   image:'./static/image/food2.jpg',
                 },
                 {
                   name:'可口奶茶',
                   sale:'200',
                   price:'10',
                   image:'./static/image/food1.jpg',
                 },
                 {
                   name:'想你奶茶',
                   sale:'200',
                   price:'10',
                   image:'./static/image/food2.jpg',
                 },
               ]
             },
             {
               type:'暖心奶茶',
               goods:[
                 {
                   name:'爱你奶茶',
                   sale:'280',
                   price:'10',
                   image:'./static/image/food3.jpg',
                 },
                 {
                   name:'可口奶茶',
                   sale:'200',
                   price:'10',
                   image:'./static/image/food1.jpg',
                 },
               ]
             },
           ],
         cartFoods:[
           {
             name:'海之言',
             price:'4'
           },
           {
             name:'海之言',
             price:'4'
           },
           {
             name:'海之言',
             price:'4'
           },

           {
             name:'海之言',
             price:'4'
           },
           {
             name:'海之言',
             price:'4'
           },
           {
             name:'海之言',
             price:'4'
           },
         ]
       }
    },
    components:{
      Header,
      AddGoods
    },
    computed: {

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
     this._initScroll()
      this._initTops()
    },
    methods:{
      toggleShow(){

      },
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
      showPopup(){
        this.listShow = !this.listShow
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
            this.showPopup()
            this.num = 0
            this.price = 0
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
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
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
          bottom -220px
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
            max-height 350px
            background #fff
            overflow hidden
            .foodlist
              .food
                position relative
                padding 20px 0
                box-sizing border-box
                bottom-border-1px(rgba(7, 17, 27, 0.1))
                .name
                  line-height 28px
                  font-size 28px
                  color rgb(7, 17, 27)
                .price
                  position absolute
                  right 150px
                  bottom 16px
                  line-height 28px
                  font-size 28px
                  font-weight 700
                  color rgb(240, 20, 20)
                .cartcontrol-wrapper
                  position absolute
                  right 0
                  bottom 6px



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
  .cube-popup-container .cube-dialog-content
    margin 30px 0
  .cube-popup-container .cube-dialog-main
    width 500px
</style>
