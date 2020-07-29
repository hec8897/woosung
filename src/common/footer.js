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
                            <Slide v-for="footerSite in footerSites">
                                <div>
                                    <a :href="footerSite.url" target='blank'>
                                        <img :src='footerSite.logo'>
                                    </a>
                                </div>
                            </Slide>
                  
                        </Carousel>

                    </div>
                    <div class='foot'>
                        <img src='image/logo_w.png' class='logo'>
                        <ul>
                            <router-link to='/about' tag="li">회사소개</router-link>
                            <router-link to='/product' tag="li">제품소개</router-link>
                            <router-link to='/information' tag="li">정보공유</router-link>
                            <router-link to='/board/faq/all' tag="li">고객지원센터</router-link>
                            <li><a href="pdf/개인정보처리방침.pdf" target='blank'>개인정보처리방침</a></li>
                            <li>팜카페</li>
                        </ul>
                        <p><span>대표:</span> 이태권 <span>주소:</span> 서울 특별시 강서구 마곡 중앙6로 40 718호</p>
                        <p><span>사업자등록번호:</span> 110111-7309283</p>
                        <p><span>전화번호:</span> 1544-6301 , 02-6959-8161 <span>이메일:</span> woosungsoft@naver.com</p>
                    </div>
                </footer>`,
       components: {
        Carousel,
        Slide
      },
      data(){
          return{
              footerSites:[
                  {
                      idx:0,
                      name:'포유 인포택',
                      url:'http://foryou.inetpia.re.kr/',
                      logo:'image/footer/logo11.png'
                  },
                  {
                    idx:1,
                    name:'경농',
                    url:'http://www.knco.co.kr/',
                    logo:'image/footer/logo1.png'
                },
                {
                    idx:2,
                    name:'농협 캐미컬',
                    url:'http://www.nhchemical.com/',
                    logo:'image/footer/logo2.png'
                },
                {
                    idx:3,
                    name:'동방아그로',
                    url:'http://www.dongbangagro.co.kr/',
                    logo:'image/footer/logo3.png'
                },
                {
                    idx:4,
                    name:'bayer',
                    url:'https://www.bayer.co.kr/',
                    logo:'image/footer/logo4.png'
                },
                {
                    idx:5,
                    name:'성보화학',
                    url:'http://www.sbcc.kr/',
                    logo:'image/footer/logo5.png'
                },
                {
                    idx:6,
                    name:'syngenta',
                    url:'https://www.syngenta.co.kr/',
                    logo:'image/footer/logo6.png'
                },
                {
                    idx:7,
                    name:'인바이오',
                    url:'http://www.enbio.co.kr/',
                    logo:'image/footer/logo7.png'
                },
                {
                    idx:8,
                    name:'팜한농',
                    url:'https://www.farmhannong.com/',
                    logo:'image/footer/logo8.png'
                },
                {
                    idx:9,
                    name:'한국삼공',
                    url:'http://www.30agro.co.kr/',
                    logo:'image/footer/logo9.png'
                },
                {
                    idx:10,
                    name:'한얼사이언스',
                    url:'http://www.hescience.co.kr/',
                    logo:'image/footer/logo10.png'
                }
              ]
          }
      }
}

export default Footer;