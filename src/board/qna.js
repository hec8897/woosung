import eventBus from '../eventbus';
import listNumber from '../common/list-number'
const download = {
    template:`<div class='qna'>
        <div class='board_head'>
            <h3>묻고 답하기</h3>
        </div>
        <section class='section1'>
            <div class='wrap'>
                <h2>묻고 답하기</h2>
                <nav>
                    <div class='btn' v-bind:class="{active:boardMode}">문의 게시판</div>
                    <div class='btn' v-bind:class="{active:writeMode}">문의하기</div>
                </nav>
                <table>
                    <thead>
                        <tr>
                            <td>접수번호</td>
                            <td>채널 <b-icon icon="chevron-compact-right"/> 분류</td>
                            <td>제목</td>
                            <td>작성일</td>
                            <td>상태</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(board,i) in boards" v-if='i < limit && i >= start'>
                            <td>{{i+1}}</td>
                            <td>묻고 답하기 <b-icon icon="chevron-compact-right"/> {{board.cate}}</td>
                            <td>{{board.title}}</td>
                            <td>{{board.date}}</td>
                            <td>{{board.status}}</td>
                        </tr>
                    </tbody>
                </table>
                <listNumber  v-bind:DataLength='Math.ceil((this.boards.length)/10)' v-bind:nowpage='this.limit-10'/>

            </div>
        </section>
    </div>`,
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
    data(){
        return{
            boardMode:true,
            writeMode:false,
            //true 문의 게시판 false 문의하기
            limit:10,
            start:0,
            boards:[
                {
                    no:0,
                    cate:'win-win pro',
                    title:'장애 신고 (708 에러)',
                    date:'20200408',
                    status:'문의 확인'
                },
                {
                    no:0,
                    cate:'win-win pro',
                    title:'장애 신고 (708 에러)',
                    date:'20200408',
                    status:'문의 확인'
                },
                {
                    no:0,
                    cate:'win-win pro',
                    title:'장애 신고 (708 에러)',
                    date:'20200408',
                    status:'문의 확인'
                },
                {
                    no:0,
                    cate:'win-win pro',
                    title:'장애 신고 (708 에러)',
                    date:'20200408',
                    status:'문의 확인'
                },
                {
                    no:0,
                    cate:'win-win pro',
                    title:'장애 신고 (708 에러)',
                    date:'20200408',
                    status:'문의 확인'
                },
                {
                    no:0,
                    cate:'win-win pro',
                    title:'장애 신고 (708 에러)',
                    date:'20200408',
                    status:'문의 확인'
                },
                {
                    no:0,
                    cate:'win-win pro',
                    title:'장애 신고 (708 에러)',
                    date:'20200408',
                    status:'문의 확인'
                },
                {
                    no:0,
                    cate:'win-win pro',
                    title:'장애 신고 (708 에러)',
                    date:'20200408',
                    status:'문의 확인'
                },
                {
                    no:0,
                    cate:'win-win pro',
                    title:'장애 신고 (708 에러)',
                    date:'20200408',
                    status:'문의 확인'
                },
                {
                    no:0,
                    cate:'win-win pro',
                    title:'장애 신고 (708 에러)',
                    date:'20200408',
                    status:'문의 확인'
                },
                {
                    no:0,
                    cate:'win-win pro',
                    title:'장애 신고 (708 에러)',
                    date:'20200408',
                    status:'문의 확인'
                },
                {
                    no:0,
                    cate:'win-win pro',
                    title:'장애 신고 (708 에러)',
                    date:'20200408',
                    status:'문의 확인'
                },
                {
                    no:0,
                    cate:'win-win pro',
                    title:'장애 신고 (708 에러)',
                    date:'20200408',
                    status:'문의 확인'
                },
                {
                    no:0,
                    cate:'win-win pro',
                    title:'장애 신고 (708 에러)',
                    date:'20200408',
                    status:'문의 확인'
                },
                {
                    no:0,
                    cate:'win-win pro',
                    title:'장애 신고 (708 에러)',
                    date:'20200408',
                    status:'문의 확인'
                }
            ]
        }
    },
    components:{
        listNumber
    },
    methods: {
        
    },
}

export default download;