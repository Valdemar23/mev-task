const express = require('express');
const http = require('http');

const app = express();

const targetUrl = process.env.TARGET_URL || 'http://172.17.0.1:4000/ping' || 'http://18.191.181.248:4000/ping'


app.get('/fuck', function(request, response) {
    http.get(targetUrl, function(resp) {
        let data = '';
    
        resp.on('data', (chunk) => {
            data += chunk;
        });
    
        resp.on('end', () => {
            response.send(data);
        });
    
    }).on("error", (err) => {
        response.send("Error: " + err.message);
    });
});

app.use(express.static(__dirname + '/www'));

app.set('port', process.env.APP_PORT || 8080);

let server = app.listen(app.get('port'), function() {
    console.log('server started : ' + server.address().port);
});
