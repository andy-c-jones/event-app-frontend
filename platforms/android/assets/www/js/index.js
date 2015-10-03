var app = {
    initialize: function() {
      this.bindEvents();
    },

    bindEvents: function() {
        //document.getElementById('panicbtn').addEventListener('touchend', this.receivedEvent, false);
        //document.getElementById('panicbtn').addEventListener('touchstart', this.receivedEvent, false);
        document.getElementById('panicbtn').addEventListener('click', this.receivedEvent, false);
        //document.addEventListener('deviceready', this.receivedEvent, false);
    },

    receivedEvent: function() {
     document.getElementById('panicmsg').setAttribute('style', 'display:none;');
 }
};



app.initialize();
