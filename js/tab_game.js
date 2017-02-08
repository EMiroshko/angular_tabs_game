(function() {

	var app = angular.module("tabGame", []);
	angular.module("myStore", []);
	app.controller("TabController", function($scope) {
		
		var tabStart = this,
			cardOpened = 0,
			checkAction = false;

	    tabStart.tabs= createTabs(10);
	    tabStart.example = function(tab) {
	    	if (checkAction) return;
			$('#tab-'+tab.id).removeClass('closed').addClass('opened');
			checkAction = true;
			setTimeout(function () {
			    if (cardOpened) {
			    	// debugger;
		    		if (cardOpened === tab.value) {
						checkGameEnd();
		    		} else {
		    			$('.opened').removeClass('opened').addClass('closed');
		    		}
		    		cardOpened = 0;
		    	} else {
			      	cardOpened = tab.value;
		  		}
		  		checkAction = false;
			}, 300);
	    };

	    function checkGameEnd() {
	    	if ($('.closed').length < 1) {
	    		alert('end');
	    	}
	    }

		function createTabs(tabs) {
			var tabArray = [],
				id = 1;
			for (var i = 0; i <(tabs/2); i++){		
				tabArray.push(i+1, i+1);				
			}

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

