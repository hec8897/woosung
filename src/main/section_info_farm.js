import axios from 'axios';
import FarmPopup from '../info/farm_popup';
const sectionImfoFarm = {
    template:`<section class='section4'>
                <div class='wrap'>
                    <h2>농업계 소식<router-link tag='span' class='more' to='/information/info2'><b>더보기</b> +</router-link></h2>
                    <div class='items' >
                        <carousel 
                        :loop='true'
                        :per-page-custom=[[1024,4],[768,3],[540,2]]
                        >
                        <slide v-for="(content,i) in contents" v-if="i<5" >
                            <div class='slide_inner' @click="popupBoxShow(i)">                                
                                <div>
                                    <img v-bind:src="content.img"/>
                                </div>
                                <div>
                                    <h4>{{content.title}}</h4>
                                    </div>
                            </div>
                        </slide>
                        </carousel>
                        <FarmPopup
                            v-bind:show="show" 
                            v-bind:data="popupData"
                            @child="parent"
                        />
                    </div>
                </div>
    </section>`,
    components:{
       FarmPopup
        },
        data(){
            return{
                show:false,
                popupData:"",
                contents:""
            }
        },
        created() {
            const BaseData = "../woosung_api/farm.data.php"
            axios.post(BaseData,{mode:'main'})
            .then((result)=>{
                this.contents = result.data.result
                this.mode = 'load'
            })
        },
        methods: {
            parent(data){
                this.show = data
            },
            popupBoxShow(i){
                this.show = true
                this.popupData = this.contents[i]
            }
        }
}

export default sectionImfoFarm;