var app = {
    initialize: function() {
      this.bindEvents();
    },
    bindEvents: function() {
      document.getElementById('panicbtn').addEventListener('click', this.sendSms, false);
    },
    sendSms: function() {

      var number = "+441982421043";
      var message = "Hello from android";
      var options = {
          replaceLineBreaks: false, // true to replace \n by a new line, false by default
          android: {
              intent: '' // send SMS without open any other app
          }
      };
      var success = function () { document.getElementById('panicmsg').innerHTML = 'Panic sent successfully'; };
      var error = function (e) { document.getElementById('panicmsg').innerHTML = 'Panic Failed:' + e; };
      sms.send(number, message, options, success, error);
      document.getElementById('panicmsg').setAttribute('style', 'display');
    }
};

app.initialize();
