import VueRouter from 'vue-router';
import Mainpage from './main/mainpage';
import About from './about/aboutpage';
import CeoAbout from './about/ceo_about'
import PlsAbout from './about/pls'
import Product from './product/productpage'
import Pro from './product/pro'
import Pos from './product/pos'
import Plus from './product/Plus'

import boardPage from './board/boardpage';
import faq from './board/faq';
import zoomFaq from './board/zoom_faq'
import qna from './board/qna';
import support from './board/support';
import zoom from './board/zoom'
import zoomQna from './board/zoom_qna'
import infopage from './info/infopage'
import info1 from './info/insectPage'
import info2 from './info/farmPage' 
import info3 from './info/moviepage'
import info4 from './info/material';
import materialView from './info/material_view';
import qnaWrite from './board/qna_write';
import EventBus from './eventbus'

const router = new VueRouter({
    mode:'history',
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
                    path:'pls',
                    component:PlsAbout
                }
            ]
        },
      
        {
            path:'/product',
            component:Product,
            name:'product',
            children:[
                {
                    path:'',
                    component:Pro,
                },
                {
                    path:'pro',
                    component:Pro
                },
                {
                    path:'plus',
                    component:Plus
                },
                {
                    path:'pos',
                    component:Pos
                }
            ]
        },
        {
            path:'/Information',
            name:'information',
            component:infopage,
            children:[
                {
                    path:'',
                    component:info2,
                },
                {
                    path:'info1',
                    component:info1,
                },
                {
                    path:'info2',
                    component:info2,
                    name:'farm'

                },
                {
                    path:'info3',
                    component:info3,
                    name:'movie'
                },
                {
                    path:'info4',
                    component:info4,
                    name:'material',
                },
                {
                    path:'info4/zoom/:idx',
                    props:true,
                    component:materialView

                }

            ]
        },
        {
            path:'/board',
            name:'board',
            component:boardPage,
            children:[
                {
                    path:'',
                    component:faq
                },
                {
                    path:'faq',
                    component:faq,
                },
                {
                    props:true,
                    path:'zoomfaq/:idx',
                    component:zoomFaq
                },
                {
                    path:'qna',
                    component:qna
                },
                {
                    props:true,
                    path:'zoomqna/:idx',
                    component:zoomQna
                },
                {
                    path:'qnawrite/',
                    component:qnaWrite
                },
                {
                    path:'support',
                    component:support,
                },
                {
                    props:true,
                    path:'zoom/:idx',
                    component:zoom
                }
            ]
        },
        {
         path:'/material',

        }
    ],
    scrollBehavior (to, from, savedPosition) {
        EventBus.$emit('moNav',false)
        return { x: 0, y: 0 }
      }
    
})


export default router;
