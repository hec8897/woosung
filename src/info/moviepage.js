import eventBus from '../eventbus';
import listNumber from '../common/list-number';
import MoviePopup from './movie_popup'

const MoviePage = {
    template:`<section class='movie wrap'>
        <h2>정보 동영상</h2>
        <ul>
            <li v-for="(movie,i) in movies" v-if='i < limit && i >= start' >
                <div class='thumbnail' @click="youtubeBoxShow(i)">
                    <img v-bind:src="movie.youtubeId">
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
      mounted() {
        eventBus.$emit('UpdateList', {
            DataLength: Math.ceil((this.movies.length) / 10),
            nowpage: this.limit - 9
        })
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
            show:false,
            popupData:"",
            start:0,
            limit:10,
            movies:[    
                        {
                            idx:0,
                            youtubeId:"https://i.ytimg.com/vi/OuHfCxy_DrQ/0.jpg",
                            youtubeRoot:"https://www.youtube.com/embed/GIW7eOgxuP4",
                            title:"PLS 농약판매기록 농촌진흥청 시스템으로 전송하는 방법",
                            desc:"우성소프트 Win-Win Pro를 이용하여 빠르고 쉽게 클릭 몇 번으로 농약판매기록을 농촌진흥청 [농약안전정보시스템]으로 전송하는 방법을 안내하는 동영상입니다.",
                            date:"2020-06-11"
                        },
                        {
                            idx:1,
                            youtubeId:"https://i.ytimg.com/vi/LgJ6E7PPSII/0.jpg",
                            youtubeRoot:"https://www.youtube.com/embed/LgJ6E7PPSII",
                            title:"사례로 배우는 올바른 농약사용법",
                            desc:"국립농산물품질관리원 홍보 콘텐츠 내부공모전 우수작 사례로 배우는 올바른 농약사용법입니다 주제는 PLS입니다.",
                            date:"2020-06-11"
                        },
                        {
                            idx:2,
                            youtubeId:"https://i.ytimg.com/vi/fK-wwJJn4tU/0.jpg",
                            youtubeRoot:"https://www.youtube.com/embed/fK-wwJJn4tU",
                            title:"PLS 농약판매기록 농촌진흥청 시스템으로 전송하는 방법",
                            desc:"우성소프트 Win-Win Pro를 이용하여 빠르고 쉽게 클릭 몇 번으로 농약판매기록을 농촌진흥청 [농약안전정보시스템]으로 전송하는 방법을 안내하는 동영상입니다.",
                            date:"2020-06-11"
                        },
                        {
                            idx:3,
                            youtubeId:"https://i.ytimg.com/vi/0n_IBZ_NR6Q/0.jpg",
                            youtubeRoot:"https://www.youtube.com/embed/0n_IBZ_NR6Q",
                            title:"[농촌진흥청 농업기술]농약은 억울해!!",
                            desc:"[농촌진흥청 농업기술]농약은 억울해!!",
                            date:"2020-06-11"
                        },
                        {
                            idx:4,
                            youtubeId:"https://i.ytimg.com/vi/OuHfCxy_DrQ/0.jpg",
                            youtubeRoot:"https://www.youtube.com/embed/OuHfCxy_DrQ",
                            title:"연속수확작물,엽채류에 농약잔류+약흔 걱정없이 사용할 수 있는 농약이 있다?",
                            desc:"PLS제도 시행! 잔류검사 면제 성분으로 걱정없이 사용 가능한 잔류프리! 유통/보관 작물도 오랫동안 안전하게, 수출 농산물에도 걱정 없이 사용 가능!!",
                            date:"2020-06-11"
                        },
                        {
                            idx:3,
                            youtubeId:"https://i.ytimg.com/vi/0n_IBZ_NR6Q/0.jpg",
                            youtubeRoot:"https://www.youtube.com/embed/0n_IBZ_NR6Q",
                            title:"[농촌진흥청 농업기술]농약은 억울해!!",
                            desc:"[농촌진흥청 농업기술]농약은 억울해!!",
                            date:"2020-06-11"
                        },
                        {
                            idx:4,
                            youtubeId:"https://i.ytimg.com/vi/OuHfCxy_DrQ/0.jpg",
                            youtubeRoot:"https://www.youtube.com/embed/0n_IBZ_NR6Q",
                            title:"연속수확작물,엽채류에 농약잔류+약흔 걱정없이 사용할 수 있는 농약이 있다?",
                            desc:"PLS제도 시행! 잔류검사 면제 성분으로 걱정없이 사용 가능한 잔류프리! 유통/보관 작물도 오랫동안 안전하게, 수출 농산물에도 걱정 없이 사용 가능!!",
                            date:"2020-06-11"
                        },
                        {
                            idx:3,
                            youtubeId:"https://i.ytimg.com/vi/0n_IBZ_NR6Q/0.jpg",
                            youtubeRoot:"https://www.youtube.com/embed/0n_IBZ_NR6Q",
                            title:"[농촌진흥청 농업기술]농약은 억울해!!",
                            desc:"[농촌진흥청 농업기술]농약은 억울해!!",
                            date:"2020-06-11"
                        },
                        {
                            idx:4,
                            youtubeId:"https://i.ytimg.com/vi/OuHfCxy_DrQ/0.jpg",
                            youtubeRoot:"https://www.youtube.com/embed/0n_IBZ_NR6Q",
                            title:"연속수확작물,엽채류에 농약잔류+약흔 걱정없이 사용할 수 있는 농약이 있다?",
                            desc:"PLS제도 시행! 잔류검사 면제 성분으로 걱정없이 사용 가능한 잔류프리! 유통/보관 작물도 오랫동안 안전하게, 수출 농산물에도 걱정 없이 사용 가능!!",
                            date:"2020-06-11"
                        },
                        {
                            idx:3,
                            youtubeId:"https://i.ytimg.com/vi/0n_IBZ_NR6Q/0.jpg",
                            youtubeRoot:"https://www.youtube.com/embed/0n_IBZ_NR6Q",
                            title:"[농촌진흥청 농업기술]농약은 억울해!!",
                            desc:"[농촌진흥청 농업기술]농약은 억울해!!",
                            date:"2020-06-11"
                        },
                        {
                            idx:4,
                            youtubeId:"https://i.ytimg.com/vi/OuHfCxy_DrQ/0.jpg",
                            youtubeRoot:"https://www.youtube.com/embed/0n_IBZ_NR6Q",
                            title:"연속수확작물,엽채류에 농약잔류+약흔 걱정없이 사용할 수 있는 농약이 있다?",
                            desc:"PLS제도 시행! 잔류검사 면제 성분으로 걱정없이 사용 가능한 잔류프리! 유통/보관 작물도 오랫동안 안전하게, 수출 농산물에도 걱정 없이 사용 가능!!",
                            date:"2020-06-11"
                        },
                        {
                            idx:3,
                            youtubeId:"https://i.ytimg.com/vi/0n_IBZ_NR6Q/0.jpg",
                            youtubeRoot:"https://www.youtube.com/embed/0n_IBZ_NR6Q",
                            title:"[농촌진흥청 농업기술]농약은 억울해!!",
                            desc:"[농촌진흥청 농업기술]농약은 억울해!!",
                            date:"2020-06-11"
                        },
                        {
                            idx:4,
                            youtubeId:"https://i.ytimg.com/vi/OuHfCxy_DrQ/0.jpg",
                            youtubeRoot:"https://www.youtube.com/embed/0n_IBZ_NR6Q",
                            title:"연속수확작물,엽채류에 농약잔류+약흔 걱정없이 사용할 수 있는 농약이 있다?",
                            desc:"PLS제도 시행! 잔류검사 면제 성분으로 걱정없이 사용 가능한 잔류프리! 유통/보관 작물도 오랫동안 안전하게, 수출 농산물에도 걱정 없이 사용 가능!!",
                            date:"2020-06-11"
                        }
                    ]
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