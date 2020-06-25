import { BIconThreeDots } from "bootstrap-vue";

const MoviePopup = {
    props:['show','data'],
    template:`<div class='popup' v-if="show" @click="closePopup">
    <div class='youtube_popup'>
        <iframe 
        width="100%" 
        height="100%" 
        v-bind:src="'https://www.youtube.com/embed/'+data.youtubeId" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
    </div>
    </div>`,
    updated() {
        console.log(this.data)
    },
    methods: {
        closePopup(){
            this.$emit("child",false)
        }
        
    },
}

export default MoviePopup;
