import './widget.scss';
const topWidget = {
    template:`<div class='top_widget' @click="moveTop">
        <b-icon icon="chevron-double-up"></b-icon>
    </div>`,
    methods: {
        moveTop(){
            window.scrollTo(0,0)
        }
    },
}
export default topWidget;