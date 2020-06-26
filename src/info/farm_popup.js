const farmPopup = {
    props:['show','data'],
    template:`<div class='popup' v-if="show" @click="closePopup">
                <div class='farm_popup'>
                    <iframe
                        width="100%" 
                        height="100%" 
                        src="https://www.naver.com" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    ></iframe> 
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

export default farmPopup;
