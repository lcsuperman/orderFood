<template>
  <div>
    <HeaderTitle title="添加商品">
      <router-link class="header_back" slot="left" to="/me">
        <i class="iconfont icon-arrowLeft"></i>
      </router-link>
    </HeaderTitle>
    <div>
      <cube-form
        :model="model"
        :schema="schema"
        :immediate-validate="false"
        :options="options"
        @validate="validateHandler"
        @submit="submitHandler"
        @reset="resetHandler"></cube-form>
    </div>
  </div>

</template>
<script>
  import HeaderTitle from '../../components/headerTitle'
  export default{
    data() {
      return {
        validity: {},
        valid: undefined,
        model: {
          inputValue: '',
          priceValue: '',
          selectValue: '',
          sealValue: '0',
          uploadValue: []
        },
        schema: {
          groups: [
            {
              fields: [
                {
                  type: 'input',
                  modelKey: 'inputValue',
                  label: '商品名称：',
                  props: {
                    placeholder: '请输入'
                  },
                  rules: {
                    required: true
                  },
                  // validating when blur
                  trigger: 'blur'
                },
                {
                  type: 'select',
                  modelKey: 'selectValue',
                  label: '商品分类：',
                  props: {
                    options: ['最新优', '店长推荐', '暖心奶茶', '冰镇饮料']
                  },
                  rules: {
                    required: true
                  }
                },
                {
                  type: 'input',
                  modelKey: 'priceValue',
                  label: '商品价格：',
                  props: {
                    placeholder: '请输入'
                  },
                  rules: {
                    required: true
                  },
                  // validating when blur
                  trigger: 'blur'
                },
                {
                  type: 'upload',
                  modelKey: 'uploadValue',
                  label: '上传图片：',
                  events: {
                    'file-removed': (...args) => {
                      console.log('file removed', args)
                    }
                  },
                  rules: {
                    required: true,
                    uploaded: (val, config) => {
                      return Promise.all(val.map((file, i) => {
                        return new Promise((resolve, reject) => {
                          if (file.uploadedUrl) {
                            return resolve()
                          }
                          // fake request
                          setTimeout(() => {
                            if (i % 2) {
                              reject(new Error())
                            } else {
                              file.uploadedUrl = 'uploaded/url'
                              resolve()
                            }
                          }, 1000)
                        })
                      })).then(() => {
                        return true
                      })
                    }
                  },
                  messages: {
                    uploaded: '上传失败'
                  }
                },
                {
                  type: 'input',
                  modelKey: 'sealValue',
                  label: '初始化售量：',
                  props: {
                    placeholder: '请输入'
                  },
                  trigger: 'blur'
                },
              ]
            },
            {
              fields: [
                {
                  type: 'submit',
                  label: '保存'
                },
              ]
            }
          ]
        },
        options: {
          scrollToInvalidField: true,
          layout: 'standard' // classic fresh
        }
      }
    },
    components:{
      HeaderTitle
    },
    methods:{
      submitHandler(e) {
        e.preventDefault()
        console.log('submit', e)
      },
      validateHandler(result) {
        this.validity = result.validity
        this.valid = result.valid
        console.log('validity', result.validity, result.valid, result.dirty, result.firstInvalidFieldIndex)
      },
      resetHandler(e) {
        console.log('reset', e)
      }

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
