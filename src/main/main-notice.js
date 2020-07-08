import axios from 'axios'

const MainNotice = {
    template:`    <div class='content notice'>
                    <h2>공지사항 <router-link tag="span" to="/board/support" class='more'><b>더보기</b> +</router-link></h2>
                        <ul class='notices'>
                            <li v-for='(notice,i) in notices' v-if="i<=6">
                                <router-link tag='p' v-bind:to="'/board/zoom/'+notice.no">{{notice.title}}</router-link>
                                <span>{{notice.date}}</span>
                            </li>
                        </ul>
                    </div>`,
                    data(){
                        return{
                            notices:""
                        }
                    },
                    created() {
                        const BaseData = "../woosung_api/support.data.php"

                        axios.post(BaseData,{mode:'main'})
                        .then((result)=>{
                            this.notices = result.data.result;
                        })
                    },
}

export default MainNotice;