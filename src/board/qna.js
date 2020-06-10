import eventBus from '../eventbus';
import listNumber from '../common/list-number'
import LoginPage from '../common/loginpage';
const download = {
    template:`<div class='qna'>
        <div class='board_head'>
            <h3>묻고 답하기</h3>
        </div>
        <LoginPage v-if="!login"/>
        <section class='section1' v-else>
            <div class='wrap'>
                <h2>묻고 답하기</h2>
                <nav>
                    <div class='btn' @click="changeMode" v-if="writeMode">문의 게시판</div>
                    <div class='btn' @click="changeMode" v-if="boardMode">문의하기</div>
                </nav>
                <div class='write_table zoom' v-if="writeMode">
                    <div class='zoom_table'>
                        <div class='head'>
                            <h3>문의하기</h3>
                            <div class='type'>
                                <span>문의 유형</span>
                                <label for='type1'>장애신고</label>
                                <input type="checkbox" id='type1'>

                                <label for='type2'>Win-Win Pro</label>
                                <input type="checkbox" id='type2'>

                                <label for='type3'>Win-Win Pos</label>
                                <input type="checkbox" id='type3'>

                                <label for='type4'>기타</label>
                                <input type="checkbox" id='type4'>
                            </div>
                        </div>
                        <div class='consult_board'>
                            <ul>
                                <li>
                                    <div class='th'>신청자</div>
                                    <div class='tb'><input type='text' placeholder="신청자를 입력해주세요"/></div>
                                </li>
                                <li>
                                    <div class='th'>연락처</div>
                                    <div class='tb'><input type='text' placeholder="연락처를 입력해주세요"/></div>
                                </li>
                                <li>
                                    <div class='th'>제목</div>
                                    <div class='tb'><input type='text' placeholder="제목을 입력해주세요"/></div>
                                </li>

                                <li>
                                   <textarea>문의하실 내용을 입력해주세요</textarea>
                                </li>
                            </ul>
                        </div>
                        <div class='foot'>
                            <p><label for='public'>비밀글 등록 여부  </label><input type="checkbox" id='public'></p>
                            <b-form-file 
                            ref="file-input" 
                            placeholder="이미지 파일을 선택해주세요"
                            accept=".jpg, .png, .gif"
                            class="mb-2"></b-form-file>
                            
                        </div>
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
                <listNumber v-if="boardMode" v-bind:DataLength='Math.ceil((boards.length)/10)' v-bind:nowpage='limit-10'/>
            </div>
        </section>
    </div>`,
    created() {
        eventBus.$emit('moNav',false)
        this.boards = [
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
        // this.login = this.$store.state.login;
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
        eventBus.$on('login',(Data)=>{
            this.login = Data;
        })
    },
    data(){
        return{
            login:false,
            //vuex로 로그인 관리 묻고답하기
            boardMode:true,
            writeMode:false,
            file:'',
            //true 문의 게시판 false 문의하기
            limit:10,
            start:0,
            boards:""
        }
    },
    components:{
        listNumber,
        LoginPage
    },
    methods: {
        changeMode(){
            this.boardMode == true?this.boardMode = false:this.boardMode = true
            this.writeMode == true?this.writeMode = false:this.writeMode = true
        }
        
    },
}

export default download;