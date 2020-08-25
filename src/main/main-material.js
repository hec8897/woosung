import { Carousel, Slide } from 'vue-carousel';

const MainMateral = {
    template:`<div class='content news_info'>
    <h2>농자재 정보
        <!-- <span class='more'><b>더보기</b> +</span> -->
    </h2>
    <div class='news_photo'>
        <Carousel 
        :navigationEnabled="false"
        per-page="3"
        loop="true"
        >
   
        <slide v-for = 'list in lists' :key='list.idx'>
        <div class='photos'>
                    <div class='inner'>
                        <div class='photo'>
                            <img v-bind:src="list.img">
                        </div>
                        <h4>{{list.name}}</h4>
                        <p>	{{list.exp}}</p>
                    
                    </div>
            </div>
        </slide>
        
        </Carousel>
    </div>
</div>`,
components:{
    Carousel,
    Slide,
},
data(){
    return{
        lists:[]
    }
},
created() {
    this.$Axios.get('http://ec2-13-124-19-117.ap-northeast-2.compute.amazonaws.com/admin/api/farm_item')
    .then((result)=>{
        let GetList = result.data.result.filter((x)=>{
            return x.active == 1
        })
        this.lists = GetList.slice(0,9)
        console.log(this.lists)

    })
    
},

}

export default MainMateral;