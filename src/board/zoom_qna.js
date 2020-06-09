const zoomQna = {
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
                                          <p>작성자: 우성 소프트</p>
                                    </div>
                                    <div class='desc'>
                                          <p>{{board.desc}}</p>
                                          <div class='answer'>
                                              <h3 class='b_text'>답변</h3>
                                              <p v-if="board.answer!=null" v-html="board.answer"></p>
                                              <p v-else>답변 대기 중 입니다.</p>
                                        </div>
                                    </div>  
                                   
                                    <div class='foot'>
                                          <p v-if='board.file!=null'><span>첨부파일:</span><a href="javascript:void()" download><span>{{board.file}}</span><b-icon icon="download"/></a></p>
                                          <p v-else><span>첨부 파일 없음</span></p>
                                    </div>
                              </div>
                              <router-link tag='div'  to="/board/qna" class='btn'>목록</router-link>
                        </div>
                    </section>
                </div>`,
              data(){
                    return{
                        board:{
                                  public:true,
                                  no:0,
                                  cate:'win-win pro',
                                  tit:"장애 신고 (708 에러)",
                                  desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, quam eius! Quisquam accusantium corporis laudantium illo, consectetur corrupti veritatis fuga laboriosam ratione totam pariatur odio magni distinctio modi tempore! Culpa. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, quam eius! Quisquam accusantium corporis laudantium illo, consectetur corrupti veritatis fuga laboriosam ratione totam pariatur odio magni distinctio modi tempore! Culpa.",
                                  answer:"안녕하십니까 우성소프트 입니다.</br> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, quam eius! Quisquam accusantium corporis laudantium illo, consectetur corrupti veritatis fuga laboriosam ratione totam pariatur odio magni distinctio modi tempore! Culpa. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, quam eius! Quisquam accusantium corporis laudantium illo, consectetur corrupti veritatis fuga laboriosam ratione totam pariatur odio magni distinctio modi tempore! Culpa.",
                                  status:"접수중",
                                //   file:'에러이미지.jpg',
                                  file:null,
                                  date:'2020.06.08'
                              }
                    }
              }
}

export default zoomQna;