window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelector(".tabs"),
    tabsContent = tabs.querySelector(".tabs__content"),
    tabsImages = tabs.querySelectorAll(".tabs__images img"),
    tabsItems = tabs.querySelectorAll(".tabs__item");

  function hideTabsContent() {
    tabsImages.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    tabsItems.forEach((item) => {
      item.classList.remove("tabs__item_active");
    });
  }

  function showTabsContent(i = 0) {
    if (tabsImages[i]) {
      tabsImages[i].classList.add("show", "fade");
      tabsImages[i].classList.remove("hide");
    }
    tabsItems[i].classList.add("tabs__item_active");
  }
  hideTabsContent();
  showTabsContent();

  tabsContent.addEventListener("click", (e) => {
    const target = e.target;

    if (target && target.classList.contains("tabs__item")) {
      tabsItems.forEach((item, i) => {
        if (item == target) {
          hideTabsContent();
          showTabsContent(i);
        }
      });
    }
  });
});
