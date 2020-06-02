import VueRouter from 'vue-router';
import Mainpage from './main/mainpage';

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Mainpage,
            name: 'main'
        }
    ]
})

export default router;
