import board from './board'
import eventBus from '../eventbus';
import listNumber from '../common/list-number'
import axios from 'axios'

//모드 변경필요
const faq = {
    template:`<div class='faq'>
        <div class='board_head'>
            <h3>자주하는 질문(FAQ)</h3>
        </div>
        <nav class='lnb faq_lnb'>
            <div class='wrap'>
                <ul>
                    <li 
                        v-for="listCate in listCates" 
                        @click="filterData(listCate,$event)" 
                        v-bind:class="{active:listCate.value}">
                        <span v-if="listCate.Name=='all'">전체</span>
                        <span v-if="listCate.Name=='pro'">Win-Win pro</span>
                        <span v-if="listCate.Name=='pos'">Win-Win pos</span>
                        <span v-if="listCate.Name=='etc'">기타</span>
                    </li>
                </ul>
                </div>
            </nav>
        <section class='section1'>
        <div class='wrap'>
            <h2 v-if="this.mode =='all'">전체</h2>
            <h2 v-if="this.mode =='pro'">Win-Win Pro</h2>
            <h2 v-if="this.mode =='pos'">Win-Win Pos</h2>
            <h2 v-if="this.mode =='etc'">기타</h2>

            <ul class='mid_cate'>
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
        </section>
    </div>`,
    components:{
        board,listNumber
    },
    created() {
        eventBus.$emit('moNav',false)
        this.getData();
    },
    mounted() {
    
        eventBus.$on('NextPage', (Data) => {
            this.start = Data * 10;
            this.limit = (Data * 10) + 10
        })
    },
    data(){
        return{
            listCates:[
                {Name:'all', value:true},
                {Name:'pro', value:false},
                {Name:'pos', value:false},
                {Name:'etc', value:false},
            ],
            midCates:'',
            ActiveCate:'전체',
            MidCate:{
                show:false,
                pro:["전체","고객관리", "고객자료"," 농진청전송", "매출장", "문자전송", "품목관리","품목자료","기타"],
                pos:["전체","고객관리", "고객자료"," 농진청전송", "매출장", "문자전송", "품목관리","품목자료","기타"],
                etc:["전체","고객관리", "고객자료"," 농진청전송", "매출장", "문자전송", "품목관리","품목자료","기타"]
            },
            limit:10,
            start:0,
            mode:"all",
            filters:[0],
            faqs:""
        }
    },
    methods: {
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

            console.log(this.filters[0])
        },
        getData(){
            const BaseData = "../woosung_api/faq.data.php"
            axios.post(BaseData,{mode:'page'})
            .then((result)=>{
                this.faqs = result.data.result;
                this.filters = this.faqs;

                eventBus.$emit('UpdateList', {
                    DataLength: Math.ceil((this.filters.length) / 10),
                    nowpage: this.limit - 10
                })
            })
        },
        filterData(cates){
            this.ActiveCate = '전체'
            this.midCates = null;

            if(cates.Name == 'pro'){
                this.midCates = this.MidCate.pro
            }
            else if(cates.Name == 'pos'){
                this.midCates = this.MidCate.pos
            }
            else if(cates.Name == 'etc'){
                this.midCates = this.MidCate.etc
            }

            this.listCates[0].value = false
            this.listCates[1].value = false
            this.listCates[2].value = false
            this.listCates[3].value = false
            cates.value = true
            this.mode = cates.Name
            if(cates.Name == 'all'){
                this.filters = this.faqs;
            }
            else{
                this.filters = this.faqs.filter(function(Data){
                    return Data.cate == cates.Name
                })
                eventBus.$emit('UpdateList', {
                    DataLength: Math.ceil((this.filters.length) / 10),
                    nowpage: this.limit - 10
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

export default faq;