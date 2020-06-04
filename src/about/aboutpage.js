import './about.scss'
import EventBus from '../eventbus';
const About = {
    template:`<div class='about'>
        <router-view></router-view>
    </div>`,
    created() {
        EventBus.$emit('moNav',false)
    },
}

export default About;