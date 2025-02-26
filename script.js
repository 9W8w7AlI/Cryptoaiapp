document.getElementById("scrollTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", function() {
    document.getElementById("scrollTop").style.display = window.scrollY > 200 ? "block" : "none";
});