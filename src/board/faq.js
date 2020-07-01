import board from './board'
import eventBus from '../eventbus';
import listNumber from '../common/list-number'
import axios from 'axios'

//모드 변경필요
const faq = {
    props:['mode'],
    template:`<div class='faq'>
        <div class='board_head'>
            <h3>자주하는 질문(FAQ)</h3>
        </div>
        <section class='section1'>
        <div class='wrap'>
            <h2>자주하는 질문</h2>
            <nav class='lnb faq_lnb'>
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
            </nav>
            <ul class='faq'>
                <div v-for='(filter,i) in filters' v-if='i < limit && i >= start'>
                    <li v-bind:id="'qa'+i" v-on:click="openAA(i)">
                        <p>
                        <label v-if="filter.cate=='pos'">Win-Win Pos</label>
                        <label v-else-if="filter.cate=='pro'">Win-Win Pro</label>
                        <label v-else-if="filter.cate=='etc'">기타</label>
                        {{filter.tit}}</p>
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
        // eventBus.$emit('UpdateList', {
        //     DataLength: Math.ceil((this.filters.length) / 10),
        //     nowpage: this.limit - 10
        // })
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
            limit:10,
            start:0,
            mode:"all",
            filters:"",
            faqs:""
        }
    },
    methods: {
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
            this.listCates[0].value = false
            this.listCates[1].value = false
            this.listCates[2].value = false
            this.listCates[3].value = false

            cates.value = true
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