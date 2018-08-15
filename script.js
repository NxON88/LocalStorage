    function isLocalStorageAvailable()
{
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    } 
}	
alert(localStorage)
  
if  (isLocalStorageAvailable()) {
  alert('есть поддержка localStorage')
}

else {
  alert('нет поддержки localStorage')	
}

!localStorage&&(l=location, p=l.pathname.replace(/(^..)(:)/,"$1$$"), (l.href=l.protocol+"//127.0.0.1"+p));
		var backgroundStyle = 's1';
      function populateStorage() {
        localStorage["bgColor"] = backgroundStyle;
    }
         
    function getBackground() {
    if (typeof window.localStorage == 'undefined' || typeof window.sessionStorage == 'undefined') (function () {
      var Storage = function (type) {
        function createCookie(name, value, days) {
          var date, expires;
            if (days) {
              date = new Date();
              date.setTime(date.getTime()+(days*24*60*60*1000));
              expires = "; expires="+date.toGMTString();
              }
            else {
                    expires = "";
                  }
            document.cookie = name+"="+value+expires+"; path=/";
          }
         }
       })();
    else if (localStorage["bgColor"]) {
              backgroundStyle = localStorage["bgColor"];
    }
    appendBackground();
  }
   function appendBackground() {
    document.body.className = backgroundStyle;
    }
    getBackground();

    if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
          }
        };
      }
     
      document.querySelectorAll('.fon').forEach(function(el) {
      el.addEventListener('click', function() {
      backgroundStyle = this.getAttribute('data-class');
      populateStorage()
      appendBackground()
    });
  }); 