var app = {
    initialize: function() {
      this.bindEvents();
    },
    bindEvents: function() {
        document.getElementById('panicbtn').addEventListener('click', this.receivedEvent, false);
    },
    receivedEvent: function() {
     document.getElementById('panicmsg').setAttribute('style', 'display');
 }
};

app.initialize();
