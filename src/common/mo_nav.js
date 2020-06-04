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
                        <span>제품소개</span>
                        <div class='sub_menu'>
                            <p>Win-Win Pro</p>
                            <p>Win-Win Pos</p>
                        </div>
                    </li>
                    <li>
                        <span>고객지원센터</span>
                    <div class='sub_menu'>
                        <p>자주하는 질문</p>
                        <p>묻고 답하기</p>
                        <p>고객지원센터</p>
                        </div>
                    </li>
                    <li>팜카페</li>
                </ul>
            </div>
        </div>
    </transition>`

}

export default MoNav;