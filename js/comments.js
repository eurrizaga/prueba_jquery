var Comments = {};
(function ($) {
  Comments.init = function () {
  	//insertar componentes
  	//this.insertHTML($("comment-widget"));
  	$("#add_comment").bind("click", this.addComment);	
  }

  Comments.addComment = function () {
  	var new_text = $("#new_comment").val();
  	var new_name = $("#name").val();
  	var date = new Date($.now());
	$("#comment_area").append("<li class='comment' title='Posted by " + new_name + " on " + date + "'><strong>"+ new_name +" said: </strong>" + new_text + "</li>");
	$("#new_comment").val("");
	$("#new_name").val("");
  }
/*
  Comments.insertHTML = function(element){
  	element.html('<div id="row1" class="row"></div><div id="row2" class="row"></div>');
  	$("#row1").append('<p>Comments:</p>')
		.append('<div id="comment_area" class="col-xs-12"></div>');
  	$("#row2").append('<div class="col-xs-4"></div>')
  		.append('<div id= "new_comment_area" class="col-xs-4"></div>')
  		.append('<div class="col-xs-4"></div>');
  	$("#new_comment_area").append('<p>Add new Comment</p>')
  		.append('<p>Enter your Name: <input type="text" id="name" value=""/></p>')
  		.append('<p>Enter your Comment: <textarea id="new_comment"></textarea></p>')
  		.append('<p><button id="add_comment" class="btn btn-success">ADD COMMENT</button></p>');
  }
  */
})(jQuery);