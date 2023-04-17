const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');
tabContent[0].classList.add('ativo')

function ativeTab(index) {
  tabContent.forEach((section) => {
    section.classList.remove('ativo'); 
  });
  tabContent[index].classList.add('ativo');
}

tabMenu.forEach((e,index) => {
   e.addEventListener('click', () => {
     ativeTab(index);
   })
});