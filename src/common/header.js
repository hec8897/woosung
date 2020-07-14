import './header.scss';
import moNav from '../common/mo_nav'
import EventBus from '../eventbus';


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
                <li>
                    <router-link to='/product' tag='span'>제품 소개</router-link>
                    <div class='hidden_menu'>
                        <router-link to='/product/pro' tag='p'>Win-Win Pro</router-link>    
                        <router-link to='/board/faq/pro' tag='p' class='mini'>자주하는 질문</router-link>    
                        <router-link to='/product/pos' tag='p'>Win-Win Pos</router-link>    
                        <router-link to='/board/faq/pos' tag='p' class='mini'>자주하는 질문</router-link>    
                    </div>
                </li>
                <li>
                    <router-link to='/information' tag='span'>정보 공유</router-link>
                    <div class='hidden_menu'>
                        <!-- <router-link to='/information/info1' tag='p'>병충해 알림</router-link>     -->
                        <router-link to='/information/info3' tag='p'>정보 동영상</router-link>    
                        <router-link to='/information/info2' tag='p'>농업계 소식</router-link>    
                        <p onclick="alert('서비스 준비중입니다.')">농자재 소식</p>
                        <p onclick="alert('서비스 준비중입니다.')">병충해 알림</p>
                        <!-- <router-link to='/information/info4' tag='p'>농업계 소식</router-link>        -->
                    </div>
                </li>
                <li>
                    <router-link to='/board' tag='span'>고객 지원 센터</router-link>
                    <div class='hidden_menu'>
                        <router-link to='/board/faq/all' tag='p'>자주하는 질문</router-link>    
                        <router-link to='/board/qna' tag='p'>묻고 답하기</router-link>    
                        <router-link to='/board/support' tag='p'>고객지원센터</router-link>    
                    </div>
                </li>
                <li onclick="alert('서비스준비중입니다.')">
                    <span>팜 카페</span>
                </li>
            </ul>
            <!-- <div class='login_btn'>로그인</div> -->

            <div class='mo_menu' @click='MoNavOpen' v-bind:class="{active:moNav}">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div class='slide_down'>
      
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
        created() {
            EventBus.$on('moNav',(data)=>{
                this.moNav = false
            })
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