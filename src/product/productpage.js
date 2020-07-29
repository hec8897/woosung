import './product.scss';
import ConsultSection from './consult'

const product = {
    template:`<div class='product'>
                <router-view></router-view>
                <ConsultSection />
            </div>`,
    components:{
            ConsultSection
        }
 
}

export default product;