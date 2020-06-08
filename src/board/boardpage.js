import EventBus from '../eventbus';
import './board.scss'
const boardPage = {
    template:`<div class='board'>
                    <router-view></router-view>
               </div>`,
                 created() {
                    EventBus.$emit('moNav',false)
                },
}

export default boardPage;