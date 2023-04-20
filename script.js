$(document).ready(function(){

// Burger MENU ########

var burgerMenu_btn = document.getElementById('menu_icon');
var burgerMenu_overlay = document.getElementById('menu_box');
burgerMenu_btn.addEventListener('click',function() {
    this.classList.toggle("clicked");
    burgerMenu_overlay.classList.toggle("open");

})

// Slider ########

    // get current slide index
    let curSlide;
    let i;
    $('.article').each(function(i,e){
        $(e).hasClass('active')?curSlide = i : null;
    })
    getSlide();
    
    // next button
    $('#left_article').click(nextBtn);
    // prev button
    $('#right_article').click(prevBtn);

    function prevBtn(){

        $('.article').last().prependTo($('#carousel_articles'));
        getSlide();
    }

    function nextBtn(){
        $('.article').first().appendTo($('#carousel_articles'));
        getSlide();
    }


    function getSlide() {
        $('.article').removeClass('active');
        $('.article').each(function(i,e){
            $('.article').eq(curSlide).addClass('active');
        })
    }



})