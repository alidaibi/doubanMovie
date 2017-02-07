let url = 'https://static.sesine.com/wechat-weapp-movie';
module.exports = {
    city: '',
    baiduAK: 'Y1R5guY8Y2GNRdDpLz7SUeM3QgADAXec',
    api_list: {
        popular: 'https://api.douban.com/v2/movie/in_theaters', coming: 'https://api.douban.com/v2/movie/coming_soon',
        top: 'https://api.douban.com/v2/movie/top250',
        search: {
            byKeyword: 'https://api.douban.com/v2/movie/search?q=',
            byTag: 'https://api.douban.com/v2/movie/search?tag='
        },
        filmDetail: 'https://api.douban.com/v2/movie/subject/',
        personDetail: 'https://api.douban.com/v2/movie/celebrity/',
        baiduMap: 'https://api.map.baidu.com/geocoder/v2/'
    },
    bannerList: [
        { type: 'film', id: '26683290', imgUrl: url + '/images/banner_1.jpg' },
        { type: 'film', id: '25793398', imgUrl: url + '/images/banner_2.jpg' },
        { type: 'film', id: '26630781', imgUrl: url + '/images/banner_3.jpg' },
        { type: 'film', id: '26415200', imgUrl: url + '/images/banner_4.jpg' },
        { type: 'film', id: '3025375', imgUrl: url + '/images/banner_5.jpg' }],
    shakeSound: {
        startUrl: url + '/sound/shake.mp3',
        start: '',
        completeUrl: url + '/sound/shakeComplete.wav',
        complete: ''
    },
    shakeWelcomeImg: url + '/images/shake_welcome.png'
        
}