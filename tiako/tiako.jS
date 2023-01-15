function openNav() {
    document.getElementById("myNav").style.height = "100%"; }
      
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    
  }
  
  const visualiser = document.getElementsByClassName('slider');
  let etape= 0;
  
  function slideNext() {
    visualiser[etape].classList.remove('active')
    etape++;console.log(etape);
  
    if(etape >= document.querySelectorAll(".slider").length){
      etape = 0;
    }
    visualiser[etape].classList.add('active')
  }
  
  function slideBack(){
    visualiser[etape].classList.remove('active')
    etape--;console.log(etape);
    if(etape < 0 ){
      etape = document.querySelectorAll(".slider").length - 1 ;
    }
    visualiser[etape].classList.add('active')
  }
