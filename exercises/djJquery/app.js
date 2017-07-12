

$(".submit").on("click", () => {
    $(".box").fadeToggle("slow");
    $(".box").css("background-color", "green");
    $(".box").css("border-radius", "100%");
    $(".box").css("height", "10vh")
})

$(".submit").on("mouseover", () => {
    $(".box").fadeToggle(300);
    $(".box").css("background-color", "orange");
    $(".box").css("border-radius", "50%")
    $(".box").css("height", "60vh")
})