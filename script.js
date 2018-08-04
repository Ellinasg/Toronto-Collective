
$(document).ready(function(){
 var search = $('#search-area');
 var searchInput = $('.searchbox-input');
 var searchBox = $('.searchbox');
 var isOpen = false;
  

 // $(search).on('click', '.fa-search', function(){
 // searchInput.slideToggle('fast');


 // });
 

});

// mobile menu

//     var x = document.getElementById(".main-menu");
//     if (x.className === ".main-menu") {
//         x.className += " responsive";
//     } else {
//         x.className = ".main-menu";
//     }
// }




// ************LOGIN FORM**********************
// Hide video after its done replace with img
// var video = $('#bg')


// ************Video Mute*********************

var loginBox = $('.login-form');
var username = $('#username').val();
var password = $('#password').val();
var correct = $(username) > 4 && $(password) > 5

$('#login').click (function(){
loginBox.toggle('slow');
});

$("#login2").click (function(){

if ($("#username").val() == ""){
	$(".input").addClass("error-lgn");
	$("#username").css({"border":"2px solid red"});
}
else if ($('#username').val().length < 5){
	$(".error-msg1").show();}


else if ($('#username').val().length > 5)
	$(".error-msg1").hide();


 if ($("#password").val() == ""){
	$(".pass").addClass("error-lgn");
	$("#password").css({"border":"2px solid red"});

}
else if ($('#password').val().length <= 5) {
	$(".error-msg").show();
}

else if ($('#password').val().length >= 5)
	$(".error-msg").hide();

	})

$(".input").click (function(){
	$(".input").removeClass(".error-lgn");
	$("#username").css({"border":"2px solid #ddd"});
	$("#password").css({"border":"2px solid #ddd"});
})

$("#login2").click(function(){

if($("#username").val().length > 5 && $("#password").val().length > 5){
$(loginBox).hide(860);};


	});











// ***********Contact Form****************



$(".section2 .btn").click(function(){

	$(".section2 p").hide();

 var name = $(".name").val().length;
var email = $(".email").val().toLowerCase().length;
var phone = $(".phone").val().length;
var message = $("textarea").val().length;

 if (name  == ""){
 	$("#name-empty").show();

 }else if (name < 2){
 	$("#name-invalid").show();
 };





		if(email == ""){
			$(".email-empty").show();
		}else if (email < 5){
			$(".email-invalid").show();
		}


				if (phone == ""){
				 	$(".phone-empty").show();

				 }else if (phone < 10){
				 	$(".phone-invalid").show();
				 };

				 if (message == ""){
				 	$(".message-empty").show();
				 }else if (message < 5){
				 	$(".message-invalid").show();
				 };




 if(name > 2 && email > 5 && phone > 10 && message > 5)
	$(".para").slideUp(860) && $("#success").show();	

});

				// Contact form end