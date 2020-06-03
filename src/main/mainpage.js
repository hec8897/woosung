import Slider from './slider'
import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'


import './mainpage.scss';

const MainPage = {
    template:`<div class='home'>
        <Slider/>
        <Section1 />
        <Section2 />
        <Section3 />
        
    </div>`,
    components:{
        Slider,
        Section1,
        Section2,
        Section3


    }
}

export default MainPage;