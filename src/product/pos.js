const pos = {
    template:`<div class='pos'>
                <div class='head_banner'>
                    <div class='wrap'>
                     <img src="image/product/pos.png"/>
                     <div class='text_area'>
                         <h3>국내 최초 농약 유통 포스 프로그램</h3>
                         <h2>Win-Win 포스</h2>
                         <p>복잡하고 어려워진 농약판매 우성 소프트가 해결 해드리겠습니다.</p>
                     </div>
                    </div>
                </div>
                <section class='section1 pro_section'>
                    <div class='wrap'>
                        <div v-for="(s1Desc,i) in s1Desc" class="icon_box" v-bind:class="{active:S1B}">
                            <div class='inner'>
                                <img :src='s1Desc.icon'>
                            </div>
                            <div class='outer'>
                                <h4>{{s1Desc.tit}}</h4>
                                <div v-html="s1Desc.descs"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class='section2'>
                    <div class='wrap'>
                        <h2>포스 사용방법</h2>
                        <div class='s2_boxs'>
                            <div class='s2_box s2_box1'>
                                <div>
                                    <h5>STEP.1</h5>
                                    <h4>고객확인</h4>
                                    <img src='image/product/pos_s2_icon1.png'>
                                    <p>농약 판매 기록을 위한 고객 확인 절차</p>
                                </div>
                            </div>
                            <div class='s2_box s2_box1'>
                                <div>
                                    <h5>STEP.2</h5>
                                    <h4>바코드 스캔</h4>
                                    <img src='image/product/pos_s2_icon2.png'>
                                    <p>일반 마트처럼</br> 바코드 스캔</p>
                                    <img src='image/product/icon_arrow.png' class='arrow'>
                                </div>
                            </div>
                            <div class='s2_box s2_box1'>
                                <div>
                                    <h5>STEP.3</h5>
                                    <h4>장부기록 (자동)</h4>
                                    <img src='image/product/pos_s2_icon3.png'>
                                    <p>제품 정보 자동확인 매출장부에 기록</p>
                                    <img src='image/product/icon_arrow.png' class='arrow'>
                                </div>
                            </div>
                            <div class='s2_box s2_box1'>
                                <div>
                                    <h5>STEP.4</h5>
                                    <h4>결제</h4>
                                    <img src='image/product/pos_s2_icon4.png'>
                                    <p>결제 금액 확인 </br>현금/카드 결제</p>
                                    <img src='image/product/icon_arrow.png' class='arrow'>
                                </div>
                            </div>
                            <div class='s2_box s2_box1'>
                                <div>
                                    <h5>STEP.5</h5>
                                    <h4>단말기 전송</h4>
                                    <img src='image/product/pos_s2_icon5.png'>
                                    <p>결제완료 후 </br>자동으로 입금처리</p>
                                    <img src='image/product/icon_arrow.png' class='arrow'>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        <section class='section3 card_two'>
            <div class='wrap'>
                <h2><strong>Win-Win Pos</strong> 만의 차별화 된 기능!</h2>
                <div class='content content1'>
                    <img src='image/product/pos_s3_img1.png'>
                    <h3>개인정보이용 동의서 전자서명</h3>
                    <p>동의 출력한다고 A4용지, 토너(잉크) 소모할 필요없이</p>
                    <p>서명패드에 서명만 하면 개인정보이용 동의서 서명란에 자동입력!</p>
                </div>
                <div class='content content2'>
                    <img src='image/product/pos_s3_img2.png'>
                    <h3>장부 자동입력과 농진청 제출자료 자동전송</h3>
                    <p>그동안 매출장부에 일일이 타이핑해서 입력하느라 힘드셨죠?</p>
                    <p>자동으로 농약 판매기록이 안전정보시스템으로 전송!</p>
                </div>
                <h2 class='bot'><strong>Win-Win Pos</strong>는 농자재 유통관리에 최적화 된 서비스를 제공합니다.</h2>
            </div>
        </section>

    </div>`,
    data(){
        return{
                S1B:false,
                s1Desc:[
                    {no:0,icon:'image/product/pos_s1_icon1.png',tit:'쉽고 편리하다',descs:"<p>PC활용 능력 최소화</p><p>누구나 쉽게 사용가능</p>"},
                    {no:1,icon:'image/product/pos_s1_icon2.png',tit:'빠른 처리속도!',descs:"<p>수결제와 동시에 판매기록</p><p>자동 처리</p>"},
                    {no:1,icon:'image/product/pos_s1_icon3.png',tit:'자동 매출 관리',descs:"<p>매출기록 손쉽게 확인</p><p>농약판매기록-농약안전</p><p>매출/매입 자료 통계</p><p>정보시스템 전송가능</p>"},
                    {no:1,icon:'image/product/pos_s1_icon4.png',tit:'전자서명',descs:"<p>개인정보 동의서 출력 필요없이</p><p>전자서명으로 간편하게</p>"},
                    {no:1,icon:'image/product/pos_s1_icon5.png',tit:'믿을 수 있다!',descs:"<p>전국 A/S망과 콜센터 운영</p><p>고장 걱정없이 안심하고 사용</p>"},
                ]
            }
    },
    mounted() {
        setTimeout(() => {
            this.S1B = true
        }, 500);
        
    },
}

export default pos;