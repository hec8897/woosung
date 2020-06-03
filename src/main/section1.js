import { Carousel, Slide } from 'vue-carousel';

const Section1 = {
    template:`<section class='section1'>
        <div class='wrap'>
            <div class='content notice'>
                <h2>공지사항 
                <span class='more'><b>더보기</b> +</span>
                    
                </h2>
                <ul class='notices'>
                    <li>
                        <p>공지사항1
                        공지사항1
                        공지사항1
                        공지사항1
                        공지사항1
                        공지사항1
                        공지사항1
                        공지사항1</p>
                        <span>2020.06.22</span>
                    </li>
                    <li>공지사항2<span>2020.06.22</span></li>
                    <li>공지사항3<span>2020.06.22</span></li>
                    <li>공지사항4<span>2020.06.22</span></li>
                    <li>공지사항5<span>2020.06.22</span></li>
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
                    <!-- <div class='photos'>
                        <div class='inner'>
                            <div class='photo'>123</div>
                            <p>농자재 소식 농자재 소식 농자재 소식 </p>
                            <p class='date'>2020.06.01</p>
                        </div>
                    </div>
                    <div class='photos'>
                         <div class='inner'>
                            <div class='photo'>123</div>
                            <p>농자재 소식 농자재 소식 농자재 소식 </p>
                            <p class='date'>2020.06.01</p>
                        </div>
                    </div>
                    <div class='photos'>
                        <div class='inner'>
                            <div class='photo'>123</div>
                            <p>농자재 소식 농자재 소식 농자재 소식 </p>
                            <p class='date'>2020.06.01</p>
                        </div>
                    </div>
                 -->
                </div>
            </div>
        </div>
    </section>`,
       components: {
        Carousel,
        Slide
      }
}

export default Section1;