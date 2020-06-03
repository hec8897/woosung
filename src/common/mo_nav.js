import './monav.scss'
const MoNav = {
    props:['show'],
    template:`
    <transition name='fade'>
        <div class='mo_nav' v-if="show">
            <div class='inner'>
                <ul>
                    <li>회사소개</li>
                    <li>제품소개</li>
                    <li>고객지원센터</li>
                    <li>팜카페</li>
                </ul>
            </div>
        </div>
    </transition>
    `,

}

export default MoNav;