
import $ from 'jquery';
import TestController from '../src/controllers/TestController';

$(document).ready(function() {
  let testController = new TestController();

  var id = 0;
  $.getJSON('http://localhost:3000/static/search.json', function(results){
    var search = results.search;
    for (var i = 0; i < search.length; i++) {
      var lastName = search[i].user.last.slice(0,1);
      var urlLink = search[i].title.trim().replace(/\s/g, "-").replace("'","").replace("--","-");
      //creates a number to simulate an id that is added to the end of urlLink
      id ++;
      $('#content').append('<p id="caps"><a href="' + urlLink + '-' + id + '">' + search[i].title + '</a></p>');
      $('#content').append('<p id="caps">' + search[i].user.first + ' ' + lastName + '.</p>');
      $('#content').append('<p id="caps">' + search[i].pet.name + '</p>');
      if(search[i].description.length > 48){
        var subString = search[i].description.substr(0,48);
        //countLoops ensures description string is only looped through and cut at the first space instead of each space
        var countLoops = 0;
        for (var j = subString.length-1; j >= 0; j--) {
          if(subString[j] === ' '&& countLoops < 1) {
            $('#content').append('<p>' + subString.substr(0,[j]) + '...</p><br>');
            countLoops ++;
          }
        }
      } else {
        $('#content').append('<p>' + search[i].description + '</p><br>');
       }
    }
  });
});
