import VueRouter from 'vue-router';
import Mainpage from './main/mainpage';
import About from './about/aboutpage';
import CeoAbout from './about/ceo_about'
import Product from './product/productpage'
import Pro from './product/pro'
import Pos from './product/pos'


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
            ]
        },
        {
            path:'/product',
            component:Product,
            name:'product',
            children:[
                {
                    path:'',
                    component:Pro
                },
                {
                    path:'pro',
                    component:Pro
                },
                {
                    path:'pos',
                    component:Pos
                }
            ]
        }
    ]
})

export default router;
