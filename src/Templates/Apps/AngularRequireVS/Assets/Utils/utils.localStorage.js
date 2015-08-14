(function (u) {

   u.createNS(['Data.saveToLocalStorage', 'Data.getFromLocalStorage']);


    u.Data.saveToLocalStorage = function (key, obj) {

        var obj = {
            timeStamp: SU.timeStamp(),
            data: obj
        }
        window.localStorage.setItem(key, JSON.stringify(obj));
        //TEST
        console.log('saved to local storage', key, obj);

    }

    u.Data.getFromLocalStorage = function (key) {
        //TEST
        console.log('retrieved from localStorage', localStorage.getItem(key));

        return JSON.parse(window.localStorage.getItem(key));
    }

})(UTILS);