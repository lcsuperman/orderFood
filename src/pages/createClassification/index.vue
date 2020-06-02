<template>
  <div class="classification">
    <HeaderTitle title="创建分类">
      <router-link class="header_back" slot="left" to="/me">
        <i class="iconfont icon-arrowLeft"></i>
      </router-link>
    </HeaderTitle>
    <cube-button  @click="showPrompt">添加新分类</cube-button>
    <div class="classification-wrap">
      <div class="swipe-wrapper">
        <cube-scroll>
          <cube-swipe
            @item-click="onItemClick"
            @btn-click="onBtnClick"
            :data="swipeData">
          </cube-swipe>
        </cube-scroll>
      </div>
    </div>
  </div>

</template>
<script>
  import HeaderTitle from '../../components/headerTitle'
  import BScroll from 'better-scroll'
  import {reqShopGoods} from '../../api/index'
  export default{
      data(){
        return{
          swipeData: []// 分类列表
        }

      },
      components:{
        HeaderTitle
      },
       computed:{

     },
      mounted(){
        this.getClassification()
         new BScroll('.classification-wrap', {
        click: true
      })

    },
      methods:{
        //获取已有分类
        async getClassification(){
            const response = await reqShopGoods()
            var result = response.data
            result.forEach((e,index)=>{
               var obj ={}
               obj.btns = [
                 {
                   action: 'delete',
                   text: '删 除',
                   color: '#ff3a32'
                 }
               ]
               var obiItem = {}
               obiItem.text = e.name
               obiItem.value = index + 1
               obj.item = obiItem
              this.swipeData.push(obj)
           })
        },
       onItemClick(item) {
         console.log('click item:', item)
       },
        //分类的编辑和删除
       onBtnClick(btn, index) {
         if (btn.action === 'delete') {
           this.$createActionSheet({
             title: '确认要删除吗',
             active: 0,
             data: [
               {content: '删 除'}
             ],
             onSelect: () => {
               this.swipeData.splice(index, 1)
             }
           }).show()
         }
       },
       showPrompt() {
         this.dialog = this.$createDialog({
           type: 'prompt',
           title: '创建新分类',
           prompt: {
             value: '',
             placeholder: '请输入'
           },
           onConfirm: (e, promptValue) => {
               var length = this.swipeData.length
               var obj = {
                  item:{
                     text: promptValue,
                     value:length + 1
                  } ,
                  btns: [
                   {
                     action: 'delete',
                     text: '删 除',
                     color: '#ff3a32'
                   }
                 ]
               }
             this.swipeData.push(obj)
           }
         }).show()
       },
     }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .classification
     width 100%
     height 100%
     .classification-wrap
       height 100%
       overflow hidden
       .swipe-wrapper
         padding-bottom 180px


</style>
