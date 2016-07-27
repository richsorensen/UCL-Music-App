var ap2 = new APlayer({
    element: document.getElementById('player0'),
    narrow: false,
    autoplay: false,
    showlrc: 2,
    mutex: true,
    theme: '#615754',
    music: {
        title: 'CYCLE of INSANITY',
        author: 'UnCivil Liberty',
        url: 'http://apps.proartservices.com/tunes/CYCLE_of_INSANITY.mp3',
        pic: 'http://apps.proartservices.com/tunes/BtC.png',
		
    }
});
ap2.init();

var ap3 = new APlayer({
    element: document.getElementById('player3'),
    narrow: false,
    autoplay: false,
    showlrc: 1,
    mutex: true,
    theme: '#615754',
    music: [
	{
        title: 'FESTIVAL of the DEAD',
        author: 'UnCivil Liberty',
        url: 'http://apps.proartservices.com/tunes/06_FESTIVAL%20of%20the%20DEAD.mp3',
        pic: 'http://apps.proartservices.com/tunes/CD_COVER_FOD.jpg',
		lrc: "",
    },
	{
        title: 'JUDGEMENT DAY (2012)',
        author: 'UnCivil Liberty',
        url: 'http://apps.proartservices.com/tunes/05_JUDGEMENT_DAY_(2012).mp3',
        pic: 'http://apps.proartservices.com/tunes/CD_COVER_J_DAY.jpg',
		lrc: "",
    },
	{
        title: 'REVOLUTION',
        author: 'UnCivil Liberty',
        url: 'http://apps.proartservices.com//tunes/02_REVOLUTION.mp3',
        pic: 'http://apps.proartservices.com//tunes/CD_COVER_REVOLUTION.jpg',
		lrc: "",
    },
	
	]
	
});
ap3.init();


