<script>
function initBook() {
    const book = new St.PageFlip(document.getElementById("book"), {
        width: 490,
        height: 640,
        size: "stretch",
        showCover: true,
        maxShadowOpacity: 0.75,
        flippingTime: 900,
        drawShadow: true,
        useMouseEvents: true,
        swipeDistance: 20,
        mobileScrollSupport: true
    });

    book.loadFromHTML(document.querySelectorAll(".page"));

    setTimeout(() => {
        document.body.classList.add("ready");
    }, 400);
}

/* 🔥 ГЛАВНЫЙ ФИКС (ключевой момент) */
if (document.readyState === "complete") {
    initBook();
} else {
    window.addEventListener("load", initBook);
}
</script>
