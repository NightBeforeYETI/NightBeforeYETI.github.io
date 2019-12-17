


$(document).ready(function() {
	
	pageFlipPack();
	
	
	function pageFlipPack() {
		var flipIndex = 0;
		var page = $(".pge");
		pageActive(0);
		pageClick();
		function pageActive(n) {
			page.eq(n).addClass("show");
			
			if ((page.eq(n - 1).hasClass("show")) && (n < page.length)) {
				
				page.eq(n - 1).removeClass("show");
				page.eq(n).addClass("show");
			}
			
			else {
				return "no";
			}
		}
		
		function pageClick(){
			$("#flipContain").click(function() {
				flipIndex++;
				pageActive(flipIndex);	
			});
			
		}
	}

	$("#flipContain").one("click", function() {
		$("#tip").fadeOut();
	});
	
	




});