const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');


hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

// SLIDING DIV
$("#slide-img").click(function() {
    $(this).animate({"right": "50px"}, "slow");
});