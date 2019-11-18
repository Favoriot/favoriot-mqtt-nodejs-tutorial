# favoriot-mqtt-nodejs-tutorial
tutorial to send data stream using mqtt protocol

requirements: 
  nodejs v8 > above

installation:
  npm install

start:
  node app.js
  
mqtt publish : yourapikey + '/v2/streams'
mqtt subscribe : yourapikey + '/v2/streams/status'
  
In this code, you need to change TWO things:
 *    1. Your API key (can be obtained from the account setting in favoriot platform)
 *    2. Your device developer ID (can be obtained from devices in favoriot platform)
 * Once done, you may compile and upload this code and check the data stream in your favoriot platform.
 * Remember, to retrieve the temperature data you have to press the push button!
 * Goodluck!
 
