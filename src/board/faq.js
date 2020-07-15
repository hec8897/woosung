import eventBus from '../eventbus';
import faqBoard from './faq_board'

//모드 변경필요
const faq = {
    props:['mode'],
    template:`<div class='faq'>
        <div class='board_head'>
            <h3>자주하는 질문(FAQ)</h3>
        </div>

        <nav class='lnb faq_lnb'>
            <div class='wrap'>
                <ul v-if="mode == 'all'">
                    <li 
                        v-for="listCate in listCates" 
                        @click="filterData(listCate)" 
                        v-bind:class="{active:listCate.value}"
                        >
                        <span v-if="listCate.Name=='all'">전체</span>
                        <span v-if="listCate.Name=='pro'">Win-Win pro</span>
                        <span v-if="listCate.Name=='pos'">Win-Win pos</span>
                        <span v-if="listCate.Name=='etc'">기타</span>
                    </li>
                </ul>
            </div>
        </nav>
        <faqBoard v-bind:mode='filterCate' v-if="this.mode=='all'"/>
        <faqBoard mode='pro' v-else-if="this.mode=='pro'"/>
        <faqBoard mode='pos' v-else-if="this.mode=='pos'"/>
    </div>`,
    data(){
        return{
            listCates:[
                {Name:'all', value:true},
                {Name:'pro', value:false},
                {Name:'pos', value:false},
                {Name:'etc', value:false},
            ],
            filterCate:'all',
            filters:[],
            midCates:'',
            ActiveCate:'전체',
        }
    },
    components:{
        faqBoard
    },
 
    mounted() {
        eventBus.$on('NextPage', (Data) => {
            this.start = Data * 10;
            this.limit = (Data * 10) + 10
        })
    },

    methods: {
        //여기 수정
        filterData(cates){
            this.ActiveCate = '전체'

            for(let i = 0; i<this.listCates.length; i++){
                this.listCates[i].value = false
            }
            console.log(cates)
            cates.value = true
            this.filterCate = cates.Name


            eventBus.$emit('filter',cates)
        },
    },
}

export default faq;