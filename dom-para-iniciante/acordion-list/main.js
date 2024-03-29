function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  tabContent[0].classList.add("ativo");

  function ativeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo");
  }

  tabMenu.forEach((e, index) => {
    e.addEventListener("click", () => {
      ativeTab(index);
    });
  });
}
initTabNav();

function initAcordion() {
  const acordionList = document.querySelectorAll(".js-acordion dt");
  const activeClass = "ativo";

  if (acordionList.length) {
    acordionList[0].classList.add(activeClass);
    acordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAcordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    acordionList.forEach((item) => {
      item.addEventListener("click", activeAcordion);
    });
  }
}
initAcordion();
