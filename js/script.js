// alert("hello");

//video playback

$(document).ready(function(){
  
  var vid = $('video');
  var vid_w_orig = 1280;
	var vid_h_orig = 720;

  // re-scale image when viewport resizes
	$(window).resize(function(){
    
		// get the parent element size
		var container_w = vid.parent().width();
		var container_h = vid.parent().height();
    
		// use largest scale factor of horizontal/vertical
		var scale_w = container_w / vid_w_orig;
		var scale_h = container_h / vid_h_orig;
		var scale = scale_w > scale_h ? scale_w : scale_h;
    
		// scale the video
		vid.width(scale * vid_w_orig);
		vid.height(scale * vid_h_orig);
    
	});
  
  // trigger re-scale on pageload
	$(window).trigger('resize');
  
});


//sign-in form
var signInButton = document.getElementById("sign-in_button");
var signInForm = document.getElementsByClassName("signin-form")[0];
signInButton.addEventListener("click", function(){
    signInForm.style.display = "block";
});

var signInFormButton = document.getElementsByClassName("signin-form__button")[0];
var signInField = document.getElementById("signin-field");
var passwordField = document.getElementById("password-field");
signInFormButton.addEventListener("click", function(){
  if (signInField.value === "sasha" && passwordField.value == 12345) {
    alert("hello, Sasha");
  } else {
    alert('you are '+ signInField.value);
  }


  console.log(signInField);
});



console.log(signInField);
