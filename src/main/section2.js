import { Carousel, Slide } from 'vue-carousel';

const Section2 ={
    template:`<section class='section2'>
        <div class='wrap'>
            <h2>
                정보 동영상
                <span class='more'><b>더보기</b> +</span>
            </h2>
            <div class='youtubes'>
                <carousel 
                :loop='true'
                :per-page-custom=[[1024,4],[768,3],[480,2],[360,2]]
                >
                <slide>
                    <div class='slide_inner'>1</div>
                </slide>
                <slide>
                    <div class='slide_inner'>2</div>
                </slide>
                <slide>
                    <div class='slide_inner'>3</div>
                </slide>
                <slide>
                    <div class='slide_inner'>4</div>
                </slide>

                <slide>
                    <div class='slide_inner'>5</div>
                </slide>

                <slide>
                    <div class='slide_inner'>6</div>
                </slide>
            </carousel>
        </div>
        </div>
    </section>`,
       components: {
        Carousel,
        Slide
      }
}

export default Section2;