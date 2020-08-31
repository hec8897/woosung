import 'babel-polyfill';
import './common.scss'
import AppHeader from './common/header'
import AppFooter from './common/footer'
import router from './router'
import VueCarousel from 'vue-carousel';
import topWidget from './widget/top'
import widgets from './widget/widgets'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import {store} from './store'
import contactPopup from './common/contact'
import EventBus from './eventbus'
import axios from 'axios'
import VueMoment from 'vue-moment';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueCarousel);
Vue.use(VueMoment);

Vue.prototype.$Axios = axios;


new Vue({
    router,
    store,
    template:`<div>
                    <AppHeader/>
                    <router-view/>
                    <widgets/>
                    <topWidget/>
                    <contactPopup 
                        v-if="show"
                        @child="parent"
                        />
                    <AppFooter/>
                </div>`,
    data(){
        return{
            show:false
        }
    },
    created(){
        EventBus.$on('consultPopup',(Data)=>{
            this.show = Data
        })
    },

    components:{
        AppHeader,
        AppFooter,
        topWidget,
        widgets,
        contactPopup

    },
    methods: {
        parent(data){
            this.show = data
        },
    },

}).$mount('#app')