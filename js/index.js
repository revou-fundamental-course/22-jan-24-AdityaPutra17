//responsive navbar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
//end responsive navbar

// slide
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("myslide");
  let dots = document.getElementsByClassName("line");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
//end slide

// validasi
function validasi(){
  var nama = document.getElementById('name').value
  var email = document.getElementById('email').value
  var pilih = document.getElementById('pilih').value
  if (nama != "" && email =="" && pilih == "0"){
    alert('you have to fill in the email and select the options')
  }else if (nama =="" && email !="" && pilih == "0") {
    alert('you have to fill in the name and select the optins')
  }else if(nama != "" && email !="" && pilih =="0"){
    alert('please select the optins')
  }else if(nama != "" && email != "" && pilih != "0") {
    return true
  }else{
    alert("You must fill the form")
  }
  
}

// end validasi
