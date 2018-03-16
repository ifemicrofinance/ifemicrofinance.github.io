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
  });$(document).ready(function(){
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

  $('#contact-form').submit(function(e) {
      var name = document.getElementById('name')
      var email = document.getElementById('email')
      var message = document.getElementById('message')

      $.ajax({         
          method: 'POST',
          url: '//formspree.io/microfinanceife@gmail.com',
          data: $('#contact-form').serialize(),
          datatype: 'json'
      });
      e.preventDefault();
      $(this).get(0).reset();
  });
});
