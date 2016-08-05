
import $ from 'jquery';
import TestController from '../src/controllers/TestController';

$(document).ready(function() {
  let testController = new TestController();

  $.getJSON('http://localhost:3000/static/search.json', function(results){
    var search = results.search;
    for (var i = 0; i < search.length; i++) {
      var lastName = search[i].user.last.slice(0,1);
      $('#content').append('<p id="title">' + search[i].title + ' </p>');
      $('#content').append('<p id="caps">' + search[i].user.first + ' ' + lastName + '.</p>');
      $('#content').append('<p id="caps">' + search[i].pet.name + '</p>');
      if(search[i].description.length > 48){
        var subString = search[i].description.substr(0,48);
        var count = 0;
        for (var j = subString.length-1; j >= 0; j--) {
          if(subString[j] === ' '&& count < 1) {
            $('#content').append('<p>' + subString.substr(0,[j]) + '...</p><br>');
            count ++;
           }
        }
      } else {
        $('#content').append('<p>' + search[i].description + '</p><br>');
       }
    }
  });
});
