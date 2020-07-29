import { Carousel, Slide } from 'vue-carousel';
const MainSlider = {
    template:`<div class='slider'>
            <carousel 
            :perPage='1' 
            :loop='true'
            :autoplay='true'
            :autoplayTimeout="3500"
            >
            <slide>
                <div class='inner inner_1'>
                    <div class='slide_content'>
                        <div>
                            <h4 class='w_text'>쉽고 빠른 농자재</h4>
                            <h3>판매재고 프로그램의 기준!</h3>
                            <h4>Walk Together, Win Together</h4>
                        </div>
                    </div>
                </div>
            </slide>
            <slide>
                <div class='inner inner_2'>
                <div class='wrap'>
                     <img src="image/product/pos.png"/>
                     <div class='text_area'>
                         <h3>국내 최초 농약 유통 포스 프로그램</h3>
                         <h2>Win-Win 포스</h2>
                         <p>복잡하고 어려워진 농약판매 우성 소프트가 해결 해드리겠습니다.</p>
                         <router-link tag='div' to='/product/pos' class='btn'>자세히 보기</router-link>
                     </div>
                    </div>
                </div>
            </slide>
            <slide>
            <div class='inner inner_2'>
            <div class='wrap'>
                <img src="image/product/pro.png"/>
                <div class='text_area'>
                    <h3>작물 유통 프로그램의 기준!!</h3>
                    <h2>Win-Win Pro</h2>
                    <p>복잡하고 어려워진 농약판매 우성 소프트가 해결 해드리겠습니다.</p>
                    <router-link tag='div' to='/product/pro' class='btn'>자세히 보기</router-link>

                </div>
            </div>
                </div>
            </slide>
            </carousel>
    </div>`,
    components: {
        Carousel,
        Slide
      }
}

export default MainSlider;