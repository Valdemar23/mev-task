const express = require('express');

const app = express();

app.get('/ping', function(request, response) {
    response.send('Hello, it Works!!!\n');
});

app.set('port', process.env.PORT || 4000);

let server = app.listen(app.get('port'), function() {
    console.log('server started : ' + server.address().port);
});
