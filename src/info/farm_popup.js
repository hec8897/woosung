const farmPopup = {
    props:['show','data'],
    template:`<div class='popup' v-if="show" @click="closePopup">
                <div class='farm_popup'>
                    <iframe
                        width="100%" 
                        height="100%" 
                        v-bind:src="data.link" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        top:
                        allowfullscreen>
                    ></iframe> 
                </div>
            </div>`,
    methods: {
        closePopup(){
            this.$emit("child",false)
        }
        
    },
}

export default farmPopup;
