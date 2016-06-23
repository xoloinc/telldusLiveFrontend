'use strict';
var app = angular.module('telldusGUI')

app.service('SensorsService', ['$http','CONFIG',function($http,CONFIG){
  var getServerPath = function(){
    return CONFIG.server.url+((CONFIG.server.port)?(":"+CONFIG.server.port):(""))+((CONFIG.server.endPoint)?(CONFIG.server.endPoint):(""));
  }
  var get = function(path){
    return $http({
      method: 'GET',
      url: getServerPath()+path
    });
  }
   var getSensors = function(){
      return get("/sensors");
   } 
   var getSensorById = function(sensor_id){
      return get("/sensors/"+sensor_id);
   } 
   var getSensorHistoryById = function(sensor_id){
      return get("/sensors/"+sensor_id+"/history");
   } 
   return {
     getSensors: getSensors,
     getSensorById: getSensorById,
     getSensorHistoryById: getSensorHistoryById
   }
}]);