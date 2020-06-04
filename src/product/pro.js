const pro = {
    template:`<div class='pro'>
        <div class='head_banner'></div>
        <section class='section1'>
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
        <section class='section2'>
            <div class='wrap'>
                <h2>제품 주요 기능</h2>
                <div class='s2_boxs'>
                    <div class='s2_box1 s2_box'>
                        <div class='inner'>
                            <h4>편리한 장부관리, 재고관리</h4>
                        </div>
                    </div>
                    <div class='s2_box2 s2_box'>
                        <div class='inner'></div>
                    </div>
                    <div class='s2_box3 s2_box'>
                        <div class='inner'></div>
                    </div>
                </div>
            </div>
        </section>
    </div>`,
    data(){
        return{
            S1B:false,
        }
    },
    mounted() {
        setTimeout(() => {
            this.S1B = true
        }, 500);
        
    },
}

export default pro;