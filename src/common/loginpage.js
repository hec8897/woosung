import './login_page.scss'
import EventBus from '../eventbus';
const LoginPage = {
    template:`<section class='login_page wrap'>
        <p>개발버전 로그인 버튼만눌러주세요</p>
                    <h2>로그인</h2>
                    <div class='login_inputs'>
                        <ul>
                            <li>
                                <input type='text' placeholder="아이디를 입력해주세요">
                            </li>
                            <li>
                                <input type='password' placeholder="비밀번호를 입력하세요">
                            </li>
                            <li>
                                <div class='btn' @click="login">로그인</div>
                            </li>
                            <p>우성소프트 회원이 아니신가요? <a href="">회원가입</a></p>
                        </ul>
                    </div>
              </section>`,
              methods: {
                login(){
                    EventBus.$emit("login",true)
                    // store.commit('loginFn',result.data)
                }
              },
}

export default LoginPage;