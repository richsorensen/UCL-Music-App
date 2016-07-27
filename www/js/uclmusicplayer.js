

var ap1 = new APlayer({
    element: document.getElementById('player1'),
    narrow: false,
    autoplay: false,
    showlrc: 2,
    mutex: true,
    theme: '#615754',
	loop: false,
    music: {
        title: 'CYCLE of INSANITY',
        author: 'UnCivil Liberty',
        url: 'http://apps.proartservices.com/tunes/CYCLE_of_INSANITY.mp3',
        pic: 'http://apps.proartservices.com/tunes/BtC.png',
		
    }
});
ap1.init();

var ap2 = new APlayer({
    element: document.getElementById('player2'),
    narrow: false,
    autoplay: false,
    showlrc: 2,
    mutex: true,
    theme: '#615754',
	loop: false,
    music: {
        title: 'PERFECTION OVERLOAD',
        author: 'UNCIVIL LBERTY',
        url: 'http://apps.proartservices.com/tunes/01_PERFECTION_OVERLOAD.mp3',
        pic: 'http://apps.proartservices.com/tunes/PERF_OLOAD.jpg',
    }
});
ap2.init();