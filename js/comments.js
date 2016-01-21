var Comments = {};
(function ($) {

  Comments.init = function () {
  	//insertar componentes
  	$("#comment_widget").load("widget/comments.html", function(){
		$("#add_comment").bind("click", this.addComment);	
  	});
  	
  }

  Comments.addComment = function () {
  	var new_text = $("#new_comment").val();
	$("#comment_area").append("<p class='comment'>" + new_text + "</p>");
	$("#new_comment").val("");
	alert('Comment Added');
  }
})(jQuery);