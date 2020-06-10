import '@babel/polyfill'

import './common.scss'
import AppHeader from './common/header'
import AppFooter from './common/footer'
import router from './router'
import VueCarousel from 'vue-carousel';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import {store} from './store'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueCarousel);
new Vue({
    router,
    store,
    template:`<div>
        <AppHeader/>
        <router-view/>
        <AppFooter/>
    </div>`,
    components:{
        AppHeader,
        AppFooter,
    }
}).$mount('#app')