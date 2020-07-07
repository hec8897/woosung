import { Carousel, Slide } from 'vue-carousel';
import axios from 'axios'
const Section1 = {
    template:`<section class='section1'>
        <div class='wrap'>
            <div class='content notice'>
                <h2>공지사항 
                <router-link tag="span" to="/board/support" class='more'><b>더보기</b> +</router-link>
                </h2>
                <ul class='notices'>
                    <li v-for='(notice,i) in notices' v-if="i<=6">
                        <router-link tag='p' v-bind:to="'/board/zoom/'+notice.no">{{notice.title}}</router-link>
                        <span>{{notice.date}}</span>
                    </li>
                </ul>
            </div>
            <div class='content news_info'>
                <h2>농자재 정보
                    <!-- <span class='more'><b>더보기</b> +</span> -->
                </h2>
                <div class='news_photo'>
                    <Carousel 
                    :navigationEnabled="false"
                    :per-page-custom=[[1024,3],[768,2]]
                    >
                    <slide>
                         <div class='photos'>
                            <a href="https://www.farmhannong.com/kor/pr/news/view.do?pageIndex=1&f=&seq=6585&rtnParm=%2526f%253D%2526q%253D&q=" target="blank"> 
                                <div class='inner'>
                                    <div class='photo'>
                                        <img src="image/material/sample1.jpg">
                                    </div>
                                    <h4>팜한농 "헤드라인"</h4>
                                    <p>장마철에 강한 신제품 탄저병약</p>
                                </div>
                            </a>
                        </div>
                    </slide>
                    <slide>
                    <div class='photos'>
                            <a href="http://www.sbcc.kr/front/kor/product/product_view.do" target="blank"> 
                                <div class='inner'>
                                    <div class='photo'>
                                        <img src="image/material/sample2.jpg">
                                    </div>
                                    <h4>성보화학 "페리맥스"</h4>
                                    <p>	달팽이 전문 유기농업자재</p>
                                
                                </div>
                            </a>
                        </div>
                    </slide>
                    
                    <slide>
                    <div class='photos'>
                    <a href="http://knconews.com/?p=1144" target="blank"> 

                            <div class='inner'>
                            <div class='photo'>
                                    <img src="image/material/sample3.jpg">
                                </div>
                                <h4>중기스타</h4>
                                <p>항성 잡초에 확실한 효과가 있는 신물질 제초제</p>
                            </div>
                        </div>
                    </slide>

                    </Carousel>
                </div>
            </div>
        </div>
    </section>`,
       components: {
        Carousel,
        Slide
      },
      created() {
          this.getData()
      },
      data(){
          return{
              notices:""
          }
      },
      methods: {
        getData(){
            
                    const BaseData = "../woosung_api/support.data.php"

                    axios.post(BaseData,{mode:'main'})
                    .then((result)=>{
                        this.notices = result.data.result;
                    })
                }
        }
}

export default Section1;