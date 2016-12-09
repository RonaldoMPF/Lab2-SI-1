 angular.module('ToDo', []).
 controller('todoController', ['$scope', function($scope) {
     $scope.todos = [{
         'title': 'Build a todo app',
         'done': false
     }];

     $scope.addTodo = function() {
         $scope.todos.push({
             'title': $scope.newTodo,
             'done': false
         })
         $scope.newTodo = ''
     };
     $scope.clearCompleted = function() {
         $scope.todos = $scope.todos.filter(function(item) {
             return !item.done
         })

     };

     $scope.clearAll() = function() {
         $scope.todos = [];
     };

     $scope.todosCompleted = function() {
         var count = 0;
         for (i = $scope.todos.length - 1; i >= 0; i--) {
             if ($scope.todos[i].done) {
                 count++;
             }
         }
         return count;
     };

     $scope.completedPerCent = function() {
         return (100 * ($scope.todosCompleted() / $scope.todos.length)).toFixed(1);
     };


 }])