import './common.scss'
import AppHeader from './common/header'
import AppFooter from './common/footer'
import router from './router'
import VueCarousel from 'vue-carousel';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueCarousel);
new Vue({
    router,
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