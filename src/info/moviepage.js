import eventBus from '../eventbus';
import listNumber from '../common/list-number';
import MoviePopup from './movie_popup'
import axios from 'axios';

const MoviePage = {
    template:`<section class='movie wrap'>
        <h2>정보 동영상</h2>
        <ul class='nav'>
            <li class='active'>전체</li>
            <li v-for="midCate in midCates">{{midCate}}</li>
        </ul>
        <ul class='content'>
            <li v-for="(movie,i) in movies" v-if='i < limit && i >= start' >
                <div class='thumbnail' @click="youtubeBoxShow(i)">
                    <img v-bind:src="'https://i.ytimg.com/vi/'+movie.youtubeId+'/0.jpg'">
                    썸네일 이미지
                </div>
                <div class='text-box'>
                    <h3 @click="youtubeBoxShow(i)">{{movie.title}}</h3>
                    <p>{{movie.desc}}</p>
                    <p class='date'>게시일 : {{movie.date}}</p>
                </div>

                <!-- <div class='youtube_box' v-bind:id="'target'+i">
                    <iframe width="100%" height="100%" v-bind:src="movie.youtubeRoot" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div> -->
            </li>
            <MoviePopup 
            v-bind:show="show" 
            v-bind:data="popupData"
            @child="parent"
            />
        </ul>
        <listNumber v-bind:DataLength='Math.ceil((movies.length)/10)' v-bind:nowpage='limit-10'/>
    </section>`,
        created() {
            eventBus.$emit('moNav',false)
            const BaseData = "../woosung_api/youtube.data.php"
            axios.get(BaseData)
            .then((result)=>{
                this.movies = result.data.result
                this.mode = 'load'
    
                eventBus.$emit('UpdateList', {
                    DataLength: Math.ceil((this.movies.length) / 10),
                    nowpage: this.limit - 10
                })
            })
            
        
        },
      mounted() {

        eventBus.$on('NextPage', (Data) => {
            this.start = Data * 10;
            this.limit = (Data * 10) + 9
        })
    },
    components:{
        listNumber,MoviePopup
    },
    data(){
        return{
            midCates:[
                '우성소프트','농약정보','농약관련','농진청','유용한 정보'
            ],
            show:false,
            popupData:"",
            start:0,
            limit:10,
            movies:""
        }
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

export default MoviePage;