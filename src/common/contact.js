import axios from 'axios'
const contactPopup = {
    template:`<div class='popup'>
        <div class='contact_box'>
            <h2>상담 신청</h2>
            <input type='text' v-model="InsertData.write" placeholder="신청자"/>
            <select v-model="InsertData.desc">
                    <option value="" disabled selected>상담 내용</option>
                    <option v-for="cate in cates" :value="cate"> {{cate}}</option>
                </select>
            <input type='text' v-model="InsertData.contact" placeholder="연락처"/>
            <div class="p_box">
                <p>우성소프트 개인정보를 중요시 하며 정보통신망 이용촉진 및 정보보호에 관한 법률을 준수하고 있습니다.</p>
                <ol>
                    <li>
                        개인정보의 수집목적 <br>
                        회사는 수집한 개인정보를 상담 문의 목적을 위해 활용합니다.
                    </li>
                    <li>
                        수집하는 개인정보 항목 <br>
                        회사는 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다. <br>
                        수집항목 : 이름, 이메일주소, 휴대폰번호, 전화번호, 그 외 개인이 직접 입력한 내용
                    </li>
                    <li>
                        수집하는 개인정보의 처리 및 보존기간<br>
                        회사는 개인정보의 처리목적이 달성될 때까지 개인정보를 보유하고, 목적이 달성된 후에는 지체없이 파기합니다. <br>
                        다만, 사전동의를 받은 경우 또는 관련 법규에 의하여 보존 필요성이 있는 경우에는 보존할 수 있습니다.
                    </li>
                    <li>
                        동의 거부 권리 및 동의 거부 시 불이익<br>
                        고객은 본 개인정보 수집 및 이용 동의를 거부할 권리가 있습니다. 다만, 동의 거부 시 서비스 이용에 제한이 있을 수있습니다.
                    </li>
                </ol>
            </div>
            <div class="checkbox">
                <input type="checkbox" id="checkbox_1" v-model="checked" />
                <label for="checkbox_1">개인정보수집 및 이용에 동의합니다.</label>
            </div>
            <div class='btns'>
                <div class='btn t_blue' @click="postData">상담신청하기</div>
                <div class='btn t_red' @click="popupclose">닫기</div>
            </div>
        </div>
    </div>`,
    data(){
        return{
            checked:false,
            cates:['Win-Win Pro','결제 연동','Win-Win Pos','기타'],
            InsertData:{
                mode:"insert",
                cate:"conatct",
                write:"",
                contact:"",
                desc:"",
                status:"상담 신청",
                tit:"위젯 온라인 상담 신청",
                private:1,
                password:'woosung'
            }
        }
    },
    methods: {
        popupclose(){
            this.$emit("child",false)
        },
        postData(){
            if(this.checked == false){
                alert('개인정보 수집 및 이용에 동의해주세요')
            }
            else if(this.InsertData.write == ""){
                alert('사업장 이름을 입력해주세요')
            }
            else if(this.InsertData.contact == ""){
                alert('연락처를 입력해주세요')
            }
            else{
                
                const BaseData = "../woosung_api/qna.create.php";
                
                axios.post(BaseData,this.InsertData)
                .then((result)=>{
                    if(result.data.phpResult == 'ok'){
                        alert('접수되었습니다.')
                        this.$emit("child",false)
                    }
                })
            }
        }
    },
}

export default contactPopup;