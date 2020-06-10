import eventBus from '../eventbus';
import listNumber from '../common/list-number'
import { BIcon, BIconArrowUp, BIconArrowDown } from 'bootstrap-vue'
const support = {
    template:`<div class='support'>
        <div class='board_head'>
            <h3>고객지원센터</h3>
        </div>
        <section class='section1'>
            <div class='wrap'>
                <h2>고객지원센터</h2>
                <table>
                    <thead>
                        <tr>
                            <td>번호</td>
                            <td>채널 <b-icon icon="chevron-compact-right"/> 분류</td>
                            <td>제목</td>
                            <td>첨부파일</td>
                            <td>작성일</td>
                        </tr>
                    </thead>
                    <tbody>
                        <router-link v-bind:to="'zoom/'+board.no" tag='tr' v-for='(board,i) in boards' v-if='i < limit && i >= start'>
                            <td>{{i+1}}</td>
                            <td>채널 <b-icon icon="chevron-compact-right"/> {{board.cate}}</td>
                            <td>{{board.tit}}</td>
                            <td>
                                <img v-if='board.excel!=null'src='image/board/excel.svg'>
                                <img v-if='board.word!=null'src='image/board/msword.svg'>
                                <img v-if='board.pdf!=null'src='image/board/pdf.svg'>
                                <img v-if='board.hwp!=null'src='image/board/hwp.png'>
                            </td>
                            <td>{{board.date}}</td>
                        </router-link>
                    </tbody>
                </table>
                <listNumber  v-bind:DataLength='Math.ceil((this.boards.length)/10)' v-bind:nowpage='this.limit-10'/>

            </div>
        </section>
    </div>`,
    created() {
        EventBus.$emit('moNav',false)
    },
    data(){
        return{
            start:0,
            limit:10,
            boards:[
                {
                    no:0,
                    cate:'장애',
                    tit:"첫번째 글입니다. 두번째 글입니다. 두번째 글입니다. 두번째 글입니다. 두번째 글입니다.",
                    hwp:'123.hwp',
                    pdf:null,
                    word:null,
                    excel:'test.xlsx',
                    date:'2020.06.08'
                },
                {
                    no:1,
                    cate:'공지사항',
                    tit:"두번째 글입니다.",
                    hwp:'123.hwp',
                    pdf:'test.pdf',
                    word:'test.docs',
                    excel:'test.xlsx',
                    date:'2020.06.07'
                },
                {
                    no:2,
                    cate:'업데이트',
                    tit:"세번째 글입니다.",
                    hwp:null,
                    pdf:'test.pdf',
                    word:'test.docs',
                    excel:'test.xlsx',
                    date:'2020.06.08'
                },
                {
                    no:2,
                    cate:'업데이트',
                    tit:"세번째 글입니다.",
                    hwp:null,
                    pdf:'test.pdf',
                    word:'test.docs',
                    excel:'test.xlsx',
                    date:'2020.06.08'
                },
                {
                    no:2,
                    cate:'업데이트',
                    tit:"세번째 글입니다.",
                    hwp:null,
                    pdf:'test.pdf',
                    word:'test.docs',
                    excel:'test.xlsx',
                    date:'2020.06.08'
                },
                {
                    no:2,
                    cate:'업데이트',
                    tit:"세번째 글입니다.",
                    hwp:null,
                    pdf:'test.pdf',
                    word:'test.docs',
                    excel:'test.xlsx',
                    date:'2020.06.08'
                },
                {
                    no:2,
                    cate:'업데이트',
                    tit:"세번째 글입니다.",
                    hwp:null,
                    pdf:'test.pdf',
                    word:'test.docs',
                    excel:'test.xlsx',
                    date:'2020.06.08'
                },
                {
                    no:2,
                    cate:'업데이트',
                    tit:"세번째 글입니다.",
                    hwp:null,
                    pdf:'test.pdf',
                    word:'test.docs',
                    excel:'test.xlsx',
                    date:'2020.06.08'
                },
                {
                    no:2,
                    cate:'업데이트',
                    tit:"세번째 글입니다.",
                    hwp:null,
                    pdf:'test.pdf',
                    word:'test.docs',
                    excel:'test.xlsx',
                    date:'2020.06.08'
                },
                {
                    no:2,
                    cate:'업데이트',
                    tit:"세번째 글입니다.",
                    hwp:null,
                    pdf:'test.pdf',
                    word:'test.docs',
                    excel:'test.xlsx',
                    date:'2020.06.08'
                },
                {
                    no:2,
                    cate:'업데이트',
                    tit:"세번째 글입니다.",
                    hwp:null,
                    pdf:'test.pdf',
                    word:'test.docs',
                    excel:'test.xlsx',
                    date:'2020.06.08'
                }
            ]
        }
    },
    mounted() {
        eventBus.$emit('UpdateList', {
            DataLength: Math.ceil((this.boards.length) / 10),
            nowpage: this.limit - 10
        })
        eventBus.$on('NextPage', (Data) => {
            this.start = Data * 10;
            this.limit = (Data * 10) + 10
        })
    },
    components:{
        listNumber,
        BIcon,
        BIconArrowUp,
        BIconArrowDown
      },
}
export default support;