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
                <h2>제품 홍보
                    <span class='more'><b>더보기</b> +</span>
                </h2>
                <div class='news_photo'>
                    <Carousel 
                    :navigationEnabled="false"
                    :per-page-custom=[[1024,3],[768,2]]
                    >
                    <slide>
                         <div class='photos'>
                            <div class='inner'>
                                <div class='photo'>123</div>
                                <p>농자재 소식 농자재 소식 농자재 소식 </p>
                                <p class='date'>2020.06.01</p>
                            </div>
                        </div>
                    </slide>
                    <slide>
                    <div class='photos'>
                            <div class='inner'>
                                <div class='photo'>123</div>
                                <p>농자재 소식 농자재 소식 농자재 소식 </p>
                                <p class='date'>2020.06.01</p>
                            </div>
                        </div>
                    </slide>
                    <slide>
                    <div class='photos'>
                            <div class='inner'>
                                <div class='photo'>123</div>
                                <p>농자재 소식 농자재 소식 농자재 소식 </p>
                                <p class='date'>2020.06.01</p>
                            </div>
                        </div>
                    </slide>
                    <slide>
                    <div class='photos'>
                            <div class='inner'>
                                <div class='photo'>123</div>
                                <p>농자재 소식 농자재 소식 농자재 소식 </p>
                                <p class='date'>2020.06.01</p>
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
              notices:[
                    {
                      idx:0,
                      title:"우성소프트에서 알려드립니다.",
                      date:"2020-06-03",
                    },
                    {
                        idx:1,
                        title:"사이트가 리뉴얼 되었습니다.",
                        date:"2020-06-03",
                    },
                    {
                        idx:2,
                        title:"테스트 입력",
                        date:"2020-06-03",
                      },
                      {
                          idx:3,
                          writer:"우성소프트",
                          title:"우성소프트 테스트 입력",
                          date:"2020-06-03",
                      },
                      {
                        idx:4,
                        writer:"우성소프트",
                        title:"우성소프트에서 알려드립니다.",
                        date:"2020-06-03",
                      },
                      {
                          idx:5,
                          writer:"우성소프트",
                          title:"우성소프트에서 알려드립니다2.",
                          date:"2020-06-03",
                      },

              ]
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