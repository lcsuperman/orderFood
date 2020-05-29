// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import store from './store'
import './mock/mockServer' // 加载mockServer即可
import {
  Style,
  Dialog,
  Button,
  Swipe,
  Scroll,
  Select,
  Toast,
  Picker,
  ActionSheet,
  Form,
  TabBar,
  TabPanels,
} from 'cube-ui'

Vue.config.productionTip = false
Vue.use(Dialog)
Vue.use(Toast)
Vue.use(Swipe)
Vue.use(Button)
Vue.use(Picker)
Vue.use(Select)
Vue.use(Scroll)
Vue.use( Form)
Vue.use( TabBar)
Vue.use( TabPanels)
Vue.use(ActionSheet)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
