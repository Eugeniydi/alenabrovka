
// burger menu
$(document).ready(function(){
    var ww = document.body.clientWidth;

    $(".mnu-btn").on("click", function(){
        var el = $(this);
        if(el.hasClass('active')){
            el.removeClass("active");
            $('.menu').addClass("active");
        }else{
            $(".mnu-btn").removeClass("active");
            el.addClass("active");
            $('.menu').slideDown(300);
        }
        if($(".menu").hasClass('active')){
            $(".menu").removeClass('active')
        } else {
            $(".menu").addClass('active')
        }
    });
});

$(".field-input").hover(function(){
    this.focus();
});

$( ".field-input" ).click(
     function() {
         if($(this).hasClass("input-error")){
             $(this).val("");
             $( this ).removeClass("input-error");
        }
    }
  );

$(".bid").on("click", function(){
    $(".modal-bid").toggleClass("active")
    $(".bg-body").toggleClass("active")
});
$(".bg-body.active").on("click", function(){
    console.log("hhhh")
    $(".bg-body").toggleClass("active")
    $(".modal").removeClass("active")

});
// courses
function modalOpen() {
    $('.modal-bid').toggleClass('active');
    
    setTimeout(function(){
        $('.modal-succes ').toggleClass('active');
    }, 1500);
    setTimeout(function(){
        $('.modal').removeClass('active');
        $(".bg-body").toggleClass("active")
    }, 5000);

}

function succesOpen() {
  $(".bg-body").toggleClass("active")
  setTimeout(function(){
      $('.modal-succes ').toggleClass('active');
  }, 1500);
  setTimeout(function(){
      $('.modal-succes ').toggleClass('active');
      $(".bg-body").toggleClass("active")
  }, 5000);

}

$(window).resize(function() {
    var viewportWidth = $(this).width();
    if (viewportWidth <= 768) {
        $(".courses-item").addClass("open-phone");
    }else {
        $(".courses-item").removeClass("open-phone");

    }
});

var viewportWidth = $(window).width();

    if (viewportWidth <= 768) {
        $(".courses-item").addClass("open-phone");
    }else {
        $(".courses-item").removeClass("open-phone");
        
    }
$(document).ready(function(){
    $(".open-phone").on("click", function(){
  
        if($(this).hasClass('active')){

            $(this).removeClass("active");
            $(this).children().children().siblings('.courses-text').slideUp(300);
        }else{
            $(".open-phone").removeClass("active");
            $(this).addClass("active");
            $('.courses-text').slideUp(300);
            $(this).children().children().siblings('.courses-text').slideDown(300);
        }
    });
});

$(".open-phone").on("click", function(){
    $(this).children(".arrow").toggleClass("active");
})

// end courses

// gallery
$(document).ready(function(){
    //works
    var nextBtn = $(".works-btn");
    $('.works').slick({
        infinite: true,
        variableWidth: true,
        nextArrow: nextBtn,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
    $('.works-img').fancybox({
    helpers:
    {
            overlay:
            {
                    css: { 'background': 'red' }
            }
    }  
    });
    //end works
    var nextBtn2 = $(".girls-btn");
    $('.girls').slick({
        nextArrow: nextBtn2,
        variableWidth: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
    $('.girls-img').fancybox();
});

// end gallery

// reviews
$(document).ready(function(){
    $('.reviews-list').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        variableWidth: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
});
// end reviews

// map 
function myMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 49.23151203828921, lng: 28.468754223829126},
    zoom: 18,
    disableDefaultUI:true,
  });
  var viewportWidth = $(window).width();
  var marIcon2 = 'location2.png';
  var marIcon = 'location.png';
  var newMark = ''
  if(viewportWidth <= 768){
    newMark += marIcon2
  }else{
  var marIcon = 'location.png';
    newMark += marIcon
  }

  var markerPath = 'images/contacts/' + newMark
  // Создаем маркер на карте
var marker = new google.maps.Marker({

  // Определяем позицию маркера
  position: {lat: 49.23151203828921, lng: 28.468754223829126},

  // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
  map: map,

  icon: markerPath,
  // Пишем название маркера - появится если навести на него курсор и немного подождать
  title: 'Наш маркер: Большой театр'
});
}

// end map

//scrollToo 
// $('.about-itm').scrollTo('#about');
// $('.courses-itm').scrollTo('#courses');
// $('.gallery-itm').scrollTo('#gallery');
// $('.reviews-itm').scrollTo('#reviews');
// $('.contacts-itm').scrollTo('#contacts');

$(".about-itm").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#about").offset().top
  }, 2000);
});

$(".courses-itm").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#courses").offset().top
  }, 2000);
});

$(".gallery-itm").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#gallery").offset().top
  }, 2000);
});

$(".reviews-itm").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#reviews").offset().top
  }, 2000);
});

$(".contacts-itm").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#contacts").offset().top
  }, 2000);
});