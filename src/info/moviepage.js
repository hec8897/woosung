import eventBus from '../eventbus';
import listNumber from '../common/list-number';
import MoviePopup from './movie_popup'
import axios from 'axios';

const MoviePage = {
    template:`<section class='movie wrap'>
        <h2>정보 동영상</h2>

        <ul class='nav'>
            <li 
             v-bind:class="{active:mode=='전체'}"
             @click="CateFilter('전체')">
             전체</li>
            <li
             v-for="midCate in midCates" 
             @click="CateFilter(midCate)"
             v-bind:class="{active:mode==midCate}"
             >
             {{midCate}}</li>
        </ul>

        <ul class='content'>
            <li v-if="filters[0]==undefined" class='none'>
                <p>등록된 영상이 없습니다.</p>
            </li>

            <li v-for="(filter,i) in filters" v-if='i < limit && i >= start' >
                <div class='thumbnail' @click="youtubeBoxShow(i)">
                    <img v-bind:src="'https://i.ytimg.com/vi/'+filter.youtubeId+'/0.jpg'">
                    썸네일 이미지
                </div>
                <div class='text-box'>
                    <h3 @click="youtubeBoxShow(i)">{{filter.title}}</h3>
                    <p>{{filter.desc}}</p>
                    <p class='date'>게시일 : {{filter.date}}</p>
                </div>
            </li>

            <MoviePopup 
                v-bind:show="show" 
                v-bind:data="popupData"
                @child="parent"/>
        </ul>
        <listNumber v-bind:DataLength='Math.ceil((movies.length)/10)' v-bind:nowpage='limit-10'/>
    </section>`,
        created() {
            eventBus.$emit('moNav',false)
            const BaseData = "../woosung_api/youtube.data.php"
            axios.post(BaseData,{mode:'page'})
            .then((result)=>{
                this.movies = result.data.result
                this.mode = '전체'
                this.filters = this.movies;
              
            })
        },
        updated(){
            eventBus.$emit('UpdateList', {
                DataLength: Math.ceil((this.filters.length) / 10),
                nowpage: this.limit - 10
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
            mode:'전체',
            midCates:[
                '우성소프트','농사 정보','농약 정보','농진청 유튜브','유용한 정보'
            ],
            show:false,
            filters:"",
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
        },
        CateFilter(value){
            
            if(value == '전체'){
                this.mode = '전체'
                this.filters = this.movies
            }
            else{
                this.mode = value
                this.filters = this.movies.filter(function(Data){
                    return Data.cate == value
                })
            }

        }
    },
}

export default MoviePage;