import { Carousel, Slide } from 'vue-carousel';

const Section1 = {
    template:`<section class='section1'>
        <div class='wrap'>
            <div class='content notice'>
                <h2>공지사항 
                <span class='more'><b>더보기</b> +</span>
                    
                </h2>
                <ul class='notices'>
                    <li v-for='notice in notices'>
                        <p>{{notice.tit}}</p>
                        <span>{{notice.date}}</span>
                    </li>
                </ul>
            </div>
            <div class='content news_info'>
                <h2>농자재 소식
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
      data(){
          return{
              notices:[
                    {
                      idx:0,
                      writer:"우성소프트",
                      tit:"우성소프트에서 알려드립니다.",
                      date:"2020-06-03",
                    },
                    {
                        idx:1,
                        writer:"우성소프트",
                        tit:"사이트가 리뉴얼 되었습니다.",
                        date:"2020-06-03",
                    },
                    {
                        idx:2,
                        writer:"우성소프트",
                        tit:"테스트 입력",
                        date:"2020-06-03",
                      },
                      {
                          idx:3,
                          writer:"우성소프트",
                          tit:"우성소프트 테스트 입력",
                          date:"2020-06-03",
                      },
                      {
                        idx:4,
                        writer:"우성소프트",
                        tit:"우성소프트에서 알려드립니다.",
                        date:"2020-06-03",
                      },
                      {
                          idx:5,
                          writer:"우성소프트",
                          tit:"우성소프트에서 알려드립니다2.",
                          date:"2020-06-03",
                      },

              ]
          }
      }
}

export default Section1;