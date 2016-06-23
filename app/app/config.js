"user strict"
var app = angular.module('telldusGUI');

app.factory("CONFIG",function(){
    return {
        server:{
            url: "http://localhost",
            port: "3200",
            endPoint: '/api'
        }
    };
});