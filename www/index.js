window.addEventListener("scroll", e => {
    var y = window.scrollY
    var h = window.innerHeight
    //var ely = document.getElementById("s4").offsetTop;
    var s3ely = document.getElementById("s3Box2").offsetTop;

    // if( y > ely - h) {
    //     document.getElementById("s4download").classList.add("on-view")
    // }else {
    //     document.getElementById("s4download").classList.remove("on-view")
    // }

    if(y+100 > s3ely) {
        document.getElementById("s3Box2Text01").classList.add("on")
    }else {
        document.getElementById("s3Box2Text01").classList.remove("on")
    }
})


$('.s6_guide_container dt').click(function(){
    if($(this).hasClass('on')){
        $(this).removeClass('on');
        $(this).next("dd").slideUp();
    } else {
        $(this).addClass('on');
        $(this).next("dd").slideDown();
    }
});

$(".s1--popup").click(function(){
    $(this).fadeOut()
});