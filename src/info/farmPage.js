import eventBus from '../eventbus';
import listNumber from '../common/list-number'
import FarmPopup from './farm_popup';
import axios from 'axios';

const farmPage = {
    template:`<section class='farm'>
                    <div class='content wrap'>
                        <h2>농업계 소식</h2>

                        <ul class='content_main'>
                            <li v-for = "(content,i) in contents" v-if='i < limit && i >= start' @click="popupBoxShow(i)">
                                <div class='img'>
                                    <img v-bind:src="content.thumnail">
                                </div>
                                <div class='text'>
                                    <h4>{{content.title}}</h4>
                                    <p>{{content.desc}}</p>
                                    <p class='date'>작성일: {{$moment(content.date).format('YYYY-MM-DD')}}</p>
                                </div>
                            </li>
                        </ul>
                        
                        <FarmPopup
                                v-bind:show="show" 
                                v-bind:data="popupData"
                                @child="parent"
                        />
                            
                        <listNumber 
                            v-bind:DataLength='Math.ceil((contents.length)/10)' 
                            v-bind:nowpage='limit-10'
                        />
                    </div>
                </section>`,
        components:{
            listNumber,FarmPopup
        },
        data(){
            return{
                show:false,
                start:0,
                limit:9,
                popupData:"",
                contents:""
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
        mounted() {

            eventBus.$on('NextPage', (Data) => {
                this.start = Data * 10;
                this.limit = (Data * 10) + 9
            })

        },
        updated() {

            eventBus.$emit('UpdateList', {
                DataLength: Math.ceil((this.contents.length) / 10),
                nowpage: this.limit - 10
             })

        },
        methods: {
            parent(data){
                this.show = data
            },
            popupBoxShow(i){
                this.show = true
                this.popupData = this.contents[i]
            },
        }
}

export default farmPage;