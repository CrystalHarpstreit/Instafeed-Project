// objective is to have an input where the user can search for whichever hashtag they please
//initialize instafeed when someone hits enter in the input box
//

function makeFeed(tag) {
  var feed = new Instafeed({                                                                     
    get: "tagged", 
    tagName: tag,
    clientId: "fba902ddd7ff4a7fa6e94ee2f88aa691",
    template: '<li><div><a href="{{link}}"><img src="{{image}}" /></a></div></li>'
  });

  return feed.run();
}

window.onload = function() {
  document.addEventListener("keyup", function(e) {
    var keyCode = e.which || e.keyCode;

    if (keyCode === 13) {
      var inputContent = document.querySelector("input").value;

      makeFeed(inputContent);
    }
  });
};
