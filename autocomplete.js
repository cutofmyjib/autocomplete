$( document ).ready(
  $("#commentbox").keypress(function(event){
    if (event.which === 64) {
      $("#commentbox").on('change', function(event){
        var index = event.target.value.indexOf('@');
        var target = event.target.value.slice(index + 1);
        if (!(target === ' ')) {
          $.ajax({
            url: "./data.json",
            dataType: "json",
            success: function(response){
              $("#users").empty();
              var matches = findUser(target, response);
              for (var i = 0; i < matches.length; i++) {
                $("#users").append("<p>" + matches[i].username + " - " + matches[i].name + "</p>")
              }
            }
          })//end ajax
        }
      })
    }

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
