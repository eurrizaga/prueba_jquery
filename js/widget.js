var Comments = {};
(function ($) {

  Comments.init = function () {
  	$("#add_comment").bind("click", addComment);
	$("#comment_area > *").css("background-color","blue");
  }


  Comments.addComment = function () {
  	var new_text = $("#new_comment").val();
	$("#comment_area").append("<p class='comment'>" + new_text + "</p>");
	$("#new_comment").val("");
  }


})(jQuery);