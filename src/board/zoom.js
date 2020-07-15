import axios from 'axios';

const zoom = {
    props:['idx','data'],
    template:`<div class='support'>
                    
                    <div class='board_head'>
                          <h3>고객지원센터</h3>
                    </div>
                    <section class='section1 zoom'>
                        <div class='wrap'>
                              <h2>고객지원센터</h2>
                              <div class='zoom_table'>
                                    <div class='head'>
                                          <p>고객지원센터
                                          <b-icon icon="chevron-compact-right"/> 
                                          <b v-if="board.cate === 'error'">시스템 장애</b>
                                          <b v-else-if="board.cate === 'update'">업데이트</b>
                                          <b v-else-if="board.cate === 'info'">공지사항</b>
                                          <b v-else-if="board.cate === 'notice'">정보</b>

                                          <span> {{board.date}}</span>
                                          </p>
                                          <h4>{{board.title}}</h4>
                                    </div>
                                    <div class='desc' v-html="board.desc"></div>      
                                    <div class='foot' v-if="files!==''">
                                          <p v-for="file in files">
                                          <a v-bind:href="'../woosung_api/upload_support/'+file" download> {{file}}</a> 
                                          <b-icon icon="download"/></p>
                                    </div>
                              </div>
                              <router-link tag='div'  to="/board/support" class='btn'>목록</router-link>
                        </div>
                    </section>

              </div>`,
              created() {
                    this.getData(this.idx)
              },
              data(){
                    return{
                        files:"",
                        board:{
                                  no:0,
                                  cate:'',
                                  title:"",
                                  desc:"",
                                  date:''
                              }
                    }
              },
              methods: {
                  getData(idx){
                        const BaseData = "../woosung_api/support.data.php"
                        axios.post(BaseData,{idx,join:true})
                        .then((result)=>{

                            this.board = result.data.result[0];
                            this.mode = 'load'
                            if(this.board.files!=null){
                              this.files = this.board.files.split(',');
                          }
                        })
                    }
                  }
}

export default zoom;