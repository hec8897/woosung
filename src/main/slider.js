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
                    <p>Slide 1 Content</p>
            </slide>
            <slide>
                <p>Slide 2 Content</p>
            </slide>
            <slide>
                <p>Slide 3 Content</p>
            </slide>
            </carousel>
    </div>`,
    components: {
        Carousel,
        Slide
      }
}

export default MainSlider;