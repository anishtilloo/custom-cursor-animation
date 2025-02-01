var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var image = document.querySelector("#image");

main.addEventListener("mousemove", function(event) {
    gsap.to(cursor, {
        x: event.x + cursor.style.width,
        y: event.y + cursor.style.height,
        duration: 0.5,
    })
});

image.addEventListener("mouseenter", function(event) {
    cursor.innerHTML = "View More";
    gsap.to(cursor, {
        scale: 4,
        backgroundColor: "#ffffff8a",
    });
});

image.addEventListener("mouseleave", function (event) {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#ffffff",
    });
});