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
                    <div class='btn' @click="changeMode" v-if="writeMode">문의 게시판</div>
                    <div class='btn' @click="changeMode" v-if="boardMode">문의하기</div>
                </nav>
                <div class='write_table zoom' v-if="writeMode">
                    <div class='zoom_table'>
                        123
                    </div>
                </div>
                <table v-if="boardMode">
                    <thead>
                        <tr>
                            <td>접수번호</td>
                            <td>분류</td>
                            <td>제목</td>
                            <td>작성일</td>
                            <td>상태</td>
                        </tr>
                    </thead>
                    <tbody>
                        <router-link tag='tr' v-bind:to="'zoomqna/'+board.no" v-for="(board,i) in boards" v-if='i < limit && i >= start'>
                            <td>{{i+1}}</td>
                            <td>{{board.cate}}</td>
                            <td v-if="board.public" class='r_text'>비공개 글입니다</td>
                            <td v-else>{{board.title}}</td>
                            <td>
                                <span v-if="board.status === '답변완료'" class='b_text'>{{board.status}}</span>
                                <span v-else-if="board.status === '확인중'" class='r_text'>{{board.status}}</span>
                                <span v-else>{{board.status}}</span>
                            </td>
                            <td >{{board.date}}</td>
                        </router-link>
                    </tbody>
                </table>
                <listNumber v-if="boardMode" v-bind:DataLength='Math.ceil((this.boards.length)/10)' v-bind:nowpage='this.limit-10'/>

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
                    status:'접수중'
                },
                {
                    no:0,
                    cate:'win-win pro',
                    title:'장애 신고 (708 에러)',
                    date:'20200408',
                    status:'확인중'
                },
                {
                    no:0,
                    cate:'win-win pro',
                    title:'장애 신고 (708 에러)',
                    date:'20200408',
                    status:'답변완료'
                },
                {
                    no:0,
                    public:true,
                    cate:'win-win pro',
                    title:'비밀글입니다',
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
        changeMode(){
            this.boardMode == true?this.boardMode = false:this.boardMode = true
            this.writeMode == true?this.writeMode = false:this.writeMode = true
        }
        
    },
}

export default download;