import $ from "jquery";
import animateScrollTo from "animated-scroll-to";
setTimeout(() => {
  const carousel = document.querySelector('.carousel-inner');
  if (carousel && carousel.firstElementChild) {
    carousel.firstElementChild.className = 'carousel-item active'
  }
}, 200)


function upcoming() {
  let upcoming = document.getElementById("upcoming-events");
  animateScrollTo(upcoming,{minDuration: 3000});
}

function passed() {
  let passed = document.getElementById("passed-events");
  animateScrollTo(passed, {minDuration: 3000})
}

function go_up() {
  let header = document.querySelector(".header");
  animateScrollTo(header, {minDuration: 1000})
}

function mouseLeave() {
  $('.comments-popup').addClass('popup-comments-hide');
}

$(() => $('.events').on("mouseleave", () => mouseLeave()));
$(() => $("#up_coming").on("click", () => upcoming()));
$(() => $("#passed").on("click", () => passed()));
$(() => $(".arrow_up").on("click", () => go_up()));
$(() => $(".popup__close").on('click', () => fadeOut()))
$(() => $(".arrow").on("click" ,function(){
  $('html, body').animate({scrollTop: 950}, 600);
}));

function fadeOut() {
  $("#popup").addClass("popup-hide");
}

if ($('.invite-people-item').length) {
  $(() => $('.invite-people-item').bind("ajax:beforeSend", function(){
  }).bind("ajax:success", function(event){
    if (event.originalEvent.detail[0].data) {
      let div = document.createElement('div');
      let span = document.createElement('span');
      span.classList.add('invite');
      span.innerText = event.originalEvent.detail[0].data[0][1]
      div.classList.add('message')
      div.classList.add(event.originalEvent.detail[0].data[0][0])
      div.appendChild(span);
      let form = document.querySelector('.popup__right');
      form.insertBefore(div,document.querySelector('.show_event'))
    
      setTimeout(() => {
        document.querySelector('.message').style.display = 'none'
      }, 6000)
    }
  }).bind('ajax:complete', function(){
  }).bind("ajax:error", function(){
  })
  )
}

$(() => $('.comming_request').bind("ajax:beforeSend", function(){
}).bind("ajax:success", function(event){
  $('.content_custom_event').html(event.originalEvent.detail[0].html) 
}).bind('ajax:complete', function(){
}).bind("ajax:error", function(){
})
)

$(() => $('.passed_request').bind("ajax:beforeSend", function(){
}).bind("ajax:success", function(event){
  $('.content_custom_event').html(event.originalEvent.detail[0].html) 
}).bind('ajax:complete', function(){
}).bind("ajax:error", function(){
})
)

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 850) {
      $('.arrow_up').css({
        'display': 'block'
      });
    } else {
      $('.arrow_up').css({
        'display': 'none'
      });
    }
  })
})
