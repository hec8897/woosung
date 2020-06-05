const pos = {
    template:`<div class='pos'>
                <div class='head_banner'></div>
                <section class='section1 pos_section'>
            <div class='wrap'>
                <div class='icon_box icon_box1' v-bind:class="{active:S1B}">
                    <div class='inner'>
                        <img src='image/product/pos_s1_icon1.png'>
                    </div>
                    <div class='outer'>
                        <h4>쉽고 편리하다</h4>
                        <p>PC활용 능력 최소화</p>
                        <p>누구나 쉽게 사용가능</p>
                    </div>
                </div>
                <div class='icon_box icon_box2' v-bind:class="{active:S1B}">
                    <div class='inner'>
                        <img src='image/product/pos_s1_icon2.png'>
                    </div>
                    <div class='outer'>
                        <h4>빠른 처리속도!</h4>
                        <p>결제와 동시에 판매기록</p>
                        <p>자동처리</p>
                    </div>
                </div>
                <div class='icon_box icon_box3' v-bind:class="{active:S1B}">
                    <div class='inner'>
                        <img src='image/product/pos_s1_icon3.png'>
                    </div>
                    <div class='outer'>
                        <h4>자동 매출 관리</h4>
                        <p>매출기록 손쉽게 확인</p>
                        <p>농약판매기록-농약안전</p>
                        <p>정보시스템 전송가능</p>
                    </div>
                </div>
                <div class='icon_box icon_box4' v-bind:class="{active:S1B}">
                    <div class='inner'>
                        <img src='image/product/pos_s1_icon4.png'>
                    </div>
                    <div class='outer'>
                        <h4>전자서명</h4>
                        <p>개인정보 동의서 출력 필요없이</p>
                        <p>전자서명으로 간편하게</p>
                    </div>
                </div>
                <div class='icon_box icon_box5' v-bind:class="{active:S1B}">
                    <div class='inner'>
                        <img src='image/product/pos_s1_icon5.png'>
                    </div>
                    <div class='outer'>
                        <h4>믿을 수 있다!</h4>
                        <p>전국 A/S망과 콜센터 운영</p>
                        <p>고장 걱정없이 안심하고 사용</p>
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
    </div>`,
        data(){
            return{
                S1B:false
        }},
    mounted() {
        setTimeout(() => {
            this.S1B = true
        }, 500);
        
    },
}

export default pos;