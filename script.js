
function loadDoc(p, t) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById(t).innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", p, true);
  xhttp.send();
}

function postReq(p) {
  var xhttp = new XMLHttpRequest();   // new HttpRequest instance 
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  var url = p;
  xhttp.open("POST", url);
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({ "foo": "bar", "data": { "vin": "$VIN" } }));

}
