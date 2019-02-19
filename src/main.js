import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
Vue.use(ElementUI)


Vue.prototype.$axios=axios
Vue.config.productionTip = false

/**
 * 创建全局过滤器
 */
Vue.filter('date',(val)=>{
    var date=new Date(val);
    var yy=date.getFullYear();
    var mm=date.getMonth();
    mm=mm>9?mm:'0'+mm;
    var dd=date.getDate();
    dd=dd>9?dd:'0'+dd;
    return yy+'-'+mm+'-'+dd
})
Vue.filter('datetime',(val)=>{
  var date=new Date(val);
  var yy=date.getFullYear();
  var mm=date.getMonth();
  mm=mm>9?mm:'0'+mm;
  var dd=date.getDate();
  dd=dd>9?dd:'0'+dd;
  var hh=date.getHours();
  hh=hh>9?hh:'0'+hh;
  var mi=date.getMinutes();
  mi=mi>9?mi:'0'+mi;
  var ss=date.getSeconds();
  ss=ss>9?ss:'0'+ss;
  return yy+'-'+mm+'-'+dd+' '+hh+':'+mi+':'+ss
})
Vue.filter('currency',(val)=>{
  return '￥'+val.toFixed(2)
})
Vue.filter('tableStatus',(val)=>{
  if(val==1) return '空闲';
  else if(val==2) return '预定';
  else if(val==3) return '占用';
  else return '其他'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
