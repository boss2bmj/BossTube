

// After the API loads, call a function to enable the search box.
$(window).load(function() {
  gapi.client.setApiKey('AIzaSyDOSBjs7rY2BT2VbsaLoLg4pIVzkJo3cVo');
  gapi.client.load('youtube', 'v3', function() {
    $('#search-button').attr('disabled', false);
  });
  $('#search-button').submit(function(event){
    event.preventDefault();
    search();
  });
  $('#query').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      event.preventDefault();
        search();
    }
  });
});

function search(q) {
  $( "#search-container" ).html("");
  var q = $('#query').val();
  // console.log(q);
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet',
    maxResults: 9
  });
  request.execute(function(response) {
    console.log(response);
    var str = JSON.stringify(response.result);
    // var template = $('#panelTemplate').html();
    var result = response.result;
    var htmlvideo =""
    video_length = result.items.length;
    // console.log(str.items);
    // console.log(template);
    for (var i = 0; i < video_length; i++) {
      var item = result.items[i];
      var snippet = item.snippet;
      $('#search-container').append("<h2>"+snippet.title+"</h2>"+"<br>");
      $('#search-container').append("<iframe"+" "+"id='ytplayer'"+" "+"type ='text/html'"+" "+"class='embed-responsive-item'"+" "+"src='http://www.youtube.com/embed/"+item.id.videoId+"?autoplay=0'"+" "+"width='600'"+" "+"height='450'"+" "+"frameborder='0'/>"+"<br>");
    }
  });
}
