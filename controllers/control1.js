
angular.module('demoApp').controller('DemoController', function($scope, livresFact) {

    $scope.livres = livresFact.getLivres();
    
    $scope.livre_selection = $scope.livres[0];

    $scope.addLivre=function(livre){
    	livresFact.addLivre(livre);
    };

    $scope.supprLivre=function(livre){
    	livresFact.supprLivre(livre);
    };

 });