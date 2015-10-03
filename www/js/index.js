var app = {
    initialize: function() {
      this.bindEvents();
    },
    bindEvents: function() {
      document.getElementById('panicbtn').addEventListener('click', this.sendSms, false);
    },
    sendSms: function() {
      var gpsSuccess = function(position) {
        var number = "+441982421043";
        var message = "{'event': 'panic','long': '" + position.coords.longitude + "', 'lat': '" + position.coords.latitude + "'}";
        var options = {
        replaceLineBreaks: false, // true to replace \n by a new line, false by default
          android: {
            intent: '' // send SMS without open any other app
          }
        };
        var success = function () { document.getElementById('panicmsg').innerHTML = 'Panic sent successfully'; };
        var error = function (e) { document.getElementById('panicmsg').innerHTML = 'Panic Failed:' + e; };
        sms.send(number, message, options, success, error);
      };

      var gpsFail = function (e) {
        document.getElementById('panicmsg').innerHTML = 'Panic Failed:' + e;
      };

      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      navigator.geolocation.getCurrentPosition(gpsSuccess, gpsFail, options);

      document.getElementById('panicmsg').setAttribute('style', 'display');
    }
};

app.initialize();
