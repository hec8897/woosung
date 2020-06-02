import './header.scss';
const Header = {
    template:`<header>
        <div class='wrap'>
            <h1>
                <img src='image/logo.png'>
            </h1>
            <div class='gnb_area'>
                <div class='top_gnb'>
                    <span>HOME</span>
                    <span>CONTACT US</span>
                    <span>SITE MAP</span>
                    <span class='btn'>로그인</span>
                </div>
                <div class='bottom_gnb'>
                    <span>회사소개</span>
                    <span>제품소개</span>
                    <span>고객지원센터</span>
                    <span>팜카페</span>
                    <span class='point'>WinWin-Biz</span>
                </div>
            </div>
        </div>
 
    </header>`
}

export default Header;