$(document).ready(function() {

  $("button#bark").click(function() {
    $("ul#dog").prepend ("<li>RUFFFFFFF</li>");
    $("img#claws").remove();
    $("li").click(function() {
      $(this).remove();
    });
  });

  $("button#meow").click(function() {
    $("ul#cat").prepend ("<li>MEoooooow</li>");
    $("img#ruff").remove();
    $("li").click(function() {
      $(this).remove();
    });
  });


});
