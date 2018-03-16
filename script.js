$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  window.onload = function() {
         var loaded = document.getElementsByTagName("body")[0];
         loaded.className = "loaded";
  };

  setTimeout(function() {
    $('body').addClass('loaded');
    $(document).scrollTop(0);
  });

  window.onscroll = function() {scroll()};

  function scroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("bar").style.width = scrolled + "%";
  }

  $('#submit').click(function() {
      console.log('test');
      $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
          'key': '8_sX6DuhJEqaew93QH6nnQ',
          'message': {
            'from_email': 'zaozaostan@gmail.com',
            'to': [
                {
                  'email': 'microfinanceife@gmail.com',
                  'type': 'to'
                }
              ],
            'autotext': 'true',
            'subject': 'test',
            'html':'test message'
          }
        }
       }).done(function(response) {
         console.log(response); // if you're into that sorta thing
       });
  });
});
