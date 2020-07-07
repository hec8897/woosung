import Slider from './slider'
import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'
import Section4 from './section4'
import EventBus from '../eventbus';
import './mainpage.scss';

const MainPage = {
    template:`<div class='home'>
                <Slider/>
                <Section1 />
                <Section4 />
                <Section2 />
                <div class='footer_banner'>
                <div class='wrap'>
                    <div>
                        <h3><b>적은 투자</b> 큰 효과 <b>다양한 기능</b>으로 업무를 신속하고 편리하게</br>
                        <b>스마트 시대!</b> 사업주님의 사업장도 스마트 해집니다.</h3>
                        <div class='btn' @click='openPopup'>
                            간단 상담 신청
                        </div>
                        <!-- <img src="image/logo.png"> -->
                    </div>
                </div>
                </div>
            </div>`,
    components:{
        Slider,
        Section1,
        Section2,
        Section3,
        Section4,
    },
    created() {
        EventBus.$emit('moNav',false)
        EventBus.$on('consultPopup',(Data)=>{
            this.show = Data
        })
    },
    methods: {
        parent(data){
            this.show = data
        },
        openPopup(){
            EventBus.$emit('consultPopup',true)
        }
    },
}

export default MainPage;