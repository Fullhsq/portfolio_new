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

  if (scrollPosition > 500 && scrollPosition < 2700) {
     block.classList.add("visuall");
  } 
  else{
     block.classList.remove("visuall");
  }
});

/* popup maket */
let myModals = document.querySelectorAll("#my-modal");
let secondModal = document.querySelector(".second-project")
let thirdModal = document.querySelector(".third-project");
let myModalsThird = document.querySelectorAll("#my-modal-third")
let fourthModal = document.querySelector(".fourth-project")
let myModalsFourth = document.querySelectorAll("#my-modal-fourth")

function func7() {
  myModals.forEach(function(modal) {
    modal.classList.add("open");
    secondModal.style.display = "none"
    fourthModal.style.display = "none"
    thirdModal.style.display = "none"
  });
}
function func8(){
  myModals.forEach(function(modal) {
    modal.classList.remove("open");
    secondModal.style.display = "flex"
    fourthModal.style.display = "flex"
    thirdModal.style.display = "flex"
  });
}

let myModalsSecond = document.querySelectorAll("#my-modal-second");

function func10() {
  myModalsSecond.forEach(function(modalsecond) {
    modalsecond.classList.add("open");
    fourthModal.style.display = "none"
    thirdModal.style.display = "none"

  });
}
function func9(){
  myModalsSecond.forEach(function(modalsecond) {
    modalsecond.classList.remove("open");
    fourthModal.style.display = "flex"
    thirdModal.style.display = "flex"
    
  });
}


function func12() {
  myModalsThird.forEach(function(modalthird) {
    modalthird.classList.add("open");
    fourthModal.style.display = "none"
  });
}
function func11(){
  myModalsThird.forEach(function(modalthird) {
    modalthird.classList.remove("open");
    fourthModal.style.display = "flex"
  });
}

function func16() {
  myModalsFourth.forEach(function(modalfourth) {
    modalfourth.classList.add("open");

  });
}
function func15(){
  myModalsFourth.forEach(function(modalfourth) {
    modalfourth.classList.remove("open");
    
  });
}
/* калькулятор цін */
let developPrice = document.querySelector(".developPrice");
let designPrice = document.querySelector(".designPrice");
let advertisingPrice = document.querySelector(".advertisingPrice");
let translatePrice = document.querySelector(".translatePrice");
let totalPrice = document.querySelector(".totalPrice");

function fun20(){
	let checked = document.querySelectorAll("input:checked");
	
	developPrice.innerText = 0;
	designPrice.innerText = 0;
	advertisingPrice.innerText = 0;
	translatePrice.innerText = 0;
	
	for (let i = 0; i < checked.length; i++){
		let price1 = checked[i].dataset.price1;
		let price2 = checked[i].dataset.price2;
		let price3 = checked[i].dataset.price3;
		let price4 = checked[i].dataset.price4;

		developPrice.innerText = Number(developPrice.innerText) + Number(price1);
		designPrice.innerText = Number(designPrice.innerText) + Number(price2);
		advertisingPrice.innerText = Number(advertisingPrice.innerText) + Number(price3);
		translatePrice.innerText = Number(translatePrice.innerText) + Number(price4);
		
		totalPrice.innerText = Number(developPrice.innerText) + Number(designPrice.innerText) + Number(advertisingPrice.innerText) + Number(translatePrice.innerText);
	}
}
document.getElementById('button-submit').addEventListener('click', function() {
  document.getElementById('mail').value = '';
})