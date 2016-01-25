var Comments = {};
(function ($) {
  Comments.init = function () {
    $("#add_comment").bind("click", this.addComment);

    var commentTemplate = _.template($('#comment_widget_template').html());
    $('comment-widget').append(commentTemplate());
  };

  Comments.addComment = function () {
    var new_text = $("#new_comment").val();
    var new_name = $("#name").val();
    var date = new Date($.now());
    $("#comment_area").append("<li class='comment' title='Posted by " + new_name + " on " + date + "'><strong>"+ new_name +" said: </strong>" + new_text + "</li>");
    $("#new_comment").val("");
    $("#new_name").val("");
  }
})(jQuery);