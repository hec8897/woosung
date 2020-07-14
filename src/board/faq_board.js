import eventBus from '../eventbus';
import listNumber from '../common/list-number'
import axios from 'axios'

const faqBoard = {
    props:['mode'],
    template:`      <section class='section1'>
    <div class='wrap'>
        <h2 v-if="this.mode =='all'">우성소프트 자주 묻는 질문</h2>
        <h2 v-if="this.mode =='pro'">우성 윈윈 PRO<span>Win-Win Pro</span></h2>
        <h2 v-if="this.mode =='pos'">우성 윈윈 포스<span>Win-Win Pos</span></h2>
        <h2 v-if="this.mode =='etc'">기타</h2>

        <ul class='mid_cate' v-if="this.mode !='all'">
            <li 
                v-for="midCate in midCates" 
                @click="ActiveMidCate(midCate)"
                v-bind:class="{active:ActiveCate == midCate}"
                v-text="midCate"
                >
        </li>
        </ul>

        <ul class='faq'>
            <div v-if="filters[0]==undefined" class='none'>
                <p>등록된 글이 없습니다.</p>
            </div>

            <div v-for='(filter,i) in filters' v-if='i < limit && i >= start'>
                <li v-bind:id="'qa'+i" v-on:click="openAA(i)">
                    <p>
                        <label v-if="filter.cate=='pos'">Win-Win Pos</label>
                        <label v-else-if="filter.cate=='pro'">Win-Win Pro</label>
                        <label v-else-if="filter.cate=='etc'">기타</label>
                        <span>{{filter.midCate}}</span>
                        <b>{{filter.tit}}</b>
                    </p>
                </li>
                <li v-bind:id="'aa'+i" class='beactive' >
                    <div v-html="filter.desc"></div>
                    <div class='btn close_btn' v-on:click="openAA(i)">
                        <b-icon icon="caret-up-fill"></b-icon>
                        닫기
                    </div>
                </li>
            </div>
        </ul>
        
        <listNumber  v-bind:DataLength='Math.ceil((filters.length)/10)' v-bind:nowpage='limit-10'/>
    </div>
    </section>`,
       components:{
       listNumber
    },
 
    data(){
        return{
            ActiveCate:'전체',
            MidCate:{
                show:false,
                pro:["전체","고객관리", "고객자료"," 농진청전송", "매출장", "문자전송", "품목관리","품목자료","기타"],
                pos:["전체","고객관리", "고객자료"," 농진청전송", "매출장", "문자전송", "품목관리","품목자료","기타"],
                etc:["전체","고객관리", "고객자료"," 농진청전송", "매출장", "문자전송", "품목관리","품목자료","기타"]
            },
            midCates:'',

            limit:10,
            start:0,
            filters:[],
            faqs:""
        }
    },
    created() {
        this.getData();
    },
    mounted() {
        
        eventBus.$on('filter',(Data)=>{
            this.filters = this.faqs;
            this.ActiveCate = '전체'
            if(Data.Name == 'all'){
                this.filters = this.faqs;
            }
            else{
                this.filters = this.faqs.filter(function(faq){
                    return faq.cate == Data.Name
                })
            }
        })

        eventBus.$on('NextPage', (Data) => {
            this.start = Data * 10;
            this.limit = (Data * 10) + 10
        })
    },

    updated() {
        if(this.mode == 'pro'){
            this.midCates = this.MidCate.pro
        }
        else if(this.mode == 'pos'){
            this.midCates = this.MidCate.pos
        }
        else if(this.mode == 'etc'){
            this.midCates = this.MidCate.etc
        }

        eventBus.$emit('UpdateList', {
            DataLength: Math.ceil((this.filters.length) / 10),
            nowpage: this.limit - 10
        })
    },
    methods: {
        
        getData(){
            const BaseData = "../woosung_api/faq.data.php"
            axios.post(BaseData,{mode:'page'})
            .then((result)=>{
                this.faqs = result.data.result;
                this.filters = this.faqs;
            })
        },
       
        ActiveMidCate(cate){
            this.ActiveCate = cate
            let mode = this.mode;

            if(cate == '전체'){
                this.filters = this.faqs.filter(function(Data){
                    return Data.cate == mode
                })
            }
            else{
                this.filters = this.faqs.filter(function(Data){
                    return Data.cate == mode && Data.midCate == cate
                })
            }
        },
        openAA(i){
            let target = document.getElementById(`aa${i}`)
            if(target.className =='beactive'){
                target.className = 'active'
            }
            else{
                target.className = 'beactive'
            }
        }
    },
}

export default faqBoard;