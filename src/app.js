import './common.scss'
import AppHeader from './common/header'
import AppFooter from './common/footer'
import router from './router'
new Vue({
    router,
    template:`<div>
        <AppHeader/>
        <router-view/>
        <AppFooter/>
    </div>`,
    components:{
        AppHeader,
        AppFooter
    }
}).$mount('#app')