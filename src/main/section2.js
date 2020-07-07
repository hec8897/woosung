import { Carousel, Slide } from 'vue-carousel';
import axios from 'axios';
import eventBus from '../eventbus';
import MoviePopup from '../info/movie_popup'

const Section2 ={
    template:`<section class='section2'>
        <div class='wrap'>
            <h2>
                정보 동영상
                <router-link tag='span' to='/information/info3' class='more'><b>더보기</b> +</router-link>
            </h2>
            <div class='youtubes'>
                <carousel 
                :loop='true'
                :per-page-custom=[[1024,4],[768,3],[480,2],[360,2]]
                >
                <slide v-for="(movie,i) in movies" >
                    <div class='slide_inner' 
                    @click="youtubeBoxShow(i)">
                        <img v-bind:src="'https://i.ytimg.com/vi/'+movie.youtubeId+'/0.jpg'">
                    </div>
                </slide>
            </carousel>
            <MoviePopup 
            v-bind:show="show" 
            v-bind:data="popupData"
            @child="parent"
            />
        </div>
        </div>
    </section>`,
       components: {
        Carousel,
        MoviePopup,
        Slide
      },
      data(){
        return{
            show:false,
            popupData:"",
            movies:[]
        }
      },
      created() {
        const BaseData = "../woosung_api/youtube.data.php"
        axios.post(BaseData,{mode:'page'})
        .then((result)=>{
            this.movies = result.data.result
            this.mode = 'load'

            eventBus.$emit('UpdateList', {
                DataLength: Math.ceil((this.movies.length) / 10),
                nowpage: this.limit - 10
            })
        })
    },
    methods: {
        parent(data){
            this.show = data
        },
        youtubeBoxShow(i){
            this.show = true
            this.popupData = this.movies[i]
        }
    },
}

export default Section2;