import { BIcon, BIconArrowUp, BIconArrowDown } from 'bootstrap-vue'

const zoom = {
    props:['idx','data'],
    template:`<div class='support'>
                    <div class='board_head'>
                          <h3>고객지원센터</h3>
                    </div>
                    <section class='section1 zoom'>
                        <div class='wrap'>
                              <div class='zoom_table'>
                                    <div class='head'>
                                          <p>고객지원센터<b-icon icon="chevron-compact-right"/> {{board.cate}}</p>
                                          <h4>{{board.tit}}<span>{{board.date}}</span></h4>
                                    </div>
                                    <div class='desc'>
                                          <p>{{board.desc}}</p>
                                    </div>      
                                    <div class='foot'>
                                          <p v-if='board.excel!=null'><a href="javascript:void()" download><img src='image/board/excel.svg'> <span>{{board.excel}}</span><b-icon icon="download"/></a></p>
                                          <p v-if='board.word!=null'><a href="javascript:void()" download><img src='image/board/msword.svg'> <span>{{board.word}}</span><b-icon icon="download"/></a></p>
                                          <p v-if='board.pdf!=null'><a href="javascript:void()" download><img src='image/board/pdf.svg'> <span>{{board.pdf}}</span><b-icon icon="download"/></a></p>
                                          <p v-if='board.hwp!=null'><a href="javascript:void()" download><img src='image/board/hwp.png'> <span>{{board.hwp}}</span><b-icon icon="download"/></a></p>
                                    </div>
                              </div>
                              <router-link tag='div'  to="/board/support" class='btn'>목록</router-link>
                        </div>
                    </section>

              </div>`,
              components:{
                  BIcon,
                  BIconArrowUp,
                  BIconArrowDown
                },
              data(){
                    return{
                        board:{
                                  no:0,
                                  cate:'장애',
                                  tit:"첫번째 글입니다. 두번째 글입니다. 두번째 글입니다. 두번째 글입니다. 두번째 글입니다.",
                                  desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, quam eius! Quisquam accusantium corporis laudantium illo, consectetur corrupti veritatis fuga laboriosam ratione totam pariatur odio magni distinctio modi tempore! Culpa. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, quam eius! Quisquam accusantium corporis laudantium illo, consectetur corrupti veritatis fuga laboriosam ratione totam pariatur odio magni distinctio modi tempore! Culpa.",
                                  hwp:'농진청 제출 자료',
                                  pdf:'농진청 제출 자료',
                                  word:'농진청 제출 자료',
                                  excel:'세무 회계 자료',
                                  date:'2020.06.08'
                              }
                    }
              }
}

export default zoom;