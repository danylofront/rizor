$('.button').click(function(){
    $('.alert').addClass("show");
    $('.alert').removeClass("hide");
    $('.alert').addClass("showAlert");
    setTimeout(function(){
      $('.alert').removeClass("show");
      $('.alert').addClass("hide");
    },5000);
  });
  $('.close-btn').click(function(){
    $('.alert').removeClass("show");
    $('.alert').addClass("hide");
  });


  function show(state)
  {
  document.getElementById('window').style.display = state;	
  document.getElementById('gray').style.display = state; 		
  }	