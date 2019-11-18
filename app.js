var mqtt = require('mqtt')
var api = ''; // replace with your apikey 
var url = 'mqtt://mqtt.favoriot.com' ;


var options = {
  port: 1883,
  clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
  username: api,
  password: api,
};

// Create a client connection
var client = mqtt.connect(url, options);

// or var client = mqtt.connect({ port: 1883, host: '192.168.1.100', keepalive: 10000});

var data = {
			  "device_developer_id": "deviceDefault@favoriot", // replace with your device developer id
			  "data": {"temperature":"30", "humidity":"40"}
		   };

client.on('connect', function () {

client.subscribe(api+"/v2/streams/status");  // listen stream response
client.publish(api+'/v2/streams', JSON.stringify(data));
  
})
 
client.on('message', function (topic, message) {
  // message is Buffer 
  console.log(message.toString());
  client.end();
})