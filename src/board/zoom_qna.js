import axios from 'axios'
const zoomQna = {
    props:['idx'],
    template:`<div class='qna'>
    <div class='board_head'>
        <h3>묻고 답하기</h3>
    </div>

    <section class='section1 zoom'>
                        <div class='wrap'>
                              <div class='zoom_table'>
                                    <div class='head'>
                                          <p>묻고 답하기<b-icon icon="chevron-compact-right"/> {{board.cate}} <span> {{board.date}}</span></p>
                                          <h4>{{board.tit}}</h4>
                                          <p>작성자: {{board.writer}}</p>
                                    </div>
                                    
                                    <div class='desc'>
                                          <p>{{board.desc}}</p>
                                          <div class='answer'>
                                              <h3 class='b_text'>답변</h3>
                                              <p v-if="board.recive!=null" v-html="board.recive"></p>
                                              <p v-else>답변 대기 중 입니다.</p>
                                        </div>
                                    </div>  
                                   
                              </div>
                              <router-link tag='div'  to="/board/qna" class='btn'>목록</router-link>
                              <div class='btn red'>삭제</div>
                        </div>
                    </section>
                </div>`,
            created() {
                  this.getData(this.idx)
            },            
            data(){
                    return{
                        board:{
                                  no:0,
                                  cate:'',
                                  tit:"",
                                  desc:"",
                                  recive:"",
                                  status:"",
                                  date:''
                              }
                        }
                  },
              methods: {
                  getData(idx){
                      const BaseData = "../woosung_api/qna.data.php"
                      axios.post(BaseData,{idx})
                      .then((result)=>{
                          this.board = result.data.result[0];
                          this.mode = 'load'
                          console.log(result)
                      })
                  }
              }
}

export default zoomQna;