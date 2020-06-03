import './header.scss';
import moNav from '../common/mo_nav'

const Header = {
    template:`<header>
        <moNav v-bind:show='moNav'/>

        <div class='wrap'>
            <h1>
                <img src='image/logo.png'>
            </h1>   
            <ul>
                <li>
                    회사 소개
                    <div class='hidden_menu'>
                        <p>CEO 인사말</p>
                        <p>기업역량</p>
                        <p>회사소개</p>
                    </div>
                </li>
                <li>제품 소개
                    <div class='hidden_menu'>
                        <p>Win-Win Pro</p>
                        <p>Win-Win Pos</p>
                    </div>
                </li>
                <li>
                    고객 지원 센터
                    <div class='hidden_menu'>
                        <p>자주하는 질문</p>
                        <p>묻고 답하기</p>
                        <p>고객지원센터</p>
                    </div>
                </li>
                <li>
                    팜 카페
                </li>
            </ul>
            <div class='mo_menu' @click='MoNavOpen' v-bind:class="{active:moNav}">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div class='slide_down'>
            <div class='wrap'>
            </div>            
        </div>
    </header>`,
    components:{
        moNav
        },
        data(){
            return{
                moNav:false
            }
        },
        methods: {
            MoNavOpen(){
                this.moNav == false?this.moNav = true:this.moNav = false
                console.log(this.moNav)
            }
        },
    }

export default Header;