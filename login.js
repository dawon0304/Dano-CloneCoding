// var search = document.querySelector('.loginbtn');
// var loginForm = document.querySelector('.login-white');

// loginform 나타내기
$('.fa-circle-user').on('click', function(){
  $('.login').css('display','block');
  $('.header').css('display','none');
})
  

// close-btn 누르면 login-form 사라지기
$('.fa-xmark').on('click', function(){
  $('.login').css('display','none');
  $('.header').css('display','block');
})

// tab click
// 첫번째 tab누르면 active생기기
// var Tab = $('.nav-item');
// Tab.eq(0).on('click', function(){
//   $('.nav-link').removeClass('active');
//   $('.nav-link').eq(0).addClass('active');
// })

for (let i =0; i< $('.nav-item').length; i++){
  var Tab = $('.nav-item');
  Tab.eq(i).on('click', function(){
  $('.nav-link').removeClass('active');
  $('.nav-link').eq(i).addClass('active');
})
}

// new__bottom container
var product = [
  {id: 0, price:2300, title: '브라운 라이스소울 녹차초코'},
  {id: 0, price:7000, title: '바나나맛우유'}
]

document.querySelectorAll('.new__bottom h4')[0].innerHTML = product[0].title;
document.querySelectorAll('.new__bottom p')[0].innerHTML = product[0].price + '원';