/*--------------------------------------------------------------------------
 Project 		: ME+ | Responsive Modern V-card
 Author 		: Mias Marthinus
----------------------------------------------------------------------------
 Copyright (c) 2016 - MiasStudio 
--------------------------------------------------------------------------*/
'use strict'

//everything do after window loaded
$(window).load(function(){	
	
	
	/*=========================================================================
	  portofolio button click : categorizing
	=========================================================================*/
	$('#portofolio-category').children('.button').each(function(){
		var 
			target = $(this),
			category = ec(this).getClassValue('category'),
			non_category = $('#portofolio-items').children().not('.category-' + category),
			match_category = $('#portofolio-items').children('.category-' + category),
			all_button = $('#portofolio-category').children('.button')
		
		if( category == 'all' ){
			match_category = $('#portofolio-items').children()
		}
		
		$(this).on("click", function(){
			all_button
			.removeClass('active')
			
			target
			.addClass('active')
							
			//hide non
			non_category.css({
				'-ms-transform' : 'scale(0, 0)', 
				'-webkit-transform' : 'scale(0, 0)', 
				'transform' : 'scale(0, 0)'
			})
			window.setTimeout(function(){
				non_category.addClass('hide')

				//open match
				match_category
				.removeClass('hide')
				.css({
					'-ms-transform' : 'scale(1, 1)', 
					'-webkit-transform' : 'scale(1, 1)', 
					'transform' : 'scale(1, 1)'
				})				
			}, 300)
			
		})
	})
	
	/*======================================================================
	  portofolio detail action
	======================================================================*/
	var
	
	portofolio_display_state = false,
	
	closePortofolioDetail = function(){
		//check visibility
		if( portofolio_display_state ){
			//close the #portofolio-display-view
			$('#portofolio-detail-view').css({
				'opacity' : '0',
				'-ms-transform' : 'scale(0.8, 0.8)', 
				'-webkit-transform' : 'scale(0.8, 0.8)', 
				'transform' : 'scale(0.8, 0.8)'
			})
			
			//hiding
			window.setTimeout(function(){
				$('#portofolio-detail-view').addClass('portofolio-detail-view-hide')
			}, 300)
			
			//set display state
			portofolio_display_state = false
		}
	},
	
	openPortofolioDetail = function( content, bg_img ){
		//check the visibility
		if( !portofolio_display_state ){
			//set scroll top
			$('#portofolio-detail-view').scrollTop(0);
			//set image
			$('#portofolio-detail-view').children().eq(0).css({
				'background-image' : bg_img
			})
			//set content
			$('#portofolio-detail-view').children().eq(1).html( content )
			
			//show
			$('#portofolio-detail-view').removeClass('portofolio-detail-view-hide')
			
			//open the #portofolio-display-view
			$('#portofolio-detail-view').css({
				'opacity' : '1',
				'-ms-transform' : 'scale(1, 1)', 
				'-webkit-transform' : 'scale(1, 1)', 
				'transform' : 'scale(1, 1)'
			})
			
			//set display state
			portofolio_display_state = true
		}
		else{
			closePortofolioDetail()
			
			window.setTimeout(function(){
				openPortofolioDetail( content, bg_img )
			}, 300)
		}
	}
	
	// PORTOFOLIO ITEM ONCLICK
	
	$('#portofolio-items').children().each(function(){
		var 
		bg_img = $(this).css('background-image'),
		content = $(this).children().eq(0).html()
		
		$(this).on('click', function(){
			openPortofolioDetail( content, bg_img )
		})
		
	})
	
	// PORTOFOLIO DETAIL VIEW CLOSE BUTON ON CLICK
	$('#portofolio-detail-view-close').on('click', function(){
		closePortofolioDetail()
	})
	
})
