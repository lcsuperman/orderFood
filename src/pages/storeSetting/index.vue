<template>
  <div>
    <HeaderTitle title="店铺设置">
      <router-link class="header_back" slot="left" to="/me">
        <i class="iconfont icon-arrowLeft"></i>
      </router-link>
    </HeaderTitle>
  </div>

</template>
<script>
  import HeaderTitle from '../../components/headerTitle'
  export default{
    components:{
      HeaderTitle
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
