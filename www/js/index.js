var app = {
    number: "+441793250159",
    options: {
      replaceLineBreaks: false, // true to replace \n by a new line, false by default
        android: {
          intent: '' // send SMS without open any other app
        }
    },
    initialize: function() {
      this.bindEvents();
    },
    bindEvents: function() {
      document.getElementById('panicbtn').addEventListener('click', this.sendSms, false);
      document.getElementById('register').addEventListener('click', this.register, false);
    },
    sendSms: function() {
      var gpsSuccess = function(position) {
        var message = "{'event': 'panic','long': '" + position.coords.longitude + "', 'lat': '" + position.coords.latitude + "'}";
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
    },
    register: function() {
      var regMessage = "{'event': 'register','name': '" + document.getElementById('name').value + "', 'nok': '" + document.getElementById('nok').value + "'}";
      var regSuccess = function () {
        document.getElementById('regmsg').innerHTML = 'Successfully registered';
        document.getElementById('register-form').setAttribute('hidden');
        document.getElementById('panic-form').removeAttribute("hidden");
      };
      var regError = function (e) { document.getElementById('regmsg').innerHTML = 'Registration failed:' + e; };

      sms.send(number, regMessage, options, regSuccess, regError);
    }
};

app.initialize();
