

// After the API loads, call a function to enable the search box.
$(window).load(function() {
  gapi.client.setApiKey('AIzaSyDOSBjs7rY2BT2VbsaLoLg4pIVzkJo3cVo');
  gapi.client.load('youtube', 'v3', function() {
  $('#search-button').attr('disabled', false);
  });
  $('#search').submit(function(event){
    event.preventDefault();
    search();
  });
});

// ----------------------- ignore this part
// var relo = 0;
// Search for a specified string.
// function count(relo,q){
//   if (relo > 0) {
//     console.log(relo);
//     window.location.reload()
//     search(q);
//   }
//   relo++;
//   console.log(relo);
//
// }
// -----------------------

function search(q) {

  $( "#search-container" ).html(""); //this is how i refresh the page when user want to search other topic
  var q = $('#query').val();
  // console.log(q); //q is what is you type in the input box
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet',
    maxResults: 9
  });


  request.execute(function(response) {
    console.log(response);
    var str = JSON.stringify(response.result);
    var result = response.result;
    var htmlvideo =""
    // console.log(str.items);
    // console.log(template);
    console.log("------------");
    for (var i = 0; i < result.items.length; i++) {
      var item = result.items[i];
      var snippet = item.snippet;
      // console.log("************");
      // console.log(item);
      // console.log("=======");
      // console.log(snippet);
      // console.log("************");
      // htmlvideo += Mustache.render(template, {id: item.id.videoId,title: snippet.title, imageurl: snippet.thumbnails.high.url});
      $('#search-container').append("<h2>"+snippet.title+"</h2>"+"<br>");
      $('#search-container').append("<iframe"+" "+"id='ytplayer'"+" "+"type ='text/html'"+" "+"class='embed-responsive-item'"+" "+"src='http://www.youtube.com/embed/"+item.id.videoId+"?autoplay=0'"+" "+"width='640'"+" "+"height='480'"+" "+"frameborder='0'/>"+"<br>");
      // $('#search-container').append(item.id.videoId+" "+snippet.title+"<br>");


    }
  });



}
