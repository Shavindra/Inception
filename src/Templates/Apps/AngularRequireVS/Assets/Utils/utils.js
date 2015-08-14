// Configs


(function (requirejs) {
    
    define('utils', function () {

        // Allow creation of methods for SHOP modules
        window.UTILS = window.UTILS || {};
        
        var u = window.UTILS; 

        // http://www.kenneth-truyers.net/2013/04/27/javascript-namespaces-and-modules/
        u.createNS = function (namespaces) {
            for (var i = 0; i < namespaces.length; i++) {
                
                var nsparts = namespaces[i].split(".");
                var parent = u;
                
                // we want to be able to include or exclude the root namespace so we strip
                // it if it's in the namespace
                if (nsparts[0] === "UTILS" || nsparts[0] === "U" || nsparts === "U" || nsparts[0] === "u" || nsparts === "u") {
                    nsparts = nsparts.slice(1);
                }
                
                // loop through the parts and create a nested namespace if necessary
                for (var i = 0; i < nsparts.length; i++) {
                    var partname = nsparts[i];
                    // check if the current parent already has the namespace declared
                    // if it isn't, then create it
                    if (typeof parent[partname] === "undefined") {
                        parent[partname] = {};
                    }
                    // get a reference to the deepest element in the hierarchy so far
                    parent = parent[partname];
                }
                // the parent is now constructed with empty namespaces and can be used.
                // we return the outermost namespace
                return parent;
            };

        };
  
        u.createNS(['timeStamp'])
        
        u.timeStamp = function () {
            var time = new Date();
            d = time.getDate() + '-' + time.getMonth() + 1 + '-' + time.getFullYear() + ' ' + time.getHours() + ':' + time.getMinutes(); +':' + time.getSeconds();
            
            return d;

        }

        return u;
    });

})(requirejs);

