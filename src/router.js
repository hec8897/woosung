import VueRouter from 'vue-router';
import Mainpage from './main/mainpage';
import About from './about/aboutpage';
import CeoAbout from './about/ceo_about'


const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Mainpage,
            name: 'main'
        },
        {
            path: '/about',
            component: About,
            name: 'about',
            children:[
                {
                    path:'',
                    component:CeoAbout
                },
                {
                    path:'ceo',
                    component:CeoAbout
                },
                {
                    path:'ability',
                    component:CeoAbout
                },
                {
                    path:'company',
                    component:CeoAbout
                },

            ]
        }
    ]
})

export default router;
