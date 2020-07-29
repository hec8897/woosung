import { Carousel, Slide } from 'vue-carousel';
import ConsultSection from './consult'

const Plus = {
    template:`<div class='plus'>
    <div class='head_banner'>
            <div class='wrap'>
                <img src="image/product/plus.png"/>
                <div class='text_area'>
                    <h3>편리함에 편리함을 더하여</h3>
                    <h2>Win-Win Pro 결제연동</h2>
                    <p>Win-Win Pro 편리기능을 그대로 사용하면서<br> 결제 기능과 각자 계약증빙서명 자료를 편리하게!</p>
                </div>
            </div>
        </div>
        <section class='section1 wrap'>
        <h2>Win-Win Pro 결제연동은</h2>
        <p>Win-Win Pro의 편리기능을 그대로 사용하면서 전용단말기와 
        전자서명 사인패드를 추가하여 결제 연동기능과 개인정보 활용 동의서, 
        각종 계약증빙서명자료를 종이 출력없이 전자 서명으로 판매현장에서 간단하고
        편하게 사용하실 수 있는 제품입니다.</p>
        </section>
        <section class='section2 slide'>
                <h2>제품 주요 기능</h2>
                <div class='s2_boxs'>
                    <Carousel 
                        :navigationEnabled="true"
                        :navigationPrevLabel="prevBtn"
                        :navigationNextLabel="nextBtn"
                        :per-page-custom=[[1024,3],[768,2],[350,1]]
                        paginationColor="#ffffff"
                        >
                        
                        <Slide v-for="(s2Desc,i) in s2Descs" >
                            <div class='s2_box' v-bind:class="'s2_box'+s2Desc.no">
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
        <section class='section3 wrap'>
            <figure>
                <img src='image/figure.jpg'>
            </figure>
            <div class='list_item'>
            <h3>Win-Win Pro 결제 연동 제품 구성</h3>
            <ul>
                <li><b>A</b> Win-Win Pro 결제 연동 전용 단말기</li>
                <li><b>B</b> 전원 케이블</li>
                <li><b>C</b> 사용 설명서</li>
                <li><b>D</b> USB to PC 연동 케이블</li>
                <li><b>E</b> 서명 패드</li>
            </ul>
            <p>Win-Win Pro 결제 연동의 기능은 전용 결제 단말기와 싸인패드에서만 작동됩니다.  </p>
            </div>
            

        </section>
        <section class='section4 card_two'>
            <div class='wrap'>
                <h2><strong>Win-Win Pro 결제 연동</strong> 만의 차별화 된 기능!</h2>
               
                <div class='content content2'>
                    <img src='image/product/pos_s3_img2.png'>
                    <h3>판매기록과 결제를 한번에</h3></h3>
                    <p>결제 연동으로 판매업무를 간편하게 할 수 있으며</p>
                    <p>별도 프린터 구매없이 영수증, 거래명세표를 출력 할 수 있습니다.</p>
                </div>

                <div class='content content1'>
                    <img src='image/product/pos_s3_img1.png'>
                    <h3>개인정보이용 동의서 전자서명</h3>
                    <p>동의 출력한다고 A4용지, 토너(잉크) 소모할 필요없이</p>
                    <p>서명패드에 서명만 하면 개인정보이용 동의서 서명란에 자동입력!</p>
                </div>
                <h2 class='bot'>Win-Win Pro 결제 연동은 농자재 유통관리에 최적화 된 서비스를 제공합니다.</h2>
            </div>
        </section>
        <ConsultSection />

    </div>`,
       components: {
        Carousel,
        Slide,
        ConsultSection
      },
    data(){
        return{
            s2Descs:[
                {
                    no:9,
                    title:"결제연동",
                    desc:"농자재 전문 판매 프로그램으로 수기식 장부 입력형식을 채택하여 누구나 쉽게 사용할 수 있습니다. 현장에 꼭 필요한 기능을 담아 사용하기에 편리합니다.",
                    icon:"pro_s2_icon1.png"
                },
                {
                    no:10,
                    title:"전자서명기능 추가",
                    desc:"농약품목의 경우 PLS와 매칭되어 매출장부 작성할 때 작물 입력하면 농진청전송 메뉴에서 별도 입력없이 농약안전관리시스템으로 전송할 수 있습니다.",
                    icon:"pro_s2_icon10.png"

                },
                {
                    no:0,
                    title:"편안한 장부관리, 재고 관리",
                    desc:"농자재 전문 판매 프로그램으로 수기식 장부 입력형식을 채택하여 누구나 쉽게 사용할 수 있습니다. 현장에 꼭 필요한 기능을 담아 사용하기에 편리합니다.",
                    icon:"pro_s2_icon1.png"
                },
                {
                    no:1,
                    title:"농약판매기록 농진청 전송",
                    desc:"농약품목의 경우 PLS와 매칭되어 매출장부 작성할 때 작물 입력하면 농진청전송 메뉴에서 별도 입력없이 농약안전관리시스템으로 전송할 수 있습니다.",
                    icon:"pro_s2_icon2.png"

                },
                {
                    no:2,
                    title:"스마트폰 연동 지원",
                    desc:"Win-Win Pro 앱을 설치하여 언제 어디서나 고객관리, 장부관리가 가능합니다. 병해충 촬영, 전자싸인, CID기능 탑재하여 편리하게 사용할 수 있습니다.",
                    icon:"pro_s2_icon4.png"

                },
                {
                    no:3,
                    title:"편리한 세무신고",
                    desc:"바로빌과 연동되어 쉽고 편하게 전자세금계산서를 발행할 수 있습니다. 매입/매출자료에서 필요한 항목만 추출하여 엑셀파일로 저장할 수 있어 증빙서 업무를 보다 편리하게 할 수 있습니다.",
                    icon:"pro_s2_icon5.png"

                },
                {
                    no:4,
                    title:"제품 바코드 인식 시스템",
                    desc:"시중 유통되는 대부분의 작물보호제 제품 바코드가 등록되어 있으며 제품 목록이 정기적으로 갱신됩니다. 개별 등록 기능으로 신규등록하여 사용할 수 있습니다.",
                    icon:"pro_s2_icon6.png"

                },
                {
                    no:5,
                    title:"다양한 문서 양식 제공",
                    desc:"견적서, 거래명세서, 납품확인서, 미수금확인서, 거래약정서 등 다양한 문서 양식 활용으로 편리한 작업환경을 제공합니다.",
                    icon:"pro_s2_icon7.png"

                },
                {
                    no:6,
                    title:"데이터 추출, 가공, 분석",
                    desc:"필요한 데이터를 추출하여 엑셀파일로 저장하거나 출력할 수 있습니다. 품목분류별 매입/매출 통계 데이터도 한 눈에 확인할 수 있습니다.",
                    icon:"pro_s2_icon8.png"

                },
                {
                    no:7,
                    title:"문자 전송 기능",
                    desc:"대용량 문자발송이 가능한 문자전송 기능을 탑재하여 고객 분별로 정보를 제공하거나 채권업무 관련 문자를 편리하게 전송할 수 있습니다.",
                    icon:"pro_s2_icon9.png"

                }
            ],
            nextBtn:`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="30" height="30"
            viewBox="0 0 226 226"
            style=" fill:#444444;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,226v-226h226v226z" fill="none"></path><g fill="#444444"><path d="M67.74703,18.04469c-1.83625,0 -3.47828,1.11234 -4.18453,2.80734c-0.68859,1.71266 -0.2825,3.65484 1.04172,4.94375l87.20422,87.20422l-87.20422,87.20422c-1.18297,1.13 -1.65969,2.825 -1.23594,4.39641c0.40609,1.58906 1.64203,2.825 3.23109,3.23109c1.57141,0.42375 3.26641,-0.05297 4.39641,-1.23594l90.4,-90.4c1.76563,-1.76562 1.76563,-4.62594 0,-6.39156l-90.4,-90.4c-0.8475,-0.88281 -2.01281,-1.35953 -3.24875,-1.35953z"></path></g></g></svg>`,
            prevBtn:`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="30" height="30"
            viewBox="0 0 226 226"
            style=" fill:#444444;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,226v-226h226v226z" fill="none"></path><g fill="#444444"><path d="M158.11172,18.04469c-1.18297,0.01766 -2.29531,0.51203 -3.1075,1.35953l-90.4,90.4c-1.76562,1.76563 -1.76562,4.62594 0,6.39156l90.4,90.4c1.13,1.18297 2.825,1.65969 4.39641,1.23594c1.58906,-0.40609 2.825,-1.64203 3.23109,-3.23109c0.42375,-1.57141 -0.05297,-3.26641 -1.23594,-4.39641l-87.20422,-87.20422l87.20422,-87.20422c1.34188,-1.30656 1.73031,-3.28406 1.00641,-4.99672c-0.72391,-1.73031 -2.41891,-2.825 -4.29047,-2.75437z"></path></g></g></svg>`
        }
    }
}

export default Plus;