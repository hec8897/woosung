import './common.scss'
import AppHeader from './common/header'
import router from './router'
new Vue({
    router,
    template:`<div>
        <AppHeader/>
        <router-view/>
    </div>`,
    components:{
        AppHeader
    }
}).$mount('#app')