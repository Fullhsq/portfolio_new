window.addEventListener('scroll', function() {
    let block = document.getElementById('sideBar');
    let scrollPosition = window.scrollY;
  
    if (scrollPosition > 500 && scrollPosition < 4700) {
       block.classList.add("visuall");
    } 
    else{
       block.classList.remove("visuall");
    }
  });