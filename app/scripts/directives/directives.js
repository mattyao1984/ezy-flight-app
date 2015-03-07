'use strict';

angular.module('directives', [])
.directive('removeToggle', function(){
	return{
		restrict: 'A',
		scope: false,
		link: function(scope, element, attrs) {
			var toggleRemoveBtn = function(){
				if(!$(this).next('.remove-btn').is(':visible')){
					$('.remove-btn').removeClass('show');
					$(this).next('.remove-btn').addClass('show');
				}else{
					$(this).next('.remove-btn').removeClass('show');
				}
			};

			element.on('click', toggleRemoveBtn);
    }
	};
});
