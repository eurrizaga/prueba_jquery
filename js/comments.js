var Comments = {};
(function ($) {
  Comments.init = function () {
  	//insertar componentes
  	this.insertHTML($("comment-widget"));
  	$("#add_comment").bind("click", this.addComment);	
  }

  Comments.addComment = function () {
  	var new_text = $("#new_comment").val();
	$("#comment_area").append("<p class='comment'>" + new_text + "</p>");
	$("#new_comment").val("");
  }

  Comments.insertHTML = function(element){
  	element.html('<div id="row1" class="row"></div><div id="row2" class="row"></div>');
  	$("#row1").append('<p>Comments:</p>')
		.append('<div id="comment_area" class="col-xs-12"></div>');
  	$("#row2").append('<div class="col-xs-4"></div>')
  		.append('<div id= "new_comment_area" class="col-xs-4"></div>')
  		.append('<div class="col-xs-4"></div>');
  	$("#new_comment_area").append('<p>Add new Comment</p>')
  		.append('<p>Enter your Name: <input type="text" value=""/></p>')
  		.append('<p>Enter your Comment: <textarea id="new_comment"></textarea></p>')
  		.append('<p><button id="add_comment" class="btn btn-success">ADD COMMENT</button></p>');

  }
})(jQuery);