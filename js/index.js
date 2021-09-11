/*Hamburger Menu*/
// $(".icons").on("click", function(){
//   $("#dropDown").slideToggle();
//   // $(".toggle").toggleClass('show hide');
// });

$( document ).ready(function() {

  $( "#cross" ).hide();
  $( "#dropDown" ).hide();
  $( "#hamburger" ).click(function() {
  $( "#dropDown" ).slideToggle( "slow", function() {
  $( "#hamburger" ).hide();
  $( "#cross" ).show();
  });
  });
  
  $( "#cross" ).click(function() {
  $( "#dropDown" ).slideToggle( "slow", function() {
  $( "#cross" ).hide();
  $( "#hamburger" ).show();
  });
  });
  
  });

/*skill1*/
$("#skill1").on("mouseenter", function(){
  $("#hero1").css("display","block")
});

$("#skill1").on("mouseleave", function(){
  $("#hero1").css("display","none")
});

$("#skill1").on("mouseenter", function(){
  $("#skill1").css("color","#ca5268")
});

$("#skill1").on("mouseleave", function(){
  $("#skill1").css("color","black")
});

/*skill2*/
$("#skill2").on("mouseenter", function(){
  $("#hero2").css("display","block")
});

$("#skill2").on("mouseleave", function(){
  $("#hero2").css("display","none")
});

$("#skill2").on("mouseenter", function(){
  $("#skill2").css("color","#ca5268")
});

$("#skill2").on("mouseleave", function(){
  $("#skill2").css("color","black")
});

/*skill3*/
$("#skill3").on("mouseenter", function(){
  $("#hero3").css("display","block")
});

$("#skill3").on("mouseleave", function(){
  $("#hero3").css("display","none")
});

$("#skill3").on("mouseenter", function(){
  $("#skill3").css("color","#ca5268")
});

$("#skill3").on("mouseleave", function(){
  $("#skill3").css("color","black")
});

/*skill4*/
$("#skill4").on("mouseenter", function(){
  $("#hero4").css("display","block")
});

$("#skill4").on("mouseleave", function(){
  $("#hero4").css("display","none")
});

$("#skill4").on("mouseenter", function(){
  $("#skill4").css("color","#ca5268")
});

$("#skill4").on("mouseleave", function(){
  $("#skill4").css("color","black")
});

/*drop down*/
$("#dropDownList0").on("mouseenter", function(){
  $("#dropDownList0").css("color","#ca5268")
});

$("#dropDownList0").on("mouseleave", function(){
  $("#dropDownList0").css("color","black")
});

$("#dropDownList1").on("mouseenter", function(){
  $("#dropDownList1").css("color","#ca5268")
});

$("#dropDownList1").on("mouseleave", function(){
  $("#dropDownList1").css("color","black")
});

$("#dropDownList2").on("mouseenter", function(){
  $("#dropDownList2").css("color","#ca5268")
});

$("#dropDownList2").on("mouseleave", function(){
  $("#dropDownList2").css("color","black")
});

$("#dropDownList3").on("mouseenter", function(){
  $("#dropDownList3").css("color","#ca5268")
});

$("#dropDownList3").on("mouseleave", function(){
  $("#dropDownList3").css("color","black")
});

// About me page

$("#ex0").on("mouseenter", function(){
  $("#profession").css("display","block")
});

$("#ex0").on("mouseleave", function(){
  $("#profession").css("display","none")
});

$("#ex1").on("mouseenter", function(){
  $("#experience").css("display","block")
});

$("#ex1").on("mouseleave", function(){
  $("#experience").css("display","none")
});

$("#ex2").on("mouseenter", function(){
  $("#hobby").css("display","block")
});

$("#ex2").on("mouseleave", function(){
  $("#hobby").css("display","none")
});

/*scroll*/
// $(document).ready(function () {
//   $('#dropDownList1').click(function() {
//   $('html, body').animate({
//     scrollTop: $("section.work").offset().top
//   }, 1000)
// }), 
// //   $('div.middle').click(function (){
// //     $('html, body').animate({
// //       scrollTop: $("div.bottom").offset().top
// //     }, 1000)
// //   }),

// $('#dropDownList1').click(function() {
//   $.scrollTo($('#project1'), 1000);
// });

$('.js-anchor-link').click(function(e){
  e.preventDefault();
  var target = $($(this).attr('href'));
  if(target.length){
    var scrollTo = target.offset().top;
    $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
  }
});

// <!-- Back to top button -->

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});