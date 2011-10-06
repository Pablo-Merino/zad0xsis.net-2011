$(document).ready(function() {
  
    // set your twitter id
    var user = 'zad0xsis';
      
    // using jquery built in get json method with twitter api, return only one result
    $.getJSON('//api.twitter.com/statuses/user_timeline.json?screen_name=' + user + '&count=1&callback=?', function(data)      {
          
        // result returned
        var tweet = data[0].text;
      
        // process links and reply
        tweet = tweet.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, function(url) {
            return '<a href="'+url+'">'+url+'</a>';
        }).replace(/B@([_a-z0-9]+)/ig, function(reply) {
            return  reply.charAt(0)+'<a href="http://twitter.com/'+reply.substring(1)+'">'+reply.substring(1)+'</a>';
        });
      
        // output the result
        $("#tweet").html(tweet);
    }); 
      
});