﻿$(document).ready(function(){
		
	//Display Loading Image
	function Display_Load()
	{
	    $(".loading").fadeIn(900,0);
		$(".loading").html("<img src='bigLoader.gif' />");
	}
	//Hide Loading Image
	function Hide_Load()
	{
		$(".loading").fadeOut('slow');
	};
   //Default Starting Page Results   
	$("#pagination li:first").css({'color' : '#FF0084'}).css({'border' : 'none'});	
	Display_Load();	
	$("#content").load("float_phuket_page.php?page=1", Hide_Load());
		
	//Pagination Click
	$("#pagination li").click(function(){	
		Display_Load();		
		//CSS Styles
		$("#pagination li")
		.css({'border' : 'solid #dddddd 1px'})
		.css({'color' : '#0063DC'});		
		
		$(this)
		.css({'color' : '#FF0084'})
		.css({'border' : 'none'});
		//Loading Data
		var pageNum = this.id;		
		$("#content").load("float_phuket.php?page=" + pageNum, Hide_Load());			
	});
});	