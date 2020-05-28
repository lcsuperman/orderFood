<template>
  <div class="classification">
    <HeaderTitle title="创建分类">
      <router-link class="header_back" slot="left" to="/me">
        <i class="iconfont icon-arrowLeft"></i>
      </router-link>
    </HeaderTitle>
    <cube-button :light="true" @click="showPrompt">添加新分类</cube-button>
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
  export default{
      data(){
        return{
          swipeData: [
            {
            item: {
              text: '店长推荐',
              value: 1
            },
            btns: [
              {
                action: 'delete',
                text: '删 除',
                color: '#ff3a32'
              }
            ]
          },
            {
            item: {
              text: '特色饮品',
              value: 2
            },
            btns: [
              {
                action: 'delete',
                text: '删 除',
                color: '#ff3a32'
              }
            ]
          },
            {
            item: {
              text: '暖心奶茶',
              value: 3
            },
            btns: [
              {
                action: 'delete',
                text: '删 除',
                color: '#ff3a32'
              }
            ]
          },
            {
              item: {
                text: '店长推荐',
                value: 4
              },
              btns: [
                {
                  action: 'delete',
                  text: '删除',
                  color: '#ff3a32'
                }
              ]
            },
          ]
        }

      },
      components:{
        HeaderTitle
      },
    mounted(){
      new BScroll('.classification-wrap', {
        click: true
      })
    },
     methods:{
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
             this.$createToast({
               type: 'warn',
               time: 1000,
               txt: `新分类名称: ${promptValue || ''}`
             }).show()
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


</style>
