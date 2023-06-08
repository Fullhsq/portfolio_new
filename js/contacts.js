let page = document.querySelector('.page');
let themeButton = document.querySelector('.change-theme');
function fun1() {
    page.classList.toggle('light-theme');
    page.classList.toggle('dark-theme'); 
};
//cookkies
$(function() {      
    $(".btn").click(function() {
      $(".cookies-agreement").addClass("cookies-agreement-closed"); 
    });
  });

//*onscroll\\
window.addEventListener('scroll', function() {
  let block = document.getElementById('sideBar');
  let scrollPosition = window.scrollY;

  if (scrollPosition > 500 && scrollPosition < 1500) {
     block.classList.add("visuall");
  } 
  else{
     block.classList.remove("visuall");
  }
});
//**send massage contacts.html */
document.getElementById('button-submit').addEventListener('click', function() {
  document.getElementById('name').value = '';
  document.getElementById('mail').value = '';
  document.getElementById('text').value = '';
})
