$( document ).ready(function() {
  $.ajax({
    url: "./data.json",
    dataType: "json",
    success: function(response){
      $("#commentbox").textcomplete([
      {
        users: response,
        match: /\B@(\w*)$/,
        search: function (input, callback) {
          input = new RegExp(input, 'i');
          callback($.map(this.users, function (user) {
            return (( user.username.match(input)) || (user.name.match(input)))
                      ? user.username + ' - ' + user.name
                      : null;
          }));
        },
        index: 1,
        replace: function (user) {
          user = user.split(' - ');
          return '@' + user[0] + ' ';
        }
      }
    ], { appendTo: "#users" })
    }
  })//end ajax
})
