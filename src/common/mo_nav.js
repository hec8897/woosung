import './monav.scss'
const MoNav = {
    props:['show'],
    template:`
    <transition name='fade'>
        <div class='mo_nav' v-if="show">
            <div class='inner'>
                <ul>
                    <li>
                        <router-link to='/about' tag='span'>회사 소개</router-link>
                    </li>
                    <li>
                        <router-link to='/product' tag='span'>제품 소개</router-link>
                        <div class='sub_menu'>
                            <router-link to='/product/pro' tag='p'>Win-Win Pro</router-link>    
                            <router-link to='/product/pos' tag='p'>Win-Win Pos</router-link>    
                        </div>
                    </li>
                    <li>
                    <router-link to='/board' tag='span'>고객 지원 센터</router-link>
                        <div class='sub_menu'>
                            <router-link to='/board/faq' tag='p'>자주하는 질문</router-link>    
                            <router-link to='/board/support' tag='p'>묻고 답하기</router-link>    
                            <router-link to='/board/download' tag='p'>고객지원센터</router-link>  
                        </div>
                    </li>
                    <li>팜카페</li>
                </ul>
            </div>
        </div>
    </transition>`

}

export default MoNav;