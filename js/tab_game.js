(function() {

	var app = angular.module("tabGame", []);
	angular.module("myStore", []);
	app.controller("TabController", function($scope) {
		var tabStart = this;
	    tabStart.tabs= createTabs(30);
	    tabStart.example = function(tab) {
	      $('#tab-'+tab.id).css("color", "red");
	    };

		function createTabs(tabs) {
			var tabArray = [],
				id = 1;
			for (var i = 0; i <(tabs/2); i++){		
				tabArray.push(i+1, i+1);				
			}
			console.log(tabArray);

			return shuffle(tabArray).map(function(tab) {
				return {
					value: tab,
					id: i++
				}
			});
		}


		function shuffle(array) {
		    let counter = array.length;

		    // While there are elements in the array
		    while (counter > 0) {
		        // Pick a random index
		        let index = Math.floor(Math.random() * counter);

		        // Decrease counter by 1
		        counter--;

		        // And swap the last element with it
		        let temp = array[counter];
		        array[counter] = array[index];
		        array[index] = temp;
		    }

		    return array;
		}

	});

})();

