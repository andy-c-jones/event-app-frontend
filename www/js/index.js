var app = {
    initialize: function() {
      this.bindEvents();
    },
    bindEvents: function() {
      document.getElementById('panicbtn').addEventListener('click', this.panic, false);
    },
    setFailureText: function (e) { document.getElementById('panicmsg').innerHTML = 'Panic Failed:' + e; },
    panic: function() {

      var sendSms = function(position) {
        var number = "+441982421043";
        var message = "{'event': 'panic','long': '" + position.coords.longitude + "', 'lat': '" + position.coords.latitude + "'}";
        var options = {
          replaceLineBreaks: false, // true to replace \n by a new line, false by default
          android: {
            intent: '' // send SMS without open any other app
          }
        };
        var success = function () { document.getElementById('panicmsg').innerHTML = 'Panic sent successfully'; };
        sms.send(number, message, options, success, setFailureText);
      };

      navigator.geolocation.getCurrentPosition(sendSms,
                                               setFailureText);

      document.getElementById('panicmsg').setAttribute('style', 'display');
    }
};

app.initialize();
