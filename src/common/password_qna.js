import './login_page.scss'
const passwordPopup = {
    props:['password'],
    template:`<section class='login_page wrap'>
                    <h2>패스워드 입력</h2>
                    <div class='login_inputs'>
                        <ul>
                            <li>
                                <input type='password' placeholder="비밀번호를 입력하세요" v-model="inputPassword">
                            </li>
                            <li>
                                <div class='btn' @click="login">로그인</div>
                            </li>
                        </ul>
                    </div>
              </section>`,
              data(){
                return{
                    inputPassword:''
                }
              },
              methods: {
                login(){
                    if(this.inputPassword === this.password){
                        this.$emit("child",true)
                    }
                    else{
                        alert('패스워드가 다릅니다.')
                    }
                }
               
              },
}

export default passwordPopup;