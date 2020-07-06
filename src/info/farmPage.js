import eventBus from '../eventbus';
import listNumber from '../common/list-number'
import FarmPopup from './farm_popup';
import axios from 'axios';

const farmPage = {
    template:`<section class='farm '>
        <div class='content wrap'>
            <h2>농업계 소식</h2>
            <ul class='content_main'>
                <li v-for = "(content,i) in contents" v-if='i < limit && i >= start' @click="popupBoxShow(i)">
                    <div class='img'>
                        <img v-bind:src="content.img">
                    </div>
                    <div class='text'>
                        <h4>{{content.title}}</h4>
                        <p>
                            {{content.desc}}
                        </p>
                        <p class='date'>작성일: {{content.date}}</p>
                    </div>
                </li>
                <FarmPopup
                    v-bind:show="show" 
                    v-bind:data="popupData"
                    @child="parent"
                />
            </ul>
            <listNumber v-bind:DataLength='Math.ceil((contents.length)/10)' v-bind:nowpage='limit-10'/>
            
        </div>
    </section>`,
         created() {
            const BaseData = "../woosung_api/farm.data.php"
            axios.post(BaseData,{mode:'main'})
            .then((result)=>{
                this.contents = result.data.result
                this.mode = 'load'
                eventBus.$emit('UpdateList', {
                   DataLength: Math.ceil((this.contents.length) / 10),
                   nowpage: this.limit - 10
                })
            })
        },
    mounted() {
        eventBus.$emit('moNav',false)
       
        eventBus.$on('NextPage', (Data) => {
            this.start = Data * 10;
            this.limit = (Data * 10) + 9
        })
    },
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