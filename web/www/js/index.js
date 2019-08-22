var button = document.getElementById('req');
var respText = document.getElementById('resp');

var http = new XMLHttpRequest();

http.onreadystatechange = function(event) {
    respText.innerHTML = http.responseText;
};

button.onclick = function(event) {
    event.preventDefault();
    http.open("GET", "/fuck");
    http.send();
};