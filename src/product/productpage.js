import './product.scss';
import EventBus from '../eventbus';

const product = {
    template:`<div class='product'>
                <router-view></router-view>
            </div>`,
    created() {
        EventBus.$emit('moNav',false)
    },
}

export default product;