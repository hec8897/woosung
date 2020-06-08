import board from './board'
const faq = {
    template:`<div class='faq'>
        <div class='board_head'>
            <h3>자주하는 질문(FAQ)</h3>
        </div>
        <section class='section1'>
        <div class='wrap'>
            <h2>자주하는 질문</h2>
            <nav class='lnb faq_lnb'>
                <ul>
                    <li class='active'>전체</li>
                    <li>질문1</li>
                    <li>win-win pro</li>
                    <li>win-win pos</li>
                    <li>기타</li>
                </ul>
            </nav>
            <ul class='faq'>
                <li><span>Q</span>
                <p>
                    <label>질문1</label>
                    자주하는 질문1</p>
                </li>
                <li><span>A</span>
                <p>
                    자주하는 질문1  
                    자주하는 질문1  
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt amet quisquam error, debitis repellendus dicta maiores non labore incidunt natus mollitia explicabo consectetur. Nesciunt, odio aliquam. Nisi, repudiandae! Corporis, dicta
                </p>
                </li>
            </ul>
        </div>
        </section>
    </div>`,
    components:{
        board
    }
}

export default faq;