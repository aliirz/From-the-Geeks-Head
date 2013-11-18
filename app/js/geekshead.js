$(function() {  
	var pull = $('#pull');  
	menu  = $('nav ul');  
	menuHeight = menu.height();  

	$(pull).on('click', function(e) {  
		e.preventDefault();  
		menu.slideToggle();  
	});  
}); 
$(window).resize(function(){  
	var w = $(window).width();  
	if(w > 320 && menu.is(':hidden')) {  
		menu.removeAttr('style');  
	}  
});
$(document).ready(function() { 
	
	slidr.create('slidr-div', {
		breadcrumbs: false,
		controls: 'border',
		direction: 'horizontal',
		fade: false,
		overflow: false,
		theme: '#222',
		timing: { 'cube': '0.5s ease-in' },
		transition: 'cube'
	}).start();

	//Socialite.load('#shareLinks');
});

// 			// needs to be a string for jquery.cookie
// 			var postId = '1'; 

// 			$(function()
// 			{
// 				// initialize kudos
// 				$("figure.kudoable").kudoable();

// 				// check to see if user has already kudod
// 				// fyi cookies do not work when you are viewing this as a file
// 				if($.cookie(postId) == 'true') {
// 					// make kudo already kudod
// 					$("figure.kudoable").removeClass("animate").addClass("complete");

// 					// your server would take care of the proper kudos count, but because this is a
// 					// static page, we need to set it here so it doesn't become -1 when you remove
// 					// the kudos after a reload
// 					$(".num").html(1);
// 				}	

// 				// when kudoing
// 				$("figure.kudo").bind("kudo:active", function(e)
// 				{
// 					console.log("kudoing active");
// 				});

// 				// when not kudoing
// 				$("figure.kudo").bind("kudo:inactive", function(e)
// 				{
// 					console.log("kudoing inactive");
// 				});

// 				// after kudo'd
// 				$("figure.kudo").bind("kudo:added", function(e)
// 				{
// 					var element = $(this);
// 					// ajax'y stuff or whatever you want
// 					console.log("Kodo'd:", element.data('id'), ":)");
// 					$("#myModal").modal();
// 					// set cookie so user cannot kudo again for 7 days
// 					//$.cookie(postId, 'true', { expires: 7 });
// 				});

// 				// after removing a kudo
// 				$("figure.kudo").bind("kudo:removed", function(e)
// 				{
// 					var element = $(this);
// 					// ajax'y stuff or whatever you want
// 					console.log("Un-Kudo'd:", element.data('id'), ":(");

// 					// remove cookie
// 					//$.removeCookie(postId);
// 				});
// 			});


// // bind to events on the kudos
// $("figure.kudo").on("kudo:added", function(event)
// {
// 	var element = $(this);
// 	var id = element.data('id');
//   // send the data to your server...
//   console.log("Kudod", element);
// });
