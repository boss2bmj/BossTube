

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

// Search for a specified string.
function count(relo,q){
  console.log("0999099990900990909009909");
  if (relo > 0) {
    console.log("77777777");
    console.log(relo);
    window.location.reload()
    search(q);
  }
  relo++;
  console.log(relo);
  console.log("0999099990900990909009909");

}


var relo = 0;
function search(q) {
  // $( "#search-container" ).remove();
  // var relo = 0;
  var q = $('#query').val();
  console.log(q);
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet',
    maxResults: 9
  });
  // count(relo,q);
  // console.log("0999099990900990909009909");


  // console.log("0999099990900990909009909");


  request.execute(function(response) {
    console.log(response);
    var str = JSON.stringify(response.result);
    // var template = $('#panelTemplate').html();
    var result = response.result;
    var htmlvideo =""
    // console.log(str.items);
    // console.log(template);
    // Mustache.parse(template);
    // console.log("------------");
    for (var i = 0; i < result.items.length; i++) {
      var item = result.items[i];
      var snippet = item.snippet;
      // console.log("************");
      // console.log("item");
      // console.log(item);
      //
      // console.log("=======");
      // console.log("snippet");
      // console.log(snippet);
      // console.log("=======");
      // console.log("************");
      // htmlvideo += Mustache.render(template, {id: item.id.videoId,title: snippet.title, imageurl: snippet.thumbnails.high.url});
      $('#search-container').append("<h2>"+snippet.title+"</h2>"+"<br>");
      $('#search-container').append("<iframe"+" "+"id='ytplayer'"+" "+"type ='text/html'"+" "+"class='embed-responsive-item'"+" "+"src='http://www.youtube.com/embed/"+item.id.videoId+"?autoplay=0'"+" "+"width='600'"+" "+"height='450'"+" "+"frameborder='0'/>"+"<br>");
      // $('#search-container').append("<p>"+snippet.publishedAt+"</p>"+"<br>");
      // $('#search-container').append("<p>"+snippet.description+"</p>"+"<br>");

      // $('#search-container').append(<iframe id="ytplayer" type="text/html" class="embed-responsive-item" src="http://www.youtube.com/embed/"+item.id.videoId+"?autoplay=1" width="640" height="480" frameborder="0"+"<br>"/>);
      // $('#search-container').append(item.id.videoId+" "+snippet.title+"<br>");


    }
  });



}
