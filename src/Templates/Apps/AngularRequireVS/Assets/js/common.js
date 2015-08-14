(function (requirejs) {
    var appBaseURl = 'app/',
        assetsBaseURL = 'assets/',
        utilsBaseURL = 'assets/utils/';
        vendorBaseURL = 'assets/vendor/'
    
    requirejs.config({
        baseUrl: '',
        paths: {
            utils : utilsBaseURL + "utils",
            utils_currency : utilsBaseURL + "utils.currency",
            utils_countries : utilsBaseURL + "utils.countries",
            utils_i18n : utilsBaseURL + "utils.i18n",
            utils_localStorage : utilsBaseURL + "utils.localStorage",
            angular: vendorBaseURL + "angular/angular-1.4.1/angular",
            angular_route: vendorBaseURL + "angular/angular-1.4.1/angular-route",
            app: appBaseURl + "app",
            app_routes: appBaseURl + "app.routes",
            app_directives: appBaseURl  + "app.directives",
            app_modules: appBaseURl + "app.module"
        },  

        shim: {
            angular: { exports : 'angular' },
            app : {
               deps: ['angular', 'app_routes']
            },
            app_routes : {
                deps: ['angular_route']
            },
            'angular_route': ['angular'],
            
        },
    
    });
    
    //Inject Utils functions
    require(['utils', 'app'], function () {
        angular.bootstrap(document, ['BEADLE']);
        require(['utils_currency', 'utils_countries', 'utils_i18n', 'utils_localStorage']);
        
    });

    //Inject the app stuff
    require(['app'], function () {
        
    });

})(requirejs);