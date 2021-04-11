// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)



$(function() {
 $('#form').submit(function (event) {
              var formData = $('#form').serialize();
              $.ajax({
                url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSefiWrmnKtuVPNLERD_axHCs3DnlOqavVYZVEaHm7YtGkg-XA/formResponse",
                data: formData,
                type: "POST",
                dataType: "xml",
                statusCode: {
                  0: function () {
                    $(".end-message").slideDown();
                    $(".submit-btn").fadeOut();
                    //window.location.href = "thanks.html";
                  },
                  200: function () {
                    $(".false-message").slideDown();
                  }
                }
              });
              event.preventDefault();
            });
  
            //AOS.jsの設定
       AOS.init()

}