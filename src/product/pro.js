import { Carousel, Slide } from 'vue-carousel';
import EventBus from '../eventbus';

const pro = {
    template:`<div class='pro'>
        <div class='head_banner'></div>
        <section class='section1 pro_section'>
            <div class='wrap'>
                <div class='icon_box icon_box1' v-bind:class="{active:S1B}">
                    <div class='inner'>
                        <img src='image/product/pro_s1_icon1.png'>
                    </div>
                    <div class='outer'>
                        <h4>농자재 전문</h4>
                        <p>작물보호제, 종묘, 비료 등</p>
                        <p>농자재 전문 판매 재고 관리</p>
                    </div>
                </div>
                <div class='icon_box icon_box2' v-bind:class="{active:S1B}">
                    <div class='inner'>
                        <img src='image/product/pro_s1_icon2.png'>
                    </div>
                    <div class='outer'>
                        <h4>쉬운 사용법</h4>
                        <p>수기장부와 같은 화면으로</p>
                        <p>누구나 사용 가능</p>
                    </div>
                </div>
                <div class='icon_box icon_box3' v-bind:class="{active:S1B}">
                    <div class='inner'>
                        <img src='image/product/pro_s1_icon3.png'>
                    </div>
                    <div class='outer'>
                        <h4>다양한 기능!</h4>
                        <p>견적서, 거래명세서 등</p>
                        <p>다양한 양식 출력!</p>
                        <p>매출/매입 자료 통계</p>
                        <p>세무 자료 메일 전송</p>
                        <p>농약판매기록 전송</p>
                    </div>
                </div>
                <div class='icon_box icon_box4' v-bind:class="{active:S1B}">
                    <div class='inner'>
                        <img src='image/product/pro_s1_icon4.png'>
                    </div>
                    <div class='outer'>
                        <h4>편리하다!</h4>
                        <p>최초 1회 고객등록 입력 후</p>
                        <p>판매/재고관리, 결제까지 한번에!</p>
                    </div>
                </div>
                <div class='icon_box icon_box5' v-bind:class="{active:S1B}">
                    <div class='inner'>
                        <img src='image/product/pro_s1_icon5.png'>
                    </div>
                    <div class='outer'>
                        <h4>믿을 수 있다!</h4>
                        <p>30년간 축적된 현장 기술력</p>
                        <p>클라우드 서버 자동 백업</p>
                        <p>빠르고 친절한 A/S와 고객만족</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- <section class='section2 normal'>
            <div class='wrap'>
                <h2>제품 주요 기능(나열방식)</h2>
                <div class='s2_boxs'>
                    <div class='s2_box' v-for="(s2Desc,i) in s2Descs" v-bind:class="'s2_box'+i">
                        <div class='inner'>
                            <h4>{{s2Desc.title}}</h4>
                            <p>{{s2Desc.desc}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->

        <section class='section2 slide'>
                <h2>제품 주요 기능</h2>
                <div class='s2_boxs'>
                    <Carousel 
                    :per-page-custom=[[767,3],[350,1]]
                    paginationColor="#ffffff"
                    >
                        <Slide v-for="(s2Desc,i) in s2Descs" >
                            <div class='s2_box' v-bind:class="'s2_box'+i">
                                <div class='inner'>
                                    <h4>{{s2Desc.title}}</h4>
                                    <img v-bind:src="'image/product/'+s2Desc.icon"/>
                                    <p>{{s2Desc.desc}}</p>
                                </div>
                            </div>
                        </Slide>
                    </Carousel>
                </div>
        </section>

        <section class='section3'>
            <div class='wrap'>
                <h2><strong>Win-Win Pro</strong>는 </br>농자재 유통관리에 최적화된 서비스를 제공합니다.</h2>
                <div class="content content1">
                        <h3>품목, 재고 관리</h3>
                    <div class='img img1'></div>
                    <ul class='text'>
                        <li><span></span> 농업경영업체 등록 자동확인, 부가세-과세, 영세, 면세 구분, 주민등록번호 체크 기능</li>
                        <li><span></span> 최근 작업한 판매기록 20건을 바로 확인할 수 있는 최근거래고객 기능</li>
                        <li><span></span> 고객 기본정보 엑셀 파일 저장 기능(성명,주소,주민등록번호 등)</li>
                        <li><span></span> 고객별 미수금 현황 엑셀 파일 저장 또는 출력 기능</li>
                        <li><span></span> 간편 추출 검색 기능(특정 제품 구매 고객, 외상금 있는 고객 등)</li>
                    </ul>
                </div>
                <div class="content right">
                    <h3>매입, 매출 장부 관리</h3>
                <div class='img img2'></div>

                    <ul class='text left'>
                        <li><span></span>농약 제품 PLS(농약허용물질목록 관리제도) 등록제품과 매칭 작업 기능</li>
                        <li><span></span>품목 일괄 수정 작업 기능 - 품목분류 작업, 등록번호 작업, 바코드 매칭 작업</li>
                        <li><span></span>농약 검색 기능 - PLS 등록 품목 검색(농진청 최신 DB 자료)</li>
                        <li><span></span>품목별 부가세 - 부가세, 영세, 면세, 비자료 구분하여 등록</li>
                        <li><span></span>창고별 재고관리 기능, 재고 조정 작업 기능</li>
                    </ul>

                </div>
                <div class="content left">
                    <h3>데이터 분석 작업</h3>

                <div class='img img3'></div>
                    <ul class='text'>
                        <li><span></span>매입 매출 입력 후 바로 영수증, 거래명세서, 세금계산서 발행 가능</li>
                        <li><span></span>미수금 장부 엑셀 파일 저장, 출력 및 미수고객 문자보내기 가능</li>
                        <li><span></span>농어민 판매대장, 독성별 판매대장, 농약혼용표 관리</li>
                        <li><span></span>단일품목별 판매현황, 푼목별 판매량 및 판매금액 집계</li>
                        <li><span></span>견적서 양식, 납품확인서(농협납품확인서 포함) 양식 제공</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>`,
       components: {
        Carousel,
        Slide
      },
      created() {
        EventBus.$emit('moNav',false)
    },
    data(){
        return{
            S1B:false,
            s2Descs:[
                {
                    no:1,
                    title:"편안한 장부관리, 재고 관리",
                    desc:"농자재 전문 판매 프로그램으로 수기식 장부 입력형식을 채택하여 누구나 쉽게 사용할 수 있습니다. 현장에 꼭 필요한 기능을 담아 사용하기에 편리합니다.",
                    icon:"pro_s2_icon1.png"
                },
                {
                    no:2,
                    title:"농약판매기록 농진청 전송",
                    desc:"농약품목의 경우 PLS와 매칭되어 매출장부 작성할 때 작물 입력하면 농진청전송 메뉴에서 별도 입력없이 농약안전관리시스템으로 전송할 수 있습니다.",
                    icon:"pro_s2_icon2.png"

                },
                {
                    no:3,
                    title:"클라우드 환경",
                    desc:"농자재 전문 판매 프로그램으로 수기식 장부 입력형식을 채택하여 누구나 쉽게 사용할 수 있습니다. 현장에 꼭 필요한 기능을 담아 사용하기에 편리합니다.",
                    icon:"pro_s2_icon3.png"

                },
                {
                    no:4,
                    title:"스마트폰 연동 지원",
                    desc:"Win-Win Pro 앱을 설치하여 언제 어디서나 고객관리, 장부관리가 가능합니다. 병해충 촬영, 전자싸인, CID기능 탑재하여 편리하게 사용할 수 있습니다.",
                    icon:"pro_s2_icon4.png"

                },
                {
                    no:5,
                    title:"편리한 세무신고",
                    desc:"바로빌과 연동되어 쉽고 편하게 전자세금계산서를 발행할 수 있습니다. 매입/매출자료에서 필요한 항목만 추출하여 엑셀파일로 저장할 수 있어 증빙서 업무를 보다 편리하게 할 수 있습니다.",
                    icon:"pro_s2_icon5.png"

                },
                {
                    no:6,
                    title:"제품 바코드 인식 시스템",
                    desc:"시중 유통되는 대부분의 작물보호제 제품 바코드가 등록되어 있으며 제품 목록이 정기적으로 갱신됩니다. 개별 등록 기능으로 신규등록하여 사용할 수 있습니다.",
                    icon:"pro_s2_icon6.png"

                },
                {
                    no:7,
                    title:"다양한 문서 양식 제공",
                    desc:"견적서, 거래명세서, 납품확인서, 미수금확인서, 거래약정서 등 다양한 문서 양식 활용으로 편리한 작업환경을 제공합니다.",
                    icon:"pro_s2_icon7.png"

                },
                {
                    no:8,
                    title:"데이터 추출, 가공, 분석",
                    desc:"필요한 데이터를 추출하여 엑셀파일로 저장하거나 출력할 수 있습니다. 품목분류별 매입/매출 통계 데이터도 한 눈에 확인할 수 있습니다.",
                    icon:"pro_s2_icon8.png"

                },
                {
                    no:9,
                    title:"문자 전송 기능",
                    desc:"대용량 문자발송이 가능한 문자전송 기능을 탑재하여 고객 분별로 정보를 제공하거나 채권업무 관련 문자를 편리하게 전송할 수 있습니다.",
                    icon:"pro_s2_icon9.png"

                }
            ]
        }
    },
    mounted() {
        setTimeout(() => {
            this.S1B = true
        }, 500);
        
    },
}

export default pro;