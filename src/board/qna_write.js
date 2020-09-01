import router from '../router'

const qnaWrite = {
    template:`<div class='qna'>
    <div class='board_head'>
        <h3>묻고 답하기</h3>
    </div>
    <section class='section1'>
    <div class='wrap'>

    <div class='write_table zoom'>
                    <div class='zoom_table'>
                        <div class='head'>
                            <h3>문의하기</h3>
                            <div class='type'>
                                <span>문의 유형</span>
                                <label for='type1'>장애신고</label>
                                <input type="checkbox" id='type1' v-model="error">

                                <label for='type2'>Win-Win Pro</label>
                                <input type="checkbox" id='type2' v-model="pro">

                                <label for='type3'>Win-Win Pos</label>
                                <input type="checkbox" id='type3' v-model="pos">

                                <label for='type4'>기타</label>
                                <input type="checkbox" id='type4' v-model="etc">
                            </div>
                        </div>
                        <div class='consult_board'>
                            <ul>
                                <li>
                                    <div class='th'>신청자</div>
                                    <div class='tb'><input type='text' placeholder="신청자를 입력해주세요" v-model="InsertData.write"/></div>
                                </li>
                                <li>
                                    <div class='th'>연락처</div>
                                    <div class='tb'><input type='text' placeholder="연락처를 입력해주세요" v-model="InsertData.contact"/></div>
                                </li>
                                <li>
                                    <div class='th'>제목</div>
                                    <div class='tb'><input type='text' placeholder="제목을 입력해주세요" v-model="InsertData.tit"/></div>
                                </li>

                                <li>
                                   <textarea placeholder="문의하실 내용을 입력해주세요" v-model='InsertData.desc'/>
                                </li>
                            </ul>
                        </div>
                        <div class='foot'>
                            <p>
                                <label for='public'>비밀글 등록 여부  </label>
                                <input type="checkbox" v-model="private" id='public'>
                                <input type='password' v-if="private" placeholder="비밀글 패스워드" v-model="InsertData.password"/>
                            </p>
                        </div>
                        <p class='btn'>
                        <b-button variant="success" @click='PostData'>
                        <div v-if="mode == 'insert'" class="text-center">
                            <b-spinner label="Spinning" ></b-spinner>
                        </div>
                        <span v-else>등록</span>
                        </b-button>
                        </p>
                    </div>
                </div>
                </section>
    </div>`,
    data(){
        return{
                mode:'load',
                error:false,
                pro:false,
                pos:false,
                etc:false,
                private:false,

            InsertData:{
                mode:"insert",
                contact:"",
                tit:"",
                write:"",
                desc:"",
                private:false,
                password:"",
                date:this.$moment().format('YYYY-MM-DD')
            }
        }
    },
    methods: { 
        PostData(){
            this.mode = 'insert';

            let cate = new Array();

            this.error == true?cate.push("장애 문의"):false;
            this.pro == true?cate.push("Win-Win Pro"):false;
            this.pos == true?cate.push("Win-Win Pos"):false;
            this.etc == true?cate.push("기타"):false;

            this.private == true?this.InsertData.private = true:this.InsertData.private = false;
            this.InsertData.cate = cate.toString()

            if(this.InsertData.tit == ""){
                alert('제목을 입력해주세요');
                this.mode = 'load'

            }
            else if(this.InsertData.desc == ""){
                alert('본문을 입력해주세요');
                this.mode = 'load'

            }
            else if(this.private == true){
                if(this.InsertData.password == ""){
                    alert('패스워드를 입력하세요')
                    this.mode = 'load'
                }
                else{
                    const BaseData = `http://ec2-13-124-19-117.ap-northeast-2.compute.amazonaws.com/admin/api/qna/new`

                    this.$Axios.post(BaseData,this.InsertData)
                    .then((result)=>{
                        this.mode = 'load'
                        if(result.data.query == 'ok'){
                            alert('접수되었습니다.')
                            router.go(-1)
                        }
                    })
                }
            } 
        }
    },
}
export default qnaWrite;