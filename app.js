var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Cloud4C Technologies Hyderabad.........AWS DEVOPS WORKING PARTNER.......A CTRLS Datacenter Company Pvt Ltd, Madhapur'); //write a response to the client
  res.end(); //end the response
}).listen(9981); //the server object listens on port 80