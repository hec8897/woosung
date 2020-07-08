import { Carousel, Slide } from 'vue-carousel';

const MainMateral = {
    template:`<div class='content news_info'>
    <h2>농자재 정보
        <!-- <span class='more'><b>더보기</b> +</span> -->
    </h2>
    <div class='news_photo'>
        <Carousel 
        :navigationEnabled="false"
        per-page="3"
        loop="true"
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

        </Carousel>
    </div>
</div>`,
components:{
    Carousel,
    Slide,
}

}

export default MainMateral;