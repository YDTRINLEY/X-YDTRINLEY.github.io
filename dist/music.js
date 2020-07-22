const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: false,
    autoplay: true,
    theme: '#27d86d', 
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.6,
    mutex: true,
    listFolded: true,
    listMaxHeight: 30,
    audio: [
	{
        title: '冯虚御风',                                          // Required, music title
          author: '变奏的梦想/秩厌',                          // Required, music author
          url: 'http://music.163.com/song/media/outer/url?id=1385635545.mp3',  // Required, music url
          pic: 'http://p2.music.126.net/6FBEVxPTtUWL0ivq27rWgA==/109951164311032751.jpg?param=177y177'
      },
      {
        title: '萤火之森',
        author: 'CMJ',
        url: 'http://music.163.com/song/media/outer/url?id=1415706303.mp3',
        pic: 'https://p1.music.126.net/jNh5VIYGzc74RFPMv_TouQ==/109951164615554163.jpg?param=130y130'
      },
      {
        title: 'China-X',
        author: '徐梦圆',
        url: 'http://music.163.com/song/media/outer/url?id=41500546.mp3',
        pic: 'https://p1.music.126.net/hH4UmteuzsqZHacrr3YS_g==/18358545649308968.jpg?param=130y130'
      },
      {
        title: 'さらい屋五叶',
        author: 'MOKA☆',
        url: 'http://music.163.com/song/media/outer/url?id=782617.mp3',
        pic: 'https://p1.music.126.net/r7Slk3MPNdJ1CaNoJ-xpoA==/4402444557617830.jpg?param=130y130'
      },
      {
        title: '寂灵',
        author: 'AJonnyCool',
        url: 'http://music.163.com/song/media/outer/url?id=1347436764.mp3',
        pic: 'https://p2.music.126.net/I6VAJQPpdBCtZy-rIFhjZw==/109951164438129646.jpg?param=130y130'
      },
      {
        title: 'Lifeline',                                          // Required, music title
          author: 'OMZHZ',                          // Required, music author
          url: 'http://music.163.com/song/media/outer/url?id=1392191796.mp3',  // Required, music url
          pic: 'https://p2.music.126.net/qSLlhLpBprNzja_9gvDX0Q==/109951164460336526.jpg?param=130y130'
      },
      {
        title: '琴之翼',
        author: 'V.K克 ',
        url: 'http://music.163.com/song/media/outer/url?id=155795.mp3',
        pic: 'https://p1.music.126.net/j1U7-8BCKJSaWKxs0I_3Lg==/116548232557486.jpg?param=130y130'
      },
      {
          title: 'Annabelle',
          author: 'Pianoboy高至豪',
          url: 'http://music.163.com/song/media/outer/url?id=139755.mp3',
          pic: 'https://p2.music.126.net/3EJFBlnRvWs1btwLg-nlXA==/109951165100117253.jpg?param=130y130'
        },
        {
          title: '花火が瞬く夜に',
          author: '羽肿',
          url: 'http://music.163.com/song/media/outer/url?id=434902428.mp3',
          pic: 'https://p1.music.126.net/f7Nd9FSzVZMkTPWDW_rnOg==/736672800839982.jpg?param=130y130'
        },
        {
          title: 'IMOUTO',
          author: 'AJonnyCool',
          url: 'http://music.163.com/song/media/outer/url?id=1313860134.mp3',
          pic: 'https://p2.music.126.net/0Tj1oKoAPzG3LquEJrWzZg==/109951163576761643.jpg?param=130y130'
        },
        {
          title: '0.0',
          author: 'AJonnyCool',
          url: 'http://music.163.com/song/media/outer/url?id=1381126000.mp3',
          pic: 'https://p1.music.126.net/2JwXtIrOIIDNKYmyhrBBNg==/109951164253092969.jpg?param=130y130'
        },
        {
          title: 'Deep Blue (feat. Monika Santucci)',
          author: 'William Black / Monika Santucci',
          url: 'http://music.163.com/song/media/outer/url?id=1381084455.mp3',
          pic: 'https://p1.music.126.net/D3SfKcBMX2fSf-g6QHgxYw==/109951164252041917.jpg?param=130y130'
        },
        {
          title: 'Fragments  ',
          author: '千坂',
          url: 'http://music.163.com/song/media/outer/url?id=453130276.mp3',
          pic: 'https://p2.music.126.net/wuBe3K5odyEqZBLZNkXNlg==/109951163855629724.jpg?param=130y130'
        },
        {
          title: 'Endeavors (Original Mix)',
          author: 'MitiS',
          url: 'http://music.163.com/song/media/outer/url?id=26278742.mp3',
          pic: 'https://p1.music.126.net/cGnpQh5S9ng1gKp3EQ7cgQ==/109951163171610197.jpg?param=130y130',
      }
    ]
});
const colorThief = new ColorThief();
const image = new Image();
const xhr = new XMLHttpRequest();
const setTheme = (index) => {
    if (!ap.list.audios[index].theme) {
        xhr.onload = function(){
            let coverUrl = URL.createObjectURL(this.response);
            image.onload = function(){
                let color = colorThief.getColor(image);
                ap.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
                URL.revokeObjectURL(coverUrl)
            };
            image.src = coverUrl;
        }
        xhr.open('GET', ap.list.audios[index].cover, true);
        xhr.responseType = 'blob';
        xhr.send();
    }
};
setTheme(ap.list.index);
ap.on('listswitch', (index) => {
    setTheme(index);
});


