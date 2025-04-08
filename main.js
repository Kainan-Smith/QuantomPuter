const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');


hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

// SLIDING DIV
$(".slide-content-left").scroll(function() {
    $(this).animate({
        opacity: "100%",
        left: "65%"
    });
})

$(".slide-content-right").scroll(function() {
    $(this).animate({
        opacity: "100%",
        right: "165%"
    });
})