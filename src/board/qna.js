import eventBus from '../eventbus';
import listNumber from '../common/list-number'
import LoginPage from '../common/loginpage';
import axios from 'axios';

const download = {
    template:`<div class='qna'>
        <div class='board_head'>
            <h3>묻고 답하기</h3>
        </div>
        <!-- <LoginPage v-if="!login"/> -->
        <section class='section1'>
            <div class='wrap'>
                <h2>묻고 답하기</h2>
                <nav>
                    <div class='btn' @click="changeMode" v-if="writeMode">문의 게시판</div>
                    <router-link tag='div' class='btn' v-if="boardMode" to='qnawrite/'>문의하기</router-link>
                </nav>
        
                <table v-if="boardMode">
                    <thead>
                        <tr>
                            <td>접수번호</td>
                            <td>상태</td>
                            <td>제목</td>
                            <td>작성자</td>
                            <td>작성일</td>
                        </tr>
                    </thead>
                    <tbody>
                        <router-link tag='tr' v-bind:to="'zoomqna/'+board.no" v-for="(board,i) in boards" v-if='i < limit && i >= start'>
                            <td>{{i+1}}</td>
                          

                            <td>{{board.status}}</td>

                            <td v-if="board.private" class='r_text'>비공개 글입니다</td>
                            <td v-else>{{board.title}}</td>
                            <td>{{board.writer}}</td>
                            <td >{{board.date}}</td>
                            
                        </router-link>
                    </tbody>
                </table>
                <listNumber v-if="boardMode" v-bind:DataLength='Math.ceil((boards.length)/10)' v-bind:nowpage='limit-10'/>
            </div>
        </section>
    </div>`,
    created() {
        this.getData()
    },
    mounted() {
     
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
            boards:{}
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
        },
        getData(){
            const BaseData = "../woosung_api/qna.data.php"
            axios.post(BaseData,{mode:'main'})
            .then((result)=>{
                this.boards = result.data.result;
                eventBus.$emit('UpdateList', {
                    DataLength: Math.ceil((this.boards.length) / 10),
                    nowpage: this.limit - 10
                })
            })
        }
        
    },
}

export default download;