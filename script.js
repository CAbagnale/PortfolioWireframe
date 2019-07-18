function showHideMenu() {
    $('.hamburger').click(function(){
        $('.mobile-nav').toggleClass('hidden')
    })
}

function hideOnClick() {
    $('.menu-button').click(function() {
        $('.mobile-nav').addClass('hidden')
    })
    $('.name').click(function() {
        $('.mobile-nav').addClass('hidden')
    })
}

function initialize () {
    showHideMenu();
    hideOnClick();
}

$(initialize);