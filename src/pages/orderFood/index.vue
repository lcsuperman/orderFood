<template>
     <div class="orderFood">
       <Header></Header>
       <div class="orderFood-container">
          <div class="orderFood-content">
            <!--左侧分类-->
            <div class="classification">
               <ul class="classList">
                 <li v-for="(item , index ) in  goodsInfo">{{item.type}}</li>
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
                      <li v-for="(good , index) in item.goods">
                        <div class="food-image">
                          <img :src="good.image" alt="">
                        </div>
                        <div class="food-info">
                           <p class="food-name">{{good.name}}</p>
                           <p class="food-num">月销售 <span>{{good.sale}}</span></p>
                           <div class="food-price">
                             <div class="price">￥{{good.price}}</div>
                             <!--添加商品和减少商品-->
                             <div class="addGood">
                               <i class="iconfont icon-jianqu"></i>
                                <span class="addNum">13</span>
                               <i class="iconfont icon-tianjia"></i>
                             </div>
                           </div>
                        </div>
                      </li>
                   </ul>
                 </div>
               </div>
             </div>
          </div>
       </div>
       <!--购物车-->
       <div class="goodCar">
          <div class="car">
            <div class="car-container">
                <div class="car-content">
                  <i class="iconfont icon-gouwuche"></i>
                  <div class="num">5</div>
                </div>
              </div>
            <div class="express">
              <span class="priceAll">￥189</span>
              <div class="line"></div>
              <span class="free">免配送费</span>
            </div>
          </div>
          <div class="submit">去结算</div>
       </div>

     </div>
</template>
<script>
  import Header from '../../components/header/index.vue'
  import BScroll from 'better-scroll'
  export default{
    data(){
       return{
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
                   {
                     name:'想你奶茶',
                     sale:'150',
                     price:'10',
                     image:'./static/image/food2.jpg',
                   }
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
               type:'冰镇乐园',
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
               type:'风味小吃',
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
               type:'网红心愿墙',
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
               type:'冰镇乐园',
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
               type:'风味小吃',
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
               type:'网红心愿墙',
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
           ]
       }
    },
    components:{
      Header
    },
    mounted(){
      new BScroll('.foods', {
        click: true
      })
      new BScroll('.classification', {
        click: true
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .orderFood
     width 100%
     height 100%
     background-color #fff
     position relative
     .orderFood-container
       margin-top 250px
       height 100%
       .orderFood-content
         background-color #fff
         display flex
         .classification
           height 1084px
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
         .foods
            width 100%
            height 1084px
            .foods-container
              padding-bottom 200px
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
                           .iconfont
                             display block
                             font-size 40px
                             color #00a0dc
                             padding 0 10px


     .goodCar
       display flex
       height 90px
       width 100%
       background-color #07111b
       color #999
       position fixed
       left 0
       bottom 98px
       z-index 2
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

</style>
