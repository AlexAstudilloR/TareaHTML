let toogle= document.getElementById('container');
let body= document.querySelector('body');
let header= document.querySelector('header');
let footer= document.querySelector('footer');

toogle.onclick= function(){
  toogle.classList.toggle('active');
  toogle.classList.toggle('deactivated');
  body.classList.toggle('active');
  header.classList.toggle('active');
  footer.classList.toggle('active');
}