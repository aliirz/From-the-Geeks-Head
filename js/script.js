/* Author: Ali Raza

*/

	$(document).ready(function() { 
 			Socialite.load();
 			mpq.track("Page Loaded");
 		});
 		
	$('.postHeading').click(function(){
		mpq.track("Post Clicked");
	});
	
