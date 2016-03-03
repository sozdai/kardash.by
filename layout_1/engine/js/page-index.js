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
	  open page
	======================================================================*/
	
	var 
	
	active_page = 'resume',
	
	openPage = function( target ){
		
		if( ( $('#page-' + target).length > 0 ) && ( target != active_page ) ){
			
			//set active page
			active_page = target
			
			//open page
			$('#page-' + target).ec().openPage('none')
			
			//set active menu
			$('#main-menu').children().removeClass('active')
			$('#main-menu-' + target).addClass('active')
			
			//attach hash to location.href
			document.location.href = '#' + target
			
		}
		
	}
	
	/*======================================================================
	  response to reserve link
	======================================================================*/
	
	/* INTERNAL LINK */
	
	$('.in-link-page-resume').on('click', function(){
		openPage('resume')
	})
	
	$('.in-link-page-portofolio').on('click', function(){
		openPage('portofolio')
	})
	
	$('.in-link-page-hire').on('click', function(){
		openPage('hire')
	})
	
	/*======================================================================
	  checking hash
	======================================================================*/
	
	var
	str = document.location.href,	
	hash_value = 'resume'
	
	//check if there's hash exist
	if( str.indexOf('#') > -1 ){
		hash_value = str.substr( ( str.lastIndexOf('#') + 1 ), str.length )
	}
	
	//open page according to hash value
	if( !$.ec.isEmpty(hash_value) && ( hash_value != active_page ) ){
		openPage(hash_value)
	}
	
	
})

/*=========================================================================
  google map
=========================================================================*/
//get your address coordinate from http://www.mapcoordinates.net
//then insert LATITUDE in the left and LONGITUDE in the right
var
 
map_office = new google.maps.LatLng(-7.977138, 112.633882) // #EDIT

function map_initializing(map_center, id) {
	var mapProp = {
		center:map_center,
		zoom:16,
		scrollwheel: false,
		draggable: false,
		panControl:false,
		zoomControl:false,
		mapTypeControl:false,
		scaleControl:false,
		streetViewControl:false,
		overviewMapControl:false,
		rotateControl:false, 
		mapTypeId:google.maps.MapTypeId.ROADMAP
	}
	
	var 
	
	//map create
	map = new google.maps.Map(document.getElementById(id), mapProp),
	
	//marker
	marker = new google.maps.Marker({
		position:map_center,
		animation:google.maps.Animation.BOUNCE
	}),
	
	map_style = [
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#e9e9e9"
				},
				{
					"lightness": 17
				}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#f5f5f5"
				},
				{
					"lightness": 20
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#ffffff"
				},
				{
					"lightness": 17
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"color": "#ffffff"
				},
				{
					"lightness": 29
				},
				{
					"weight": 0.2
				}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#ffffff"
				},
				{
					"lightness": 18
				}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#ffffff"
				},
				{
					"lightness": 16
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#f5f5f5"
				},
				{
					"lightness": 21
				}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#dedede"
				},
				{
					"lightness": 21
				}
			]
		},
		{
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"visibility": "on"
				},
				{
					"color": "#ffffff"
				},
				{
					"lightness": 16
				}
			]
		},
		{
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"saturation": 36
				},
				{
					"color": "#333333"
				},
				{
					"lightness": 40
				}
			]
		},
		{
			"elementType": "labels.icon",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "transit",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#f2f2f2"
				},
				{
					"lightness": 19
				}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#fefefe"
				},
				{
					"lightness": 20
				}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"color": "#fefefe"
				},
				{
					"lightness": 17
				},
				{
					"weight": 1.2
				}
			]
		}
	]
	
	
	map.setOptions({styles : map_style})
	
	marker.setMap(map)
	
}

google.maps.event.addDomListener(window, 'load', function(){
	map_initializing( map_office, 'page-hire-map' )
})
