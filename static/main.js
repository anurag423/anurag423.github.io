if (window.innerWidth > 1110) {
    const parallax = document.querySelectorAll(".parallax");
    console.log(parallax)
    window.addEventListener("scroll", function() {
        let offset = window.pageYOffset;
        parallax.forEach(function(prllx, i) {
            //console.log("Parallax " + i + ": " + prllx.offsetTop + " / Window: " + offset);
            prllx.style.backgroundPositionY = (offset - prllx.offsetTop) * 0.7 + "px";
        })
    })
}