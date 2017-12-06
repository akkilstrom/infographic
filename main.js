'use strict';

var tl = TweenMax;
var topPart = document.getElementById('layer-top');
var bottomPart = document.getElementById('layer-bottom');
var text = document.querySelectorAll('#text path');
var main = document.querySelector('main');

$(document).ready(function() { 
	//BAKGRUNDSANIMATION
	tl.to(main, 5, {backgroundColor:'#F5E993', yoyo: true, repeat:-1, repeatDelay: 1});

	
	//TEXT-ANIMATION
	tl.staggerFromTo(text, 0.7, {autoAlpha: 0, fill: '#FFFFFF'}, 
	{autoAlpha: 1, fill: 'black'}, 0.1);
	
	//SAXANIMATION
	setTimeout(function(){  
		tl.fromTo(topPart, 0.4, {rotation: 0, transformOrigin:'center center'}, 
		{rotation: 20, transformOrigin:'center center', yoyo: true, repeat:3});
	}, 3200);
});


