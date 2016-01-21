"use strict";
$(window).ready(function(){
	$("#add_comment").bind("click", addComment);

	function addComment(){
		var new_text = $("#new_comment").val();
		$("#comment_area").append("<p>" + new_text + "</p>");
	}

});