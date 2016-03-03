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
	  blog detail action
	======================================================================*/
	var
	
	blog_display_state = false,
	
	closePortofolioDetail = function(){
		//check visibility
		if( blog_display_state ){
			//close the #blog-display-view
			$('#blog-detail-view').css({
				'opacity' : '0',
				'-ms-transform' : 'scale(0.8, 0.8)', 
				'-webkit-transform' : 'scale(0.8, 0.8)', 
				'transform' : 'scale(0.8, 0.8)'
			})
			
			//hiding
			window.setTimeout(function(){
				$('#blog-detail-view').addClass('blog-detail-view-hide')
			}, 300)
			
			//set display state
			blog_display_state = false
		}
	},
	
	openPortofolioDetail = function( content, bg_img ){
		//check the visibility
		if( !blog_display_state ){
			//set scroll top
			$('#blog-detail-view').scrollTop(0);
			//set image
			$('#blog-detail-view').children().eq(0).css({
				'background-image' : bg_img
			})
			//set content
			$('#blog-detail-view').children().eq(1).html( content )
			
			//show
			$('#blog-detail-view').removeClass('blog-detail-view-hide')
			
			//open the #blog-display-view
			$('#blog-detail-view').css({
				'opacity' : '1',
				'-ms-transform' : 'scale(1, 1)', 
				'-webkit-transform' : 'scale(1, 1)', 
				'transform' : 'scale(1, 1)'
			})
			
			//set display state
			blog_display_state = true
		}
		else{
			closePortofolioDetail()
			
			window.setTimeout(function(){
				openPortofolioDetail( content, bg_img )
			}, 300)
		}
	}
	
	// PORTOFOLIO ITEM ONCLICK
	
	$('#blog-items').children().each(function(){
		var 
		bg_img = $(this).css('background-image'),
		content = $(this).html()
		
		$(this).on('click', function(){
			openPortofolioDetail( content, bg_img )
		})
		
	})
	
	// PORTOFOLIO DETAIL VIEW CLOSE BUTON ON CLICK
	$('#blog-detail-view-close').on('click', function(){
		closePortofolioDetail()
	})
	
})
