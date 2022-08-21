var app = angular.module('myApp', []);
app.controller('myController', function ($scope) {
    $scope.message = 'これがJavascriptから渡された値です'
    $scope.message2 = '複数送れるのかな？'
})
