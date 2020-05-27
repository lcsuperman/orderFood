<template>
     <div class="personal">
        <HeaderTitle title="个人中心"></HeaderTitle>
        <div class="personal-wrap">
          <!--登录头像-->
           <div class="personal-avarta">
              <div class="picture">
                <img src="../../../static/image/tou.jpg" alt="">
              </div>
              <div class="userName">
                 <div class="name" v-if="isLogin">
                    <span class="nickName">安静、认真听</span>
                    <span class="phone">18337170026</span>
                 </div>
                 <div class="word" v-else> 点击登录</div>
              </div>
           </div>
           <ul class="setting" v-if="isManage">
             <li @click="goto('/createClassification')">
                <span class="setting-title"> <i class="iconfont icon-sort"></i>创建分类</span>
                <i class="iconfont icon-iconfontjiantou5"></i>
             </li>
             <li @click="goto('/publishProduct')">
               <span class="setting-title"><i class="iconfont icon-fabu"></i>添加商品</span>
               <i class="iconfont icon-iconfontjiantou5"></i>
             </li>
             <li @click="goto('/storeSetting')">
              <span class="setting-title"><i class="iconfont icon-shezhi"></i>店铺设置</span>
              <i class="iconfont icon-iconfontjiantou5"></i>
             </li>
             <li @click="goto('/orderOperation')">
               <span class="setting-title"><i class="iconfont icon-queren"></i>订单操作</span>
               <i class="iconfont icon-iconfontjiantou5"></i>
             </li>
           </ul>
           <ul class="setting">
            <li @click="goto('/order')">
              <span class="setting-title"> <i class="iconfont icon-dingdan"></i>我的订单</span>
              <i class="iconfont icon-iconfontjiantou5"></i>
            </li>
            <li @click="showToastTime">
              <span class="setting-title"><i class="iconfont icon-yijianfankui-"></i>意见反馈</span>
              <i class="iconfont icon-iconfontjiantou5"></i>
            </li>


          </ul>
          <div class="outLogin"><cube-button>  退出登录</cube-button></div>
        </div>
     </div>
</template>
<script>
  import HeaderTitle from '../../components/headerTitle'
  export default{
      data(){
          return{
              isLogin:false,//判断是否登录
              isManage:true,//不是管理员
          }
      },
      methods:{
          goto(path){
              this.$router.push(path)
          },
        showToastTime() {
          const toast = this.$createToast({
            time: 0,
            txt: '此功能暂未开放！'
          })
          toast.show()
          setTimeout(() => {
            toast.hide()
          }, 1000)
        }
      },
     components:{
       HeaderTitle
     }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .personal
    height 100%
    .person-title
      height 90px
      text-align center
      line-height 90px
      font-size 30px
      background rgba(246,246,246,1 )
      box-shadow 0px 2px 2px 0px rgba(228,228,228,0.36)
    .personal-wrap
       height 100%
       background-color #f3f5f7
      .personal-avarta
        width 100%
        height 250px
        display flex
        background-color #fff
        align-items center
        box-sizing border-box
        padding 0 40px
        margin-bottom 20px
        box-shadow 0px 5px 5px 0px rgba(228,228,228,0.5)
        .picture
          width 140px
          height 140px
          border-radius 50%
          overflow hidden
          margin-right 20px
          img
            height 100%
            width 100%
        .userName
          .word
            font-size 30px
            font-weight 700
          .name
            display flex
            flex-direction column
            height 140px
            justify-content space-around
            .nickName
              font-size 32px
              font-weight 700
            .phone
              font-size 28px

      .setting
        margin-bottom 20px
        background-color #fff
        box-shadow 0px 5px 5px 0px rgba(228,228,228,0.5)
        li
          display flex
          justify-content space-between
          margin  0 40px
          padding 30px 0
          border-bottom 2px solid #f3f5f7
          .setting-title
            font-size 28px
            .iconfont
              font-size 30px
              margin-right 15px
            .icon-dingdan
              color #00a0dc
            .icon-yijianfankui-
              color #f01414
            .icon-sort
              color #00a0dc



</style>
