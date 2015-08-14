(function (angular, app) {
    'use strict';
    app.directive('includeReplace', function () {
        return {
            require: 'ngInclude',
            restrict: 'A',
            /* optional */
            scope: true,
            link: function (scope, el, attrs) {
                el.replaceWith(el.children());
            }

        };
    });


})(angular, BEADLE);