import axios from 'axios';
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
                                <input type="checkbox" id='type1' v-model="InsertData.error">

                                <label for='type2'>Win-Win Pro</label>
                                <input type="checkbox" id='type2' v-model="InsertData.pro">

                                <label for='type3'>Win-Win Pos</label>
                                <input type="checkbox" id='type3' v-model="InsertData.pos">

                                <label for='type4'>기타</label>
                                <input type="checkbox" id='type4' v-model="InsertData.etc">
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
                            <p><label for='public'>비밀글 등록 여부  </label><input type="checkbox" v-model="InsertData.private" id='public'></p>
                            <!-- <b-form-file 
                            ref="file-input" 
                            placeholder="이미지 파일을 선택해주세요"
                            accept=".jpg, .png, .gif"
                            class="mb-2"></b-form-file> -->
                        </div>
                        <p class='btn'>
                        <b-button variant="success" @click='PostData'>
                        <!-- <div v-if="mode == 'delete'" class="text-center">
                            <b-spinner label="Spinning" ></b-spinner>
                        </div> -->
                            <span>등록</span>
                        </b-button>
                        </p>
                    </div>
                </div>
                </section>
    </div>`,
    data(){
        return{
            InsertData:{
                mode:"insert",
                error:false,
                pro:false,
                pos:false,
                etc:false,
                contact:"",
                tit:"",
                write:"",
                desc:"",
                private:""
            }
        }
    },
    methods: {
        PostData(){
            const BaseData = "../woosung_api/qna.create.php";

            axios.post(BaseData,this.InsertData)
            .then((result)=>{
                console.log(result)
            })
        }
    },
}
export default qnaWrite;