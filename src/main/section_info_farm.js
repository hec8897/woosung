import axios from 'axios';
import FarmPopup from '../info/farm_popup';
const sectionImfoFarm = {
    template:`<section class='section4'>
                <div class='wrap'>
                    <h2>농업계 소식<router-link tag='span' class='more' to='/information/info2'><b>더보기</b> +</router-link></h2>
                    <div class='items' >
                        <carousel 
                            :navigationEnabled="true"
                            :navigationPrevLabel="prevBtn"
                            :navigationNextLabel="nextBtn"
                            :loop='true'
                            :per-page-custom=[[1024,4],[768,3],[540,2]]
                            >
                        <slide v-for="(content,i) in contents" v-if="i<5" >
                            <div class='slide_inner' @click="popupBoxShow(i)">                                
                                <div>
                                    <img v-bind:src="content.thumnail"/>
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
                contents:"",
                nextBtn:`<div class='btn_circle'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="25" height="25"
                viewBox="0 0 226 226"
                style=" fill:#444444;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,226v-226h226v226z" fill="none"></path><g fill="#444444"><path d="M67.74703,18.04469c-1.83625,0 -3.47828,1.11234 -4.18453,2.80734c-0.68859,1.71266 -0.2825,3.65484 1.04172,4.94375l87.20422,87.20422l-87.20422,87.20422c-1.18297,1.13 -1.65969,2.825 -1.23594,4.39641c0.40609,1.58906 1.64203,2.825 3.23109,3.23109c1.57141,0.42375 3.26641,-0.05297 4.39641,-1.23594l90.4,-90.4c1.76563,-1.76562 1.76563,-4.62594 0,-6.39156l-90.4,-90.4c-0.8475,-0.88281 -2.01281,-1.35953 -3.24875,-1.35953z"></path></g></g></svg></div>`,
                prevBtn:`<div class='btn_circle'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="25" height="25"
                viewBox="0 0 226 226"
                style=" fill:#444444;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,226v-226h226v226z" fill="none"></path><g fill="#444444"><path d="M158.11172,18.04469c-1.18297,0.01766 -2.29531,0.51203 -3.1075,1.35953l-90.4,90.4c-1.76562,1.76563 -1.76562,4.62594 0,6.39156l90.4,90.4c1.13,1.18297 2.825,1.65969 4.39641,1.23594c1.58906,-0.40609 2.825,-1.64203 3.23109,-3.23109c0.42375,-1.57141 -0.05297,-3.26641 -1.23594,-4.39641l-87.20422,-87.20422l87.20422,-87.20422c1.34188,-1.30656 1.73031,-3.28406 1.00641,-4.99672c-0.72391,-1.73031 -2.41891,-2.825 -4.29047,-2.75437z"></path></g></g></svg></div>`,

            }
        },
        created() {
            const BaseData = "http://ec2-13-124-19-117.ap-northeast-2.compute.amazonaws.com/admin/api/farm_data"
            axios.get(BaseData)
            .then((result)=>{
                this.contents = result.data.result.filter((x)=>{
                    return x.private == 1
                })
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