import eventBus from '../eventbus';
import listNumber from '../common/list-number'

const support = {
    template:`<div class='support'>
        <div class='board_head'>
            <h3>고객지원센터</h3>
        </div>
        <section class='section1'>
            <div class='wrap'>
                <h2>고객지원센터</h2>
                <table>
                    <thead>
                        <tr>
                            <td>번호</td>
                            <td>채널 <b-icon icon="chevron-compact-right"/> 분류</td>
                            <td>제목</td>
                            <td>조회수</td>
                            <td>작성일</td>
                        </tr>
                    </thead>
                    <tbody>
                        <router-link v-bind:to="'zoom/'+board.idx" tag='tr' v-for='(board,i) in boards' v-if='i < limit && i >= start'>
                            <td>{{i+1}}</td>
                            <td>채널 <b-icon icon="chevron-compact-right"/> {{board.cate}}</td>
                            <td>{{board.title}}
                            </td>
                            <td>
                                {{board.join}}                       
                            </td>
                            <td>{{$moment(board.date).format('YYYY-MM-DD')}}</td>
                        </router-link>
                    </tbody>
                </table>
                <listNumber v-bind:DataLength='Math.ceil((boards.length)/10)' v-bind:nowpage='limit-10'/>
            </div>
        </section>
    </div>`,
    components:{
        listNumber,
    },
    data(){
        return{
            mode:'loading',
            start:0,
            limit:10,
            boards:""
        }
    },

    created() {
        this.getData()
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
    },
    methods: {
            getData(){
                        const BaseData = "http://ec2-13-124-19-117.ap-northeast-2.compute.amazonaws.com/admin/api/support"
                        this.$Axios.get(BaseData)
                        .then((result)=>{
                            this.boards = result.data.result.filter((x)=>{
                                return x.active == 1

                            });
                            eventBus.$emit('UpdateList', {
                                DataLength: Math.ceil((this.boards.length) / 10),
                                nowpage: this.limit - 10
                            })
                        })
                    }
    },

}
export default support;