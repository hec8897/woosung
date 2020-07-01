const kakaoMap = {
    template:`    <section class='section5'>
    <h2>찾아 오시는길</h2>
    <div class='map_btns'>
        <a target="blank" v-bind:href="'https://map.kakao.com/link/to/'+location.Name+','+location.x+ ','+ location.y" class='map_btn'>길찾기</a>
        <a target="blank" v-bind:href="'https://map.kakao.com/link/search/'+location.Name" class='map_btn'>지도 자세히 보기</a>
    </div>
    <div id='map'></div>
  
</section>`,
data(){
    return{
        location:{
            Name:'JH장흥빌딩',
            x:37.560316,
            y:126.831367
        },
    }
},
mounted() {
    if (window.kakao && window.kakao.maps) {
        this.initMap();
    } else {
        const script = document.createElement('script');
        /* global kakao */
        script.onload = () => kakao.maps.load(this.initMap);
        script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=99cedbcfb8d92960e9d9d10a1a575129';
        document.head.appendChild(script);
    }

},
methods: {
    initMap(){
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(this.location.x, this.location.y),
            level: 3
        };
        var map = new kakao.maps.Map(container, options);
        var markerPosition = new kakao.maps.LatLng(this.location.x,this.location.y);
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);
    }
},
}

export default kakaoMap;