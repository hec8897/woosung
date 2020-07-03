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
            <!--<slide>
                <p>Slide 2 Content</p>
            </slide>
            <slide>
                <p>Slide 3 Content</p>
            </slide>-->
            </carousel>
    </div>`,
    components: {
        Carousel,
        Slide
      }
}

export default MainSlider;