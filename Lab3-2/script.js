var Twit = require('twit');
var fs = require('fs');
var jsonData = {name: "@galgadot", children: []}; //initialize root galgadot

var twit = new Twit({
    consumer_key:         'bebZUVBbJ9ZZ1X51CPT27PazN',
    consumer_secret:      'ea4kzOKYKYMvm4KCWo4GeDrgNM8BHa18usxrzg5rTWPtGQ9R49',
    access_token:         '3248175864-pjhRpzpuUyrs8XiZjQbxIiGh5hGLc26QKEh20pr',
    access_token_secret:  'paCoknh5AJZbWbyietVose3r9ymMO3YJZAxVx0AOrpG8Y',
});

twit.get('friends/list', { screen_name: 'galgadot' },  function (err, data, response) {
    if (err) throw err;
    for(var i = 0;i < data['users'].length; i++){
        var user = {name : "@" + data['users'][i]['screen_name'], children: []};
        console.log(user);
        jsonData.children.push(user);
    }
    fs.writeFile ("twitter_data.json", JSON.stringify(jsonData), function(err) {
        if (err) throw err;
    });
});
