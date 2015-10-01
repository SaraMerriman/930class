$(document).ready(function() {
  $("#SOW-click").click(function() {
    $("#SOW").slideToggle();
  });

  $("#external-click").click(function() {
    $("#external").slideToggle();
  });

  $("button#hello").click(function() {
    $("ul#user").prepend ("<li>hi</li>");
    $("li").click(function() {
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#webpage").prepend ("<li>hi</li>");
    $("li").click(function() {
      $(this).remove();
    });
  });


});
