const MainNotice = {
    template:`    <div class='content notice'>
        
                        <h2>
                            <span>공지사항</span>
                            <router-link tag="span" to="/board/support" class='more' v-html="">
                                <b>더보기 +</b>
                            </router-link>
                        </h2>

                        <ul class='notices'>
                            <li v-for='(notice,i) in notices' v-if="i<=6">
                                <router-link tag='p' v-bind:to="'/board/zoom/'+notice.idx" v-html="notice.title"/>
                                <span>{{$moment(notice.date).format('YYYY-MM-DD')}}</span>
                            </li>
                        </ul>

                    </div>`,
                    data(){
                        return{
                            notices:null
                        }
                    },
                    created() {
                        const BaseData = "http://ec2-13-124-19-117.ap-northeast-2.compute.amazonaws.com/admin/api/support"
                        this.$Axios.get(BaseData)
                        .then((result)=>{
                            this.notices = result.data.result.filter((x)=>{
                                return x.active == 1 && x.fixed == 1
                            });
                        })
                    },
}

export default MainNotice;