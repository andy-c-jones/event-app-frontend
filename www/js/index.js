var number = "+441793250159";
var options = {
  replaceLineBreaks: false, // true to replace \n by a new line, false by default
    android: {
      intent: '' // send SMS without open any other app
    }
};

var app = {
    initialize: function() {
      this.bindEvents();
    },
    bindEvents: function() {
      document.getElementById('panicbtn').addEventListener('click', this.sendSms, false);
      document.getElementById('register').addEventListener('click', this.register, false);
    },
    register: function() {
      var regMessage = "{'event': 'register','name': '" + document.getElementById('name').value + "', 'nok': '" + document.getElementById('nok').value + "', 'nokphone': '" + document.getElementById('nokphone').value + "'}";
      var success = function () {
        document.getElementById('register-form').setAttribute("hidden", true);
        document.getElementById('panic-form').removeAttribute("hidden");
      };
      sms.send(number, regMessage, options, success, success);
    },
    sendSms: function() {
      var gpsSuccess = function(position) {
        var message = "{'event': 'panic','long': '" + -5.003508 + "', 'lat': '" + 56.79685 + "'}";
        var success = function () { document.getElementById('panicmsg').innerHTML = 'Panic sent successfully'; };
        var error = function (e) { document.getElementById('panicmsg').innerHTML = 'Panic Failed:' + e; };
        sms.send(number, message, options, success, error);
      };

      var gpsFail = function (e) {
        document.getElementById('panicmsg').innerHTML = 'Panic Failed:' + e;
      };

      var gpsOptions = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      navigator.geolocation.getCurrentPosition(gpsSuccess, gpsFail, gpsOptions);

      document.getElementById('panicmsg').setAttribute('style', 'display');
    }
};

app.initialize();
