import EventBus from '../eventbus'
const widget = {
 template:`<div class='widget'>
     <div class='kakao'>
         <a href='http://pf.kakao.com/_Wxkxhnxb/chat' target="blank">
            <img src="image/kakao.png"/>
            <p>플러스친구</p>
        </a>
     </div>

     <div class='teamviewer'>
         <a href="etc/TeamViewer.exe" download>
         <img src="image/consulting.png"/>
         <p>원격 지원</p></a>
     </div>
     <div class='teamviewer' @click="openPopup">
         <img src="image/consult.png"/>
         <p>상담신청</p>
     </div>

     <div class='phone'>
             <img src="image/phone.png"/>
             <div>
                 <p><a href="tel:02-6959-8161" >02-6959-8161</a></p>
                 <p><a href="tel:1544-6301">1544-6301</a></p>
            </div>
     </div>
 </div>`,
 methods: {
     openPopup(){
         EventBus.$emit('consultPopup',true)
     }
 },   
}

export default widget