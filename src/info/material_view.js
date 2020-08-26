const materialView = {
    props:['idx'],
    template:`<section class='material_view wrap'>
                    <div class='head'>
                        <h2><span class='sub_tit'>{{content.company}}</span> - {{content.name}} </h2>
                        <p>{{content.exp}}</p>
                        <img v-bind:src="content.img">
                    </div>
                    <div class='body'>
                        <div v-html="content.desc" class='desc'></div>
                        <div class='file' v-if="content.file" ><a v-bind:href="content.file" target='blank'>첨부파일 다운받기</a><b-icon icon="download"></b-icon></div>
                    </div>
                    <div class='btns'>
                    <router-link  tag='div' to='/information/info4' class='btn' >목록</div>
                    </div>
              </section>`,
    data(){
        return{
            content:Array
        }
    },
    created() {
        this.$Axios.post('http://ec2-13-124-19-117.ap-northeast-2.compute.amazonaws.com/admin/api/farm_item/zoom',{idx:this.idx})
        .then((result)=>{
            this.content = result.data.result[0]
        })
     
    },
    mounted() {
    
    },
    
}

export default materialView;