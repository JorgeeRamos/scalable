var app = angular.module('myMessenger', ['ui.router', 'ngResource']);

app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('chat',{
        url:'/chat',
        templateUrl:'views/chat.html',
        controller:'chatCtrl'
    });

    $urlRouterProvider.otherwise('/chat');

});

//////////********Services***********/////////
app.factory('Messages', function($resource){
    return $resource('/messages/:id', {});        
});

//////////********Controllers***********/////////
app.controller('chatCtrl', 
    function($scope, Messages){
     //Array of all messages
     $scope.messages = [];

     //Get all messages from the server
     Messages.query({}, function(data){
            $scope.messages = data;
         });
     

    //Function to add new messages
    $scope.add_new_message = function(){
        //Add new message to list of existing messages
        var message = {
            sender: 'Bob',
            body: $scope.new_message,
        };
        Messages.save(message, function(data){
            $scope.messages.push(data);
            //Clear existing message
            $scope.new_message = null;
        })
    }

});

