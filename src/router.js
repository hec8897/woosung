import VueRouter from 'vue-router';
import Mainpage from './main/mainpage';
import About from './about/aboutpage';
import CeoAbout from './about/ceo_about'
import Product from './product/productpage'
import Pro from './product/pro'
import Pos from './product/pos'
import boardPage from './board/boardpage';
import faq from './board/faq';
import download from './board/download';
import support from './board/support';


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
        },
        {
            path:'/board',
            component:boardPage,
            name:'board',
            children:[
                {
                    path:'',
                    component:faq
                },
                {
                    path:'faq',
                    component:faq
                },
                {
                    path:'download',
                    component:download
                },
                {
                    path:'support',
                    component:support
                }

            ]
        }
    ]
})

export default router;
