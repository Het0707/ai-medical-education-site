function resizeIframe(obj) {
    try {
        obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
    } catch (e) {
        console.warn("Iframe resize error:", e);
    }
}

function loadPage(pageUrl) {
    const iframe = document.getElementById("content-frame");
    if (iframe) {
        iframe.src = pageUrl;

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        highlightActiveButton(pageUrl);
    } else {
        console.error("Iframe not found!");
    }
}

function highlightActiveButton(pageUrl) {
    const buttons = document.querySelectorAll("nav button");

    buttons.forEach((btn) => {
        const page = btn.textContent.toLowerCase();
        if (pageUrl.includes(page.replace(" ", "_"))) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}
