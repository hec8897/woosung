const material = {
    template:`<section class='material wrap'>
                    <h2>농자재 정보</h2>
                    <ul class='content_main'>
                            <router-link 
                                tag='li'
                                v-for = "(content,i) in contents" 
                                v-bind:to="'info4/zoom/'+content.idx" 
                                >
                                
                                <div class='img'>
                                    <img v-bind:src="content.img">
                                </div>

                                <div class='text'>

                                    <h4>{{content.name}}({{content.company}})</h4>
                                    <p>{{content.exp}}</p>
                                </div>
                            </router-link>
                    </ul>

              </section>`,
    data(){
        return{
            limit:9,
            lists:Array,
            contents:Array
        }
    },
    
    created() {
        this.$Axios.get('http://ec2-13-124-19-117.ap-northeast-2.compute.amazonaws.com/admin/api/farm_item')
        .then((result)=>{

            this.lists = result.data.result.filter((x)=>{
                return x.active == 1
            })
            
            this.contents = this.lists.slice(0,9)
        })
        
    },
    mounted(){
        document.addEventListener('scroll', () => {
            this.getDistBottom()
        })
    },
    methods:{
        getDistBottom() {
            let scrollPosition = window.pageYOffset;
            let windowSize = window.innerHeight;
            let bodyHeight = document.body.offsetHeight;

            let bottom = Math.max(bodyHeight - (scrollPosition + windowSize), 0)

            if (bottom <= 1600) {
                this.limit+=3;
                this.contents = this.lists.slice(0,this.limit)
            }
        }
    }
    
}

export default material;