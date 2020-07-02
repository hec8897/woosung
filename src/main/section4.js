import axios from 'axios';
import FarmPopup from '../info/farm_popup';
const section4 = {
    template:`<section class='section4'>
                <div class='wrap'>
                    <h2>농업계 소식<span class='more'><b>더보기</b> +</span></h2>
                    <div class='items' >
                        <carousel 
                        :loop='true'
                        :per-page-custom=[[1024,4],[768,3],[540,2],[340,1]]
                        >
                        <slide v-for="(content,i) in contents" v-if="i<5">
                            <div class='slide_inner' @click="popupBoxShow(i)">
                                <div>
                                    <img v-bind:src="content.img"/>
                                </div>
                                <div>
                                    <h4>{{content.title}}</h4>
                                    <p>{{content.desc}}</p>
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
            axios.get(BaseData)
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

export default section4;