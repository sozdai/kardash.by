/*--------------------------------------------------------------------------
 Project 		: ME+ | Responsive Modern V-card
 Author 		: Mias Marthinus
----------------------------------------------------------------------------
 Copyright (c) 2016 - MiasStudio 
--------------------------------------------------------------------------*/
'use strict'

//everything do after window loaded
$(window).load(function(){	
	
	/*======================================================================
	  availability
	======================================================================*/
	var custom_availability = availability || false
	
	if( custom_availability ){
		$('#availability').addClass('available')
		$('#availability').children('span').eq(0).html('Available for Job')
	}
	else{
		$('#availability').addClass('unavailable')
		$('#availability').children('span').eq(0).html('Unavailable for Job')
	}
	
	/*======================================================================
	  starting animation
	======================================================================*/
	
	//pause the animation
	$('#loading-panel').children().css({
		'animation-play-state' : 'paused'
	})
	//close loading panel
	$('#loading-panel').css({
		'opacity' : '0',
		'-ms-transform' : 'scale(0.8, 0.8)', 
		'-webkit-transform' : 'scale(0.8, 0.8)', 
		'transform' : 'scale(0.8, 0.8)'
	})
	
	//open canvas
	$('#canvas').css({
		'opacity' : '1',
		'-ms-transform' : 'scale(1, 1)', 
		'-webkit-transform' : 'scale(1, 1)', 
		'transform' : 'scale(1, 1)'
	})
	
})