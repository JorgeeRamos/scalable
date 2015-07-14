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
     $scope.messages = [
        {sender: 'Alice', body:'Hello, how are you?', side:'left'},
        {sender: 'Bob', body:'I am fine, how are you?', side: 'right'},
        {sender: 'Alice', body:'Never been better', side: 'left'}
      ];

    //Function to add new messages
    $scope.add_new_message = function(){
        //Add new message to list of existing messages
        $scope.messages.push({
                sender: 'Bob',
                body: $scope.new_message,
                side:'right'
            });
        //Clear existing message
        $scope.new_message = null;
    }

});

