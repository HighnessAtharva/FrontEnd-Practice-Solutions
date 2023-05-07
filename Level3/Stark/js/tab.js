// tab animation slider
const tabLinks = document.querySelectorAll(".tab-slider-bar-item");
const tabContent = document.querySelectorAll(".tab-slider-item-body");

tabLinks.forEach((link) => {
    link.addEventListener("click", () => {
        const tabId = event.target.id; // one two
        const currentTab = document.querySelectorAll("#" + tabId); // array with tabId as id

        currentTab[0].classList.add("flex");
        currentTab[0].classList.remove("hidden");
        currentTab[1].classList.add("active")

        // content of tabs
        tabContent.forEach((Content) => {
            if (Content.id != tabId) {
                Content.classList.add("hidden")
            }
        })


        for (const l of tabLinks) {
            if (l.id !== tabId) {
                l.classList.remove('active');
            }
        }
    })
});
