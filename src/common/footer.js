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
                    <div class='foot'></div>
                </footer>`,
       components: {
        Carousel,
        Slide
      },
}

export default Footer;