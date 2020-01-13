# favoriot-mqtt-nodejs-tutorial
tutorial to send data stream using mqtt protocol

# requirements: 
  nodejs v8 > above

# installation:
  npm install

# start:
  node app.js
  
# Topic:
mqtt publish : yourapikey + '/v2/streams'
mqtt subscribe : yourapikey + '/v2/streams/status'
  
# In this code, you need to change TWO things:
 *    1. Your 'API key' (can be obtained from the account setting in favoriot platform) or use 'Access Token' (can be obtained from devices in favoriot platform)
 *    2. Your device developer ID (can be obtained from devices in favoriot platform)
 
 # how to get access token
 https://platform.favoriot.com/tutorial/v2/#device-access-token
 
