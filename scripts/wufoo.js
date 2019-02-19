var request = require("request");

request({
    uri: "http://thegridcl.wufoo.com/api/v3/forms/zgx4sqr0cnf0du/entries.json",
    method: "POST",
    auth: {
        'username': 'thegridcl',
        'password': 'N0tTodaySatan',
        'sendImmediately': false
    },
    form: {
        'Field1' : 'Name',
        'Field2' : 'Number',
        'Field3' : 'Email',
        'Field4' : 'Message'
    }
}, function(error, response, body) {
  console.log(body);
});
