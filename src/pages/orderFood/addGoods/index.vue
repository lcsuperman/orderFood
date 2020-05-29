<template>
  <!--添加商品和减少商品-->
   <div class="addGood">
    <transition name="move">
      <i class="iconfont icon-jianqu" v-if="food.count"  @click.stop="updateFoodCount(false)"></i>
    </transition>
    <span class="addNum" v-if="food.count">{{food.count}}</span>
    <i class="iconfont icon-tianjia" @click="updateFoodCount(false)"></i>
  </div>
</template>
<script>
  export default{
    data(){
       return{

       }
    },
    props: {
      food: Object
    },

    methods:{
      updateFoodCount (isAdd) {
        this.$store.dispatch('updateFoodCount', {isAdd, food: this.food})
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
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


</style>
