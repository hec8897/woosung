import board from './board'
import eventBus from '../eventbus';
import listNumber from '../common/list-number'
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
                    <li class='active'>전체</li>
                    <li>win-win pro</li>
                    <li>win-win pos</li>
                    <li>기타</li>
                </ul>
            </nav>
            <ul class='faq'>
                <div v-for='(faq,i) in faqs' v-if='i < limit && i >= start'>
                    <li v-bind:id="'qa'+i" v-on:click="openAA(i)">
                        <span>Q</span>
                        <p>
                        <label>{{faq.cate}}</label>{{faq.tit}}</p>
                    </li>
                    <li v-bind:id="'aa'+i" class='beactive'>
                        <span>A</span>
                        <p>{{faq.desc}}</p>
                    </li>
                </div>
            </ul>
            <listNumber  v-bind:DataLength='Math.ceil((this.faqs.length)/10)' v-bind:nowpage='this.limit-10'/>
        </div>
        </section>
    </div>`,
    components:{
        board,
        listNumber
    },
    mounted() {
        eventBus.$emit('UpdateList', {
            DataLength: Math.ceil((this.faqs.length) / 10),
            nowpage: this.limit - 10
        })
        eventBus.$on('NextPage', (Data) => {
            this.start = Data * 10;
            this.limit = (Data * 10) + 10
        })
    },
    data(){
        return{
            limit:10,
            start:0,
            faqs:[
                {
                    no:0,
                    cate:'win-win pro',
                    tit:'1자주하는 질문 테스트 글입니다 win-win pro',
                    desc:`자주하는 질문 테스트 본문 입니다.,자주하는 질문 테스트 본문 입니다.,자주하는 질문 테스트 본문 입니다.,자주하는 질문 테스트 본문 입니다.
                    자주하는 질문 테스트 본문 입니다.,자주하는 질문 테스트 본문 입니다.,자주하는 질문 테스트 본문 입니다.,자주하는 질문 테스트 본문 입니다.
                    자주하는 질문 테스트 본문 입니다.,자주하는 질문 테스트 본문 입니다.,자주하는 질문 테스트 본문 입니다.,자주하는 질문 테스트 본문 입니다.
                    자주하는 질문 테스트 본문 입니다.,자주하는 질문 테스트 본문 입니다.,자주하는 질문 테스트 본문 입니다.,자주하는 질문 테스트 본문 입니다.`
                },
                {
                    no:1,
                    cate:'win-win pro',
                    tit:'win-win pro 자주하는 질문 테스트 글',
                    desc:'win-win pro 자주하는 질문 테스트 글 win-win pro 자주하는 질문 테스트 글 win-win pro 자주하는 질문 테스트 글 본문'

                },
                {
                    no:2,
                    cate:'win-win pos',
                    tit:'win-win pos 자주하는 질문 테스트 글',
                    desc:'win-win pos 자주하는 질문 테스트 글 win-win pro 자주하는 질문 테스트 글 win-win pro 자주하는 질문 테스트 글 본문'
                },
                {
                    no:3,
                    cate:'기타',
                    tit:'기타 자주하는 질문 테스트 글',
                    desc:'기타 자주하는 질문 테스트 글 win-win pro 자주하는 질문 테스트 글 win-win pro 자주하는 질문 테스트 글 본문'
                },
                {
                    no:0,
                    cate:'win-win pro',
                    tit:'자주하는 질문 테스트 글입니다 win-win pro',
                    desc:'자주하는 질문 테스트 본문 입니다.,자주하는 질문 테스트 본문 입니다.,자주하는 질문 테스트 본문 입니다.,자주하는 질문 테스트 본문 입니다. '
                },
                {
                    no:4,
                    cate:'win-win pro',
                    tit:'win-win pro 자주하는 질문 테스트 글',
                    desc:'win-win pro 자주하는 질문 테스트 글 win-win pro 자주하는 질문 테스트 글 win-win pro 자주하는 질문 테스트 글 본문'

                },
                {
                    no:5,
                    cate:'win-win pos',
                    tit:'win-win pos 자주하는 질문 테스트 글',
                    desc:'win-win pos 자주하는 질문 테스트 글 win-win pro 자주하는 질문 테스트 글 win-win pro 자주하는 질문 테스트 글 본문'
                },
                {
                    no:6,
                    cate:'기타',
                    tit:'기타 자주하는 질문 테스트 글',
                    desc:'기타 자주하는 질문 테스트 글 win-win pro 자주하는 질문 테스트 글 win-win pro 자주하는 질문 테스트 글 본문'
                },
                {
                    no:7,
                    cate:'win-win pro',
                    tit:'자주하는 질문 테스트 글입니다 win-win pro',
                    desc:'자주하는 질문 테스트 본문 입니다.,자주하는 질문 테스트 본문 입니다.,자주하는 질문 테스트 본문 입니다.,자주하는 질문 테스트 본문 입니다. '
                },
                {
                    no:8,
                    cate:'win-win pro',
                    tit:'win-win pro 자주하는 질문 테스트 글',
                    desc:'win-win pro 자주하는 질문 테스트 글 win-win pro 자주하는 질문 테스트 글 win-win pro 자주하는 질문 테스트 글 본문'

                },
                {
                    no:9,
                    cate:'win-win pos',
                    tit:'win-win pos 자주하는 질문 테스트 글',
                    desc:'win-win pos 자주하는 질문 테스트 글 win-win pro 자주하는 질문 테스트 글 win-win pro 자주하는 질문 테스트 글 본문'
                },
                {
                    no:10,
                    cate:'기타',
                    tit:'2기타 자주하는 질문 테스트 글',
                    desc:'기타 자주하는 질문 테스트 글 win-win pro 자주하는 질문 테스트 글 win-win pro 자주하는 질문 테스트 글 본문'
                },
                {
                    no:10,
                    cate:'기타',
                    tit:'2기타 자주하는 질문 테스트 글',
                    desc:'기타 자주하는 질문 테스트 글 win-win pro 자주하는 질문 테스트 글 win-win pro 자주하는 질문 테스트 글 본문'
                }
            ]
        }
    },
    methods: {
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