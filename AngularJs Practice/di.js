 var app = angular.module("modulename",[]);

		  app.controller("ctrlr", ["$rootScope","$scope", function($scope,$rootScope)

		  {

		  	$rootScope.school = {"schoolname":"vit"};

		  	$scope.teacher = {"teacherid":101,"teachername":"ram"};
		  	$scope.student = {"studendid":152,"studentmarks":520};


		  }]); 



		  app.controller("ctrlr2", ["$rootScope","$scope", function($scope,$rootScope)

		  {

		  	$rootScope.school = {"schoolname":"iit"};

		  	$scope.teacher1 = {"teacherid":102,"teachername":"lakshman"};
		  	$scope.student1 = {"studendid":153,"studentmarks":510};


		  }]); 

