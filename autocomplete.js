$( document ).ready(

  $("#target").keyup(function(event){
    var queryString = event.target.value;

    $.ajax({
      url: "./data.json",
      dataType: "json",
      success: function(response){
        console.log('good ajax')
        $("#users").empty();
        var matches = findUser(queryString, response);
        for (var i = 0; i < matches.length; i++) {
          $("#users").append("<p>" + matches[i].username + " - " + matches[i].name + "</p>")
        }
      }

    })

  })

)

function findUser(input, data) {
  var re = new RegExp(input, 'i');
  var matches = [];
  for (var i = 0; i < data.length; i++) {
    if ((data[i].name.match(re)) || (data[i].username.match(re))) {
      matches.push(data[i]);
    }
  }
  return matches;
}
