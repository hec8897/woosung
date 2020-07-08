import MainNotice from './main-notice';
import MainMaterial from './main-material';
const SectionInfoMain = {
    template:`<section class='section1'>
                    <div class='wrap'>
                        <MainNotice/>
                        <MainMaterial/>
                    </div>
               </section>`,
    components: {
        MainNotice,
        MainMaterial
    }
}

export default SectionInfoMain;