const material = {
    template:`<section class='material wrap'>
                    <h2>농자재 정보</h2>
                    <ul class='nav'>
                    <li
                        v-bind:class="{active:mode=='전체'}"
                        @click="filterData('전체')"
                        >전체</li>

                    <li v-for="item in Cate"
                        @click="filterData(item)"
                        v-bind:class="{active:mode==item}"
                        >{{item}}</li>

                    </ul>

                    <ul class='content_main'>
                        <li 
                            v-for = "(content,i) in contents" 
                            @click="listView(content.idx,content.join)"
                            >
                            
                            <div class='img'>
                                <img v-bind:src="content.img">
                            </div>
                            <div class='text'>
                                <h4>{{content.name}}({{content.company}})</h4>
                                <p>{{content.exp}}</p>
                                <p class='bottom'>

                                <!-- <span>
                                    조회수: 
                                    {{content.join}}
                                </span> (사용안함)-->
                                
                                <span class='date'>
                                    {{$moment(content.date).format('YYYY-MM-DD')}}
                                </span>
                                
                                </p>
                            </div>
                        </li>
                        <h3 v-if="contents == ''">등록된 제품이 없습니다.</h3>
                    </ul>

              </section>`,
    data(){
        return{
            mode:'전체',
            Cate:["경농","농협케미컬","동방아그로","바이엘","성보화학","신젠타","인바이오","함국삼공","팜한농","한얼사이언스"],
            lists:Array,
            contents:Array,
            limit:9,
        }
    },
    watch: {
        mode(){
            console.log(this.mode)
            if(this.mode == '전체'){
                this.contents = this.lists
            }
            else{
                this.contents = this.lists.filter((x)=>{
                    return x.company == this.mode
                })
            }
        }
    },
    
    created() {
        this.$Axios.get('http://ec2-13-124-19-117.ap-northeast-2.compute.amazonaws.com/admin/api/farm_item')
        .then((result)=>{

            let Lists = result.data.result.filter((x)=>{
                return x.active == 1
            })
            
            this.lists = Lists;
            this.contents = Lists.slice(0,9);

        })
        
    },

    mounted(){
        document.addEventListener('scroll', () => {
            this.getDistBottom()
        })
    },

    methods:{
        filterData(cate){
            this.mode = cate
        },
        listView(idx,join){
            this.$router.push({
                path:`info4/zoom/${idx}` 
            })

      

        },
        getDistBottom() {
            let scrollPosition = window.pageYOffset;
            let windowSize = window.innerHeight;
            let bodyHeight = document.body.offsetHeight;

            let bottom = Math.max(bodyHeight - (scrollPosition + windowSize), 0)

            if (bottom <= 1600) {
                this.limit+=3;
                this.contents = this.contents.slice(0,this.limit)
            }
        }
    }
    
}

export default material;