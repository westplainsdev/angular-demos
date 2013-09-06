"use strict";
/* Controllers */

angular.module("myApp").controller("MyCtrl1", ["$scope", "$http",
    function ($scope, $http) {
        $scope.messageText = "Good Morning Dave";
        $scope.isView1 = false;
        $scope.load = function () {
            $http.get("json/pages.json").success(function (data) {
                $scope.pages = data;
            });
        };

        $scope.load();
    }
]);

angular.module("myApp").controller("markdownCtrl", ["$scope", "$http",
    function($scope, $http){
        $scope.load = function () {
             $http.get("markdown/content.md").success(function (data) {
                $scope.content = data;
            });
        };
        
        $scope.load();
        
    }
]);

angular.module("myApp").controller("MyCtrl2", ["$scope", "$http",
    function ($scope, $http) {
        $scope.messageText = "Good Afternoon Dave";
        $scope.isView2 = false;
        $scope.load = function () {
            $http.get("json/data.json").success(function (data) {
                $scope.users = data;
            });
        };

        $scope.load();
    }
]);

angular.module("myApp").controller("MyCtrl3", ["$scope", "$http",
    function ($scope, $http) {
        $scope.messageText = "Good Evening Dave";
        $scope.isView3 = false;
        $http.get("json/data.json").success(function (data) {
            $scope.users = data;
        });

        $scope.myHeaders = [{ field: 'id', displayName: ' ' },
                            { field: 'firstName', displayName: 'First Name' },
                            { field: 'lastName', displayName: 'Last Name' },
                            { field: 'username', displayName: 'Username'}];

        $scope.gridOptions = { data: 'users',
        columnDefs: 'myHeaders'
        };
    }
]);

    angular.module("myApp").controller("stackapp", ["$scope", "$http",
    function ($scope, $http) {
        $scope.isStack = false;
        $scope.model = null;
        $scope.load = function () {
            $http.get("https://api.stackexchange.com/2.0/info?site=stackoverflow").success(function (data) {
                $scope.model = data.items[0];
            });
        };

        $scope.load();
    }
]);

angular.module("myApp").controller("details", ["$scope", "$http", "$routeParams",
    function ($scope, $http, $params) {
        $scope.users = [];
        $scope.user = null;
        $scope.cities = [];

        $scope.load = function () {
            $http.get("json/data.json").success(function (data) {
                $scope.users = data;
                $scope.user = _.find($scope.users, { 'id': $params.id });
                $scope.cities = $scope.user.cities;
            });
        };

        $scope.modal = {
            open: function () {
                $scope.shouldBeOpen = true;
            },
            close: function () {
                $scope.shouldBeOpen = false;
            }
        };

        $scope.load();
    }
]);

angular.module("myApp").controller("paging", ["$scope",
    function ($scope) {
      
        $scope.currentPage = 0;
        $scope.pageSize = 10;
        $scope.data = [];
        $scope.numberOfPages = function() {
            return Math.ceil($scope.data.length / $scope.pageSize);
        };
        for (var i = 0; i < 45; i++) {
            $scope.data.push("Item " + i);
        }
    } ]);

angular.module("myApp").controller("CartController", ["$scope",
    function ($scope) {
        $scope.invoice = {
            items: [{
                qty: 10,
                description: 'item',
                cost: 9.95
            }]
        };

        $scope.addItem = function() {
            $scope.invoice.items.push({
                qty: 1,
                description: '',
                cost: 0
            });
        },
        $scope.removeItem = function(index) {
            $scope.invoice.items.splice(index, 1);
        },
        $scope.total = function() {
            var total = 0;
            angular.forEach($scope.invoice.items, function(item) {
                total += item.qty * item.cost;
            });

            return total;
        };
    } ]);

    angular.module("myApp").controller("TodoController", ["$scope",
        function ($scope) {
            $scope.isTodo = false;
            $scope.comments = [
                { author: "Mac Brown",
                    text: "This is some comment text"
                },
                { author: "Freddie Faye",
                    text: "This is wicked cool comment text"
                }
            ];

            $scope.post = function () {
                if ($scope.author && $scope.text) {
                    $scope.comments.push({ author: $scope.author, text: $scope.text });
                    $scope.author = '';
                    $scope.text = '';
                }
            };
        } ]);

    angular.module("myApp").controller("PeopleController", ["$scope",
        function ($scope) {
            var User = function (username, password, displayName, email) {
                this.username = username == undefined ? "" : username;
                this.password = password == undefined ? "" : password;
                this.displayName = displayName == undefined ? "" : displayName;
                this.email = email == undefined ? "" : email;
            };
            
            $scope.tempUser = new User();
            $scope.users = [];
            $scope.users.push(new User("admin", "admin123", "Administrator", "admin@gmail.com"));
            $scope.users.push(new User("jason", "jason123xx$s", "Jason Trueman", "jason@gmail.com"));
            $scope.users.push(new User("Jack", "jj@ck", "Jack.R.Bot", "jack.r.bot@imail.com"));

            $scope.addUser = function() {
                $scope.users.push($scope.tempUser);
                $scope.tempUser = new User();
            };

            var editingUser = null;
            $scope.editUser = function(user) {
                var index = $scope.users.indexOf(user);
                var $tr = $(".data tbody").children().eq(index);
                $tr.addClass("editing");
                editingUser = user.clone();
            };

            $scope.updateUser = function(user) {
                var index = $scope.users.indexOf(user);
                var $tr = $(".data tbody").children().eq(index);
                $tr.removeClass("editing");
            };

            $scope.cancelEdit = function(user) {
                var index = $scope.users.indexOf(user);
                var $tr = $(".data tbody").children().eq(index);
                $tr.removeClass("editing");
                user.updateFrom(editingUser);
            };

            $scope.deleteUser = function(user) {
                var index = $scope.users.indexOf(user);
                $scope.users.splice(index, 1);
            };
        }]);
        
angular.module("myApp").controller("chartCtrl", ["$scope","$http",
    function ($scope) {
      $scope.chart = [
    	{
			labels : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			datasets : [
				{
					fillColor : "rgba(151,187,205,0)",
					strokeColor : "#e67e22",
					pointColor : "rgba(151,187,205,0)",
					pointStrokeColor : "#e67e22",
					data : [4, 3, 5, 4, 6]
				},
				{
					fillColor : "rgba(151,187,205,0)",
					strokeColor : "#f1c40f",
					pointColor : "rgba(151,187,205,0)",
					pointStrokeColor : "#f1c40f",
					data : [8, 3, 2, 5, 4]
				}
			], 
		}, {
			labels : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			datasets : [
				{
					fillColor : "#f1c40f",
					strokeColor : "#f1c40f",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					data : [7,3,4,6,7]
				},
				{
					fillColor : "#FF0000",
					strokeColor : "#e67e22",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					data : [0,3,4,6,1]
				}
			], 
		}, {
			labels : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			datasets : [
				{
					fillColor : "#f1c40f",
					strokeColor : "#f1c40f",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					data : [7,3,4,6,7]
				},
				{
					fillColor : "#FF0000",
					strokeColor : "#e67e22",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					data : [0,3,4,6,1]
				}
			], 
		}, [
			{
					value : 30,
					color: "#D97041"
				},
				{
					value : 90,
					color: "#C7604C"
				},
				{
					value : 24,
					color: "#21323D"
				},
				{
					value : 58,
					color: "#9D9B7F"
				},
				{
					value : 82,
					color: "#7D4F6D"
				},
				{
					value : 8,
					color: "#584A5E"
			}
		]
	];
	
	$scope.options = { 

		segmentShowStroke : false
	};
      
    } ]);    
    
angular.module("myApp").controller("contactsCtrl", ["$scope", "$http",
    function ($scope, $http) {
       $scope.contacts = [
        { id:0, 'name': 'Viral', 
          'email':'hello@gmail.com', 
          'phone': '123-2343-44'
        }
    ];
    }
]);

angular.module("myApp").controller('randomCtrl', ['$scope', '$http', 
    function ($scope, $http) {
      $scope.greeting = 'Hola! Here be Random Users.';
      $scope.credit = "Credits: http://randomuser.me/";

      $scope.users = [];

      $scope.load = function () {
          $http.get('http://randomuser.me/g/?results=5').success(function (data) {

              for (var i = 0; i < data.results.length; i++) {
                  $scope.users.push(data.results[i].user);
              }

          }).error(function (data) {
              $scope.error = 'something bad happened';
          });
      };

      $scope.load();

  } ]);

