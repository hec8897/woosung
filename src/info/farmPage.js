import eventBus from '../eventbus';
import listNumber from '../common/list-number';
const farmPage = {
    template:`<section class='farm '>
        <!-- <div class='popup'>
            <div class='inner'>
                <iframe src="https://newsam.co.kr/news/article.html?no=31748" frameborder="0" width="100%"></iframe>
            </div>
        </div> -->

        <h2>농자재 소식</h2>
        <div class='content wrap'>
            <ul class='content_main'>
                <li v-for = "(content,i) in contents" v-if='i < limit && i >= start'>
                    <div class='img'>
                        <img v-bind:src="content.img">
                    </div>
                    <div class='text'>
                        <h4>{{content.title}}</h4>
                        <p>
                            {{content.desc}}
                        </p>
                        <p class='date'>작성일: {{content.date}}</p>
                    </div>
                </li>
            </ul>
            <listNumber v-bind:DataLength='Math.ceil((contents.length)/10)' v-bind:nowpage='limit-10'/>
        </div>
    </section>`,
    mounted() {
        eventBus.$emit('UpdateList', {
            DataLength: Math.ceil((this.contents.length) / 10),
            nowpage: this.limit - 9
        })
        eventBus.$on('NextPage', (Data) => {
            this.start = Data * 10;
            this.limit = (Data * 10) + 9
        })
    },
    components:{
        listNumber
    },
    data(){
        return{
            start:0,
            limit:9,
            contents:[
                {
                    no:0,
                    img:"http://www.newsam.co.kr/data/photos/20200624/art_15917670555023_8c3dba.jpg",
                    title:"1달고 시원한 수박 반값에 박수가 절로~",
                    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus et rerum alias suscipit beatae inventore distinctio commodi ipsum corrupti, praesentium quaerat officia sapiente aperiam! Qui amet nesciunt sit facere voluptates.",
                    date:"20200611"
                },
                {
                    no:1,
                    img:"http://www.newsam.co.kr/data/photos/20200624/art_15917741168604_1ff28f.jpg",
                    title:"농정원 지식융합본부, 농번기 현장 지원",
                    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus et rerum alias suscipit beatae inventore distinctio commodi ipsum corrupti, praesentium quaerat officia sapiente aperiam! Qui amet nesciunt sit facere voluptates.",
                    date:"20200611"
                },
                {
                    no:2,
                    img:"http://www.newsam.co.kr/data/photos/20200624/art_15917762534047_b90b33.png",
                    title:"달콤하고 먹기 좋은 ‘산딸기’ 병해충 관리기술 연구추진",
                    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus et rerum alias suscipit beatae inventore distinctio commodi ipsum corrupti, praesentium quaerat officia sapiente aperiam! Qui amet nesciunt sit facere voluptates.",
                    date:"20200611"
                },
                {
                    no:3,
                    img:"http://www.newsam.co.kr/data/photos/20200624/art_15916821680701_c92e79.jpg",
                    title:"‘아파트 텃밭’ 스트레스 낮추고 공동체 의식 높인다",
                    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus et rerum alias suscipit beatae inventore distinctio commodi ipsum corrupti, praesentium quaerat officia sapiente aperiam! Qui amet nesciunt sit facere voluptates.",
                    date:"20200611"
                },
                {
                    no:4,
                    img:"http://www.newsam.co.kr/data/photos/20200624/art_15915938694133_0baaf4.jpg",
                    title:"5달고 시원한 수박 반값에 박수가 절로~",
                    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus et rerum alias suscipit beatae inventore distinctio commodi ipsum corrupti, praesentium quaerat officia sapiente aperiam! Qui amet nesciunt sit facere voluptates.",
                    date:"20200611"
                },
                {
                    no:5,
                    img:"http://www.newsam.co.kr/data/photos/20200624/art_15917670555023_8c3dba.jpg",
                    title:"미래농업 이끌 주인공 육성한다",
                    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus et rerum alias suscipit beatae inventore distinctio commodi ipsum corrupti, praesentium quaerat officia sapiente aperiam! Qui amet nesciunt sit facere voluptates.",
                    date:"20200611"
                },
                    {
                        no:0,
                        img:"http://www.newsam.co.kr/data/photos/20200624/art_15917670555023_8c3dba.jpg",
                        title:"1달고 시원한 수박 반값에 박수가 절로~",
                        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus et rerum alias suscipit beatae inventore distinctio commodi ipsum corrupti, praesentium quaerat officia sapiente aperiam! Qui amet nesciunt sit facere voluptates.",
                        date:"20200611"
                    },
                    {
                        no:1,
                        img:"http://www.newsam.co.kr/data/photos/20200624/art_15917741168604_1ff28f.jpg",
                        title:"농정원 지식융합본부, 농번기 현장 지원",
                        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus et rerum alias suscipit beatae inventore distinctio commodi ipsum corrupti, praesentium quaerat officia sapiente aperiam! Qui amet nesciunt sit facere voluptates.",
                        date:"20200611"
                    },
                    {
                        no:2,
                        img:"http://www.newsam.co.kr/data/photos/20200624/art_15917762534047_b90b33.png",
                        title:"달콤하고 먹기 좋은 ‘산딸기’ 병해충 관리기술 연구추진",
                        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus et rerum alias suscipit beatae inventore distinctio commodi ipsum corrupti, praesentium quaerat officia sapiente aperiam! Qui amet nesciunt sit facere voluptates.",
                        date:"20200611"
                    },
                    {
                        no:3,
                        img:"http://www.newsam.co.kr/data/photos/20200624/art_15916821680701_c92e79.jpg",
                        title:"‘아파트 텃밭’ 스트레스 낮추고 공동체 의식 높인다",
                        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus et rerum alias suscipit beatae inventore distinctio commodi ipsum corrupti, praesentium quaerat officia sapiente aperiam! Qui amet nesciunt sit facere voluptates.",
                        date:"20200611"
                    },
                    {
                        no:4,
                        img:"http://www.newsam.co.kr/data/photos/20200624/art_15915938694133_0baaf4.jpg",
                        title:"5달고 시원한 수박 반값에 박수가 절로~",
                        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus et rerum alias suscipit beatae inventore distinctio commodi ipsum corrupti, praesentium quaerat officia sapiente aperiam! Qui amet nesciunt sit facere voluptates.",
                        date:"20200611"
                    },
                    {
                        no:5,
                        img:"http://www.newsam.co.kr/data/photos/20200624/art_15917670555023_8c3dba.jpg",
                        title:"미래농업 이끌 주인공 육성한다",
                        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus et rerum alias suscipit beatae inventore distinctio commodi ipsum corrupti, praesentium quaerat officia sapiente aperiam! Qui amet nesciunt sit facere voluptates.",
                        date:"20200611"
                    },

            ]
        }
    }
}

export default farmPage;