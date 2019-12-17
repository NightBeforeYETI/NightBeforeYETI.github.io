


$(document).ready(function() {
	
	pageFlipPack();
	
	
	function pageFlipPack() {
		var flipIndex = 0;
		var page = $(".pge");
		pageClick();
		page.eq(0).addClass("show");
		
		function pageActive(n) {
			
			if ((page.eq(n).hasClass("show")) && (n < (page.length - 1))) {
				
				page.eq(n).removeClass("show");
				page.eq(n + 1).addClass("show");
				flipIndex++
			}
			
			else {
				return "no";
			}
		}
		
		function pageActivePrev(n) {
			if ((page.eq(n).hasClass("show")) && (n > 0)) {
				
				page.eq(n).removeClass("show");
				page.eq(n - 1).addClass("show");
				flipIndex--;
			}
		}	
		
		function pageClick(){
			$("#flipContain").click(function() {
				pageActive(flipIndex);	
				console.log('prov');
			});
			
			$("#prev").click(function() {
				
				pageActivePrev(flipIndex);
				console.log('prev');
			});
			
		}
		
			

	}

	$("#flipContain").one("click", function() {
		$("#tip").fadeOut();
	});
	
	

});

