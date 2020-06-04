import './header.scss';
import moNav from '../common/mo_nav'

const Header = {
    template:`<header >
        <moNav v-bind:show='moNav'/>

        <div class='wrap'>
            <router-link to='/' tag='h1'>
            <img v-bind:src='logo' class='default'>
            <img v-bind:src='logo_b' class='black'>
            </router-link>
            <ul>
                <li>
                    <router-link to='/about' tag='span'>회사 소개</router-link>
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
            <div class='login_btn'>로그인</div>

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
                headerActive:false,
                moNav:false,
                logo:"image/logo_w.png",
                logo_b:"image/logo.png"
            }
        },
        methods: {
            MoNavOpen(){
                this.moNav == false?this.moNav = true:this.moNav = false
            },
            mouseover(){
                this.headerActive == false?this.headerActive = true:this.headerActive = false
            },
            mouseout(){
                this.headerActive == false?this.headerActive = false:this.headerActive = true
            }
        },
    }

export default Header;