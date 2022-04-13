// var search = document.querySelector('.loginbtn');
// var loginForm = document.querySelector('.login-white');

// loginform 나타내기
$('.fa-user').on('click', function(){
  $('.login-white').css('display','block');
})
  

// close-btn 누르면 login-form 사라지기
$('.btn-close').on('click', function(){
  $('.login-white').css('display','none');
})

// tab click
// 첫번째 tab누르면 active생기기
var Tab = $('.nav-item');
Tab.eq(0).on('click', function(){
  $('.nav-link').removeClass('active');
  $('.nav-link').eq(0).addClass('active');
})





