angular.module('telldusGUI')
 .controller('mainController', ['$scope','SensorsService',function($scope,SensorsService) {
      $scope.sensors = null;
      SensorsService.getSensors().then(function(response){
          $scope.sensors=response.data;
      })
      function processData(data){
          for(var i in data){
              data[i].date = new Date(data[i].date);
          }
      }
      $scope.openSensor = function(sensor_id){
        SensorsService.getSensorById(sensor_id).then(
          function(response){
            $scope.sensor = response.data;
            SensorsService.getSensorHistoryById(sensor_id).then(function(response){
                console.log(response.data[0].data);
                $scope.sensor.history = (response.data[0].data);
            });
          });       
      }
  }]);