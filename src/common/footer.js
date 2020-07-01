import { Carousel, Slide } from 'vue-carousel';
import './footer.scss'
const Footer = {
    template:`<footer>
                    <div class='logos wrap'>
                        <Carousel 
                        :per-page-custom=[[1200,5],[1024,4],[767,3]]
                        :loop="true"
                        :autoplay='true'
                        :autoplayTimeout="3500">
                            <Slide><div><img src='image/footer/logo1.png'></div></Slide>
                            <Slide><div><img src='image/footer/logo2.png'></div></Slide>
                            <Slide><div><img src='image/footer/logo3.png'></div></Slide>
                            <Slide><div><img src='image/footer/logo4.png'></div></Slide>
                            <Slide><div><img src='image/footer/logo5.png'></div></Slide>
                            <Slide><div><img src='image/footer/logo6.png'></div></Slide>
                            <Slide><div><img src='image/footer/logo7.png'></div></Slide>
                            <Slide><div><img src='image/footer/logo8.png'></div></Slide>
                            <Slide><div><img src='image/footer/logo9.png'></div></Slide>
                            <Slide><div><img src='image/footer/logo10.png'></div></Slide>
                        </Carousel>

                    </div>
                    <div class='foot'>
                        <img src='image/logo_w.png' class='logo'>
                        <ul>
                            <router-link to='/about' tag="li">회사소개</router-link>
                            <router-link to='/product' tag="li">제품소개</router-link>
                            <router-link to='/information' tag="li">정보공유</router-link>
                            <router-link to='/board' tag="li">고객지원센터</router-link>
                            <li><a href="pdf/개인정보처리방침.pdf" target='blank'>개인정보처리방침</a></li>
                            <li>팜카페</li>
                        </ul>
                        <p><span>대표:</span> 이태권 <span>주소:</span> 서울 특별시 강서구 마곡 중앙6로 40 718호</p>
                        <p><span>전화번호:</span> 1544-6301 <span>이메일:</span> woosungsoft@naver.com</p>
                    </div>
                </footer>`,
       components: {
        Carousel,
        Slide
      },
}

export default Footer;