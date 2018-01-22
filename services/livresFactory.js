angular.module("demoApp").factory("livresFact", function(){
var livres = [
    {"titre":"Le Poète","auteur":"Mickael Connely","id":1},
    {"titre":"La mort est mon métier","auteur":"Robert Merle","id":2},
    {"titre":"Le livre de la jungle","auteur":"Rudyard Kipling","id":3}
    ];

 var getLivres = function(){
 	return livres;
 };
 var addLivre=function(livre){
    	livre=prepareLivre(livre);
    	livres.push({id:livre.id,titre:livre.titre,auteur:livre.auteur});
    	livre.titre="";
    	livre.auteur="";
    };
  function prepareLivre(livre){
    	livre.id=livres.length +1;
    	return livre;
    }

 return {
 	getLivres : getLivres 	,
 	addLivre : addLivre
  }

});