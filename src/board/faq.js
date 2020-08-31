import eventBus from '../eventbus';
import faqBoard from './faq_board'
import listNumber from '../common/list-number'

//모드 변경필요
const faq = {
    props:['mode'],
    template:`<div class='faq'>
        <div class='board_head'>
            <h3>자주하는 질문(FAQ)</h3>
        </div>

        <nav class='lnb faq_lnb'>
            <div class='wrap'>
                <ul>
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
        
        <section class='wrap'>
            <h2>자주 묻는 질문 FAQ</h2>
            <table>
                <thead>
                    <tr>
                        <td>번호</td>
                        <td>분류</td>
                        <td>제목</td>
                        <td>날짜</td>
                        <td>조회수</td>
                    </tr>
                </thead>
                <tbody>
                    <router-link tag='tr' v-bind:to="'zoomfaq/'+filter.idx" v-for="(filter,i) in filters" v-if='i < limit && i >= start'>
                            <td>{{i+1}}</td>
                            <td>
                                <span v-if="filter.cate=='pro'">win-win Pro</span>
                                <span v-else-if="filter.cate=='pos'">win-win 포스</span>
                                <span v-else-if="filter.cate=='etc'">기타</span>
                            </td>
                            <td>{{filter.tit}}</td>

                            <td>{{$moment(filter.date).format('YYYY-MM-DD')}}</td>
                            <td >{{filter.join}}</td>
                            
                        </router-link>
                </tbody>
            </table>

            <listNumber 
            v-bind:DataLength='Math.ceil((filters.length)/10)' 
            v-bind:nowpage='limit-10'/>

        </section>
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
            faqs:null,
            filters:null,
            midCates:'',
            ActiveCate:'전체',
            limit:10,
            start:0
        }
    },
    components:{
        listNumber,
        faqBoard
    },
    created() {
        this.getData();

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
            // this.ActiveCate = '전체'

            for(let i = 0; i<this.listCates.length; i++){
                this.listCates[i].value = false
            }

            cates.value = true
            if(cates.Name == 'all'){
                this.filters = this.faqs
            }
            else{

                this.filters = this.faqs.filter((x)=>{
                    return x.cate == cates.Name
                })
            }
            eventBus.$emit('UpdateList', {
                DataLength: Math.ceil((this.filters.length) / 10),
                nowpage: this.limit - 10
            })
            this.start = 0
            this.limit = 10
        },
        getData(){
            const BaseData = "http://ec2-13-124-19-117.ap-northeast-2.compute.amazonaws.com/admin/api/faq"
            this.$Axios.get(BaseData)
            .then((result)=>{
                this.faqs = result.data.result;
                this.filters = this.faqs;
                eventBus.$emit('UpdateList', {
                    DataLength: Math.ceil((this.filters.length) / 10),
                    nowpage: this.limit - 10
                })
            })
        }
    },
}

export default faq;